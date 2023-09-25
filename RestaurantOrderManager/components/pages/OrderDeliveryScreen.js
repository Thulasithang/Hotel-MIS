import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import OrderDeliveryCard from '../atoms/OrderDeliveryCard';
import { useRoute, useNavigation } from '@react-navigation/native';

const OrderDeliveryScreen = () => {
  // Sample data for the list of orders
  const route = useRoute();
  const { orders } = route.params;


  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.orderId.toString()}
        renderItem={({ item }) => (
          <OrderDeliveryCard orderId={item.orderId} tableId={item.tableId} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
});

export default OrderDeliveryScreen;
