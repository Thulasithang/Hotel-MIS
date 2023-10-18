import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminTableGrid from '../molecules/AdminTableGrid';
import ReservationList from '../molecules/ReservationList';
import IpConfig from '../../IpConfig';

const baseUrl = `http://${IpConfig.apiBaseUrl}:8080/api/v1`;

const AdminTableScreen = () => {
  const [testData, setTestData] = useState([]);
  //const [resTestData, setResTestData] = useState([]);
  const [reservationsChanged, setReservationsChanged] = useState(false);
  const [reservations, setReservations] = useState([]);
  
  useEffect(() => {
    fetch(`http://${IpConfig.apiBaseUrl}:8080/api/v1/reservation/future`)
      .then((response) => response.json())
      .then((data) => {
        setReservations(data);
      })
      .catch((error) => {
        console.error('Error fetching reservations:', error);
      });
  }, []);


  useEffect(() => {
    axios.get(baseUrl + "/table")
      .then((response) => {
        setTestData(response.data.map(item => ({
          table_id: item.id,
          reserved: item.reserved,
          occupied: item.occupied,
          waiter_requested: item.waiterRequested
        }))); 
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, [reservationsChanged]);



  const onRemoveReservation = (reservationId) => {

    axios.delete(`http://${IpConfig.apiBaseUrl}:8080/api/v1/reservation/${reservationId}`)
    .then(() => {
      console.log('Delete successful');
      // Set menuItemsChanged to trigger the useEffect
      setReservations((prevReservations) =>
      prevReservations.filter((reservation) => reservation.reservationId !== reservationId));
      setReservationsChanged(!reservationsChanged)
    })
    .catch((error) => {
      console.error('Error removing reservation:', error);
    });






    // try {
      
    //   axios.delete(`http://${IpConfig.apiBaseUrl}:8080/api/v1/reservation/${reservationId}`);
    //   if (response.status === 204) {
    //     setReservationsChanged(!reservationsChanged)
    //         console.count('reservation removed')
    //   } 
    // } catch (error) {
    //   console.error('Error deleting reservation:', error);
    // }
    
    // setReservations((prevReservations) =>
    //   prevReservations.filter((reservation) => reservation.reservationId !== reservationId)
    // );
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <AdminTableGrid tableData={testData} />
      </View>
      <View style={styles.rightContainer}>
        <ReservationList reservations={reservations}  onRemoveReservation={onRemoveReservation}/>
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