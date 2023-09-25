import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminTableGrid from '../molecules/AdminTableGrid';
import ReservationList from '../molecules/ReservationList';

const baseUrl = 'http://192.168.1.9:8080/api/v1';

const AdminTableScreen = () => {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + "/table")
      .then((response) => {
        setTestData(response.data); 
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []);

  const resTestData = testData.map(item => ({
    table_id: item.id,
    reserved: item.reserved,
    occupied: item.occupied,
    waiter_requested: item.waiterRequested
  }));

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <AdminTableGrid tableData={resTestData} />
      </View>
      <View style={styles.rightContainer}>
        <ReservationList/>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row', 
  },
  leftContainer: {
    flex: 3, 
  },
  rightContainer: {
    flex: 4, 
    elevation: 20,
    backgroundColor: 'white',
    padding: 15
   
  },
  addButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AdminTableScreen;


{/* <TouchableOpacity style={styles.addButton}>
<Text style={styles.buttonText}>Add Table</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.removeButton}>
<Text style={styles.buttonText}>Remove Table</Text>
</TouchableOpacity> */}