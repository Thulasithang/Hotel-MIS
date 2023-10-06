import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import IpConfig from '../../IpConfig';

const OrderCard = ({order}) => {
  const [expanded, setExpanded] = useState(false);
  const [buttonText, setButtonText] = useState('Accept');
  

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const handleAccept = (orderId) => {
    if (buttonText === 'Accept') {
      setButtonText('Complete Cooking');

      axios
        .patch(`http://${IpConfig.apiBaseUrl}:8080/api/v1/order/${orderId}/markPreparing`, {})
        .then(response => {
          console.log('Order marked as preparing', orderId);
        })
        .catch(error => {
          console.error('Error marking order as preparing:', orderId);
  
        });

    }

    if (buttonText === 'Complete Cooking'){

      const endpoint = `http://${IpConfig.apiBaseUrl}:8080/api/v1/order/${orderId}/markPrepared`;
      console.log(endpoint)
  
      axios
        .patch(endpoint, {})
        .then(response => {
          console.log('Order marked as delivered:', response.data);
        })
        .catch(error => {
          console.error('Error marking order as delivered:', error);
  
        });

        setButtonText("Done")
    }

  };

//   const order = {
//     orderId: 12345,
//     tableId: 3,
//     menuItems: [
//       { id: 1, name: 'Burger', quantity: 2 },
//       { id: 2, name: 'Fries', quantity: 1 },
//       { id: 3, name: 'Soda', quantity: 3 },
//     ],
//   };


  return (
    <View style={styles.card}>
        <View style={buttonText==="Accept"? styles.subcard: styles.subcardPrep}>
            <Text style={styles.orderText}>Order ID: {order.orderId}</Text>
            <Text style={styles.orderText}>Table {order.tableId}</Text>
            <TouchableOpacity
        onPress={()=>handleAccept(order.orderId)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
        </View>


      {expanded && (
        <FlatList
          data={order.menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>{item.name}</Text>
              <Text style={styles.menuItemText} >Quantity: {item.quantity}</Text>
            </View>
          )}
        />
      )}

    <TouchableOpacity onPress={toggleExpansion} style={styles.expandButton}>
        <Text style={styles.expandButtonText}>
          {expanded ? 'Collapse' : 'View Menu Items'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: 'aliceblue',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },

  subcard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'mediumaquamarine',
    padding: 10,
    borderRadius: 40,
    marginTop: 10,
  },

  subcardPrep: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightcoral',
    padding: 10,
    borderRadius: 40,
    marginTop: 10,
    elevation: 10,
    shadowColor: 'orangered',
    shadowRadius: 40,
    shadowOpacity: 1,
    borderColor: 'tomato',
    borderWidth: 1
  },



  orderText: {
    fontSize: 25,
    marginBottom: 5,
    color: 'midnightblue',
    fontWeight: 'bold'
  },

  menuItemText: {
    fontSize: 20,
    marginBottom: 5,
    color: 'midnightblue',
  },

  expandButton: {
    backgroundColor: 'white',
    marginHorizontal: 500,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,

  },
  expandButtonText: {
    color: 'midnightblue',
    fontSize: 18,
  },
  menuItem: {
    marginVertical: 5,
  },

  button: {
    backgroundColor: 'midnightblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 40,
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    
    
  },
});

export default OrderCard;
