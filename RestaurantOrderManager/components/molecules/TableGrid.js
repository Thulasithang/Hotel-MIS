import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TableCard from '../atoms/TableCard'; 

const TableGrid = ({ tableData }) => {


      const renderItem =({item})=>{

        let status = 'free'; // Default status is 'free'

        if (item.reserved) {
          status = 'reserved';
        } else if (item.occupied) {
          status = 'occupied';
        }

        return(<TableCard
            number={item.table_id.toString()}
            status={status}
            waiterRequested={item.waiter_requested} 
          />);
      }

  return (
    <View style={styles.container}>
    <FlatList
      data={tableData}
      numColumns={4} 
      keyExtractor={(item) => item.table_id.toString()} 
      renderItem={renderItem}
      contentContainerStyle={styles.gridContainer}
    />
    </View>
  );
};

const styles = StyleSheet.create({

  gridContainer: {
    padding: 10,
  },

  container:{
    backgroundColor:'aliceblue',
  },
});

export default TableGrid;
