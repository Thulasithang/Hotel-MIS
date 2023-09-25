
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import OrderCard from '../atoms/OrderCard';
import { constructOrdersArray } from '../OrderData';


const OrderCardScreen = () => {

  const [orders, setOrders] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersArray = await constructOrdersArray();
        setOrders(ordersArray); // Set the orders state variable
      } catch (error) {
        console.error('Error fetching orders data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(order) => order.orderId.toString()}
        renderItem={({ item }) => <OrderCard order={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OrderCardScreen;


// const orders1 = [
//   {
//     orderId: 1,
//     tableId: 3,
//     menuItems: [
//       { id: 1, name: 'Burger', quantity: 2 },
//       { id: 2, name: 'Fries', quantity: 1 },
//       { id: 3, name: 'Soda', quantity: 3 },
//     ],
//   },
//   {
//     orderId: 2,
//     tableId: 2,
//     menuItems: [
//       { id: 4, name: 'Pizza', quantity: 1 },
//       { id: 5, name: 'Salad', quantity: 2 },
//       { id: 6, name: 'Water', quantity: 4 },
//     ],
//   },
//  
// ];