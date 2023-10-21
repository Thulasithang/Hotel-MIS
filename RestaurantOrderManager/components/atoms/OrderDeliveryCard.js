import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import IpConfig from '../../IpConfig';
const OrderDeliveryCard = ({ orderId, tableId, virtualWaiter }) => {
  const [isDelivered, setIsDelivered] = useState(false);



  const handleDelivery = (orderId) => {

    
    const endpoint = `${IpConfig.apiBaseUrl}/api/v1/order/${orderId}/markDelivered`;
    console.log(endpoint)

    axios
      .patch(endpoint, {})
      .then(response => {
        console.log('Order marked as delivered:', response.data);
      })
      .catch(error => {
        console.error('Error marking order as delivered:', error);

      });

    setIsDelivered(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.tableId}>Table {tableId}</Text>
        {virtualWaiter ? (
          <Text style={{ color: 'seagreen', fontSize: 20 }}>
            Order ID: {orderId} | Ordered Through Virtual Waiter
          </Text>
        ) : (
          <Text style={{ fontSize: 20 }}>Order ID: {orderId}</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        {!isDelivered ? (
          <TouchableOpacity style={styles.button} onPress={()=>handleDelivery(orderId)}>
            <Text style={styles.deliverText}>Deliver</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.deliveredBox}>
            <Text style={styles.deliverText}>Delivered</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    borderRadius: 20,
    margin: 10,
    padding: 20,
    marginBottom: 10,
    elevation: 10,
    marginHorizontal: 60,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
  },
  textContainer: {
    flex: 1, 
  },
  buttonContainer: {
     
  },
  button: {
    backgroundColor: 'midnightblue',
    padding: 10,
    borderRadius: 60,
    elevation: 10,
    alignItems: 'center',
    
  },
  deliveredBox: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 100,
    elevation: 10,
    alignItems: 'center',
     
  },
  deliverText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
  },
  tableId: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'midnightblue',
    marginBottom: 10,
  },
});

export default OrderDeliveryCard;
