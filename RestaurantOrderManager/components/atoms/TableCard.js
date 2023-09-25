import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const TableCard = ({ number, status, waiterRequested}) => {
  const [iconName, setIconName] = useState("hand-stop-o"); // waiter request Initial icon name
  const [iconColor, setIconColor] = useState("darkgoldenrod"); // waiter request Initial icon color
  const [acceptRequest, setAcceptRequest] = useState(waiterRequested);

  const navigation=useNavigation();

  const handleWaiterIconPress = () => {

        const apiUrl = 'http://192.168.1.9:8080/api/v1/table/update/'+number+'?waiterRequested=false';
      

        axios.patch(apiUrl)
        .then(response => {
          console.log('Waiter request updated:', response.data);
        })
        .catch(error => {
          console.error('Error updating waiter request:', error);
        });

    setIconName('check')
    setIconColor('green')
    //setAcceptRequest(false);
    setTimeout(() => {
      setAcceptRequest(false);
    }, 1000);
  };


  const handleTablePress=()=>{

    //console.log("Hello, world!");
    navigation.navigate("PlaceOrder", {tableId: number})
    
  }


  let cardStyle, statusText, textSyle;
  

  if (status === 'reserved') {
    cardStyle = styles.reserved;
    textSyle = styles.statusRes;

    statusText = 'Reserved';
  } else if (status === 'occupied') {
    cardStyle = styles.occupied;
    textSyle = styles.statusOcc;
  
    statusText = 'Occupied';
  } else {
    cardStyle = styles.free;
    textSyle = styles.statusFree;
 
    statusText = 'Free';
  }
  
  const TableImage = require('../../assets/images/Brushed-Willow-Rd-TT_1800x1800.webp');
  const tablechairs = require('../../assets/images/round-table-chair-top-view-color-icon-illustration-vector (1).jpg');

  return (
    <View style={[styles.container, cardStyle]}>
      {acceptRequest && (
        <TouchableOpacity
          style={styles.waiterIcon}
          onPress={handleWaiterIconPress}
        >
          <FontAwesome name={iconName} size={35} color={iconColor} />
        </TouchableOpacity>
      )}
      <View style={styles.imageContainer}>
        <Image
          source={TableImage}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
        />
      </View>
      <TouchableOpacity
        style={styles.tableNoWrapper}
        onPress={handleTablePress}
      >
        <Text style={styles.number}>
          {number < 100 ? number.toString().padStart(3, '0') : number}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.status, textSyle]}>{statusText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    aspectRatio: 1,
    borderRadius: 30,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.9,
    elevation: 10,
    backgroundColor: 'white'
    
  },
  imageContainer: {

  },
  reserved: {
    
    shadowColor: `#ff0000`,

  },
  occupied: {
    
    shadowColor: `#32cd32`,
  },
  free: {
    
    shadowColor: `#6495ed`,
  },
  number: {
    fontSize: 24,
    fontWeight: 'bold',
    color:`#00008b`
  },
  statusRes: {
    fontSize: 18,
    marginTop: 8,
    color: `#ff0000`,
  },
  statusOcc: {
    fontSize: 18,
    marginTop: 8,
    color: `#32cd32`,
  },
  statusFree: {
    fontSize: 18,
    marginTop: 8,
    color: `#6495ed`,
  },
  waiterIcon: {
    position: 'absolute',
    top: -12, // Adjust the position to fit your design
    right: -12, // Adjust the position to fit your design
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    borderRadius: 50,
    padding: 4,
  },
  tableNoWrapper: {
    position: 'absolute', // Position the button relative to the container
    bottom: 130,
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //width: '25%',
    //height: '25%',
    backgroundColor: 'aliceblue',
    borderWidth: 0.3, 
    borderColor: 'midnightblue', 
    padding: 5, 
    borderRadius: 5, 
  },





});

export default TableCard;

/*

      {acceptRequest && (
        <TouchableOpacity
          style={styles.waiterIcon}
          onPress={handleWaiterIconPress}
        >
          <FontAwesome name="hand-stop-o" size={35} color="darkgoldenrod" />
        </TouchableOpacity>
      )}

*/