import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import axios from 'axios';

const TableCardAdmin = ({ number, status, waiterRequested}) => {

  const handleTablePress=()=>{
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
  
  // const logo = require('../../assets/images/Brushed-Willow-Rd-TT_1800x1800.webp');

  return (
    <View style={[styles.container, cardStyle]}>
      <View style={styles.imageContainer}>
      </View>
      <View
        style={styles.tableNoWrapper}
      >
        <Text style={styles.number}>
          {number < 100 ? number.toString().padStart(3, '0') : number}
        </Text>
      </View>
      <Text style={[styles.status, textSyle]}>{statusText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    aspectRatio: 1,
    borderRadius: 20,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.9,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: 'midnightblue',
    borderWidth: 2
    
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
    top: -12, 
    right: -12, 
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    borderRadius: 50,
    padding: 4,
  },
  tableNoWrapper: {
    backgroundColor: 'aliceblue',
    borderWidth: 0.3, 
    borderColor: 'midnightblue', 
    padding: 5, 
    borderRadius: 5, 

  },
  status: {
    marginTop: 8

  },





});

export default TableCardAdmin;
