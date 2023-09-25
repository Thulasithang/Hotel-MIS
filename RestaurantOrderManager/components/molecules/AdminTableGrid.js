import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TableCard from '../atoms/TableCard'; 
import TableCardAdmin from '../atoms/TableCardAdmin';

const AdminTableGrid = ({ tableData }) => {


      const renderItem =({item})=>{

        let status = 'free';
        if (item.reserved) {
          status = 'reserved';
        } else if (item.occupied) {
          status = 'occupied';
        }
        return(<TableCardAdmin
            number={item.table_id.toString()}
            status={status}
            waiterRequested={item.waiter_requested} 
          />);
      }
  return (
    <View style={styles.container}>
    <FlatList
      data={tableData}
      numColumns={3} 
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

export default AdminTableGrid;
