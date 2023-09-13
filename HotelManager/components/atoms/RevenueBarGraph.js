import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const data = [
  { month: 'Jan', revenue: 5000 },
  { month: 'Feb', revenue: 7000 },
  { month: 'Mar', revenue: 6000 },
  { month: 'Jan', revenue: 5000 },
  { month: 'Feb', revenue: 7000 },
  { month: 'Mar', revenue: 6000 },
  { month: 'Jan', revenue: 5000 },
  { month: 'Feb', revenue: 7000 },
  { month: 'Mar', revenue: 6000 },
  { month: 'Jan', revenue: 5000 },
  { month: 'Feb', revenue: 7000 },
  { month: 'Mar', revenue: 6000 },
  // Add data for the remaining months
];

const BarChart = () => {
  const maxRevenue = Math.max(...data.map((item) => item.revenue));
  const barWidth = width/15;
  const chartHeight = 200;
  const spacing = (width*2/14)/11;

  return (
    <View style={styles.container}>
      <Svg width={data.length * (barWidth + spacing)} height={chartHeight}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Rect
              x={index * (barWidth + spacing)}
              y={(chartHeight - (item.revenue / maxRevenue) * chartHeight)}
              width={barWidth}
              height={(item.revenue / maxRevenue) * chartHeight}
              fill="midnightblue"
              rx={10}
              ry={10}
            />
            <SvgText
              x={index * (barWidth + spacing) + barWidth / 2}
              y={chartHeight - 10}
              fontSize="10"
              fill="aliceblue"
              textAnchor="middle"
            >
              {item.month}
            </SvgText>
            <SvgText
              x={index * (barWidth + spacing) + barWidth / 2}
              y={chartHeight - (item.revenue / maxRevenue) * chartHeight + 20}
              fontSize="10"
              fill="aliceblue"
              textAnchor="middle"
            >
              {(item.revenue/1000).toFixed(1) + "k"}
            </SvgText>
          </React.Fragment>
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10
  },
});

export default BarChart;
