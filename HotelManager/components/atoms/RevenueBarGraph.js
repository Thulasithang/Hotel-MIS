import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { Rect, Text as SvgText } from "react-native-svg";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const BarChart = (props) => {
  const revenue = props.revenue;

  const data = [
    { month: "Jan", revenue: 100 },
    { month: "Feb", revenue: 100 },
    { month: "Mar", revenue: 100 },
    { month: "Apr", revenue: 100 },
    { month: "May", revenue: 100 },
    { month: "Jun", revenue: 100 },
    { month: "Jul", revenue: 100 },
    { month: "Aug", revenue: 100 },
    { month: "Sep", revenue: 100 },
    { month: "Oct", revenue: 100 },
    { month: "Nov", revenue: 100 },
    { month: "Dec", revenue: 100 },
    // Add data for the remaining months
  ];

  if (revenue) {
    data[0].revenue = revenue.january;
    data[1].revenue = revenue.february;
    data[2].revenue = revenue.march;
    data[3].revenue = revenue.april;
    data[4].revenue = revenue.may;
    data[5].revenue = revenue.june;
    data[6].revenue = revenue.july;
    data[7].revenue = revenue.august;
    data[8].revenue = revenue.september;
    data[9].revenue = revenue.october;
    data[10].revenue = revenue.november;
    data[11].revenue = revenue.december;
  }

  const maxRevenue = Math.max(...data.map((item) => item.revenue));
  const barWidth = width / 15;
  const chartHeight = 200;
  const spacing = (width * 2) / 14 / 11;

  return (
    <View style={styles.container}>
      <Svg width={data.length * (barWidth + spacing)} height={chartHeight}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Rect
              x={index * (barWidth + spacing)}
              y={chartHeight - (item.revenue / maxRevenue) * chartHeight}
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
              {(item.revenue / 1000).toFixed(1) + "k"}
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
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
});

export default BarChart;
