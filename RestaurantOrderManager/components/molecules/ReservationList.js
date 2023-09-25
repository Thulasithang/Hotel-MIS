import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  
  useEffect(() => {
    fetch('http://192.168.1.9:8080/api/v1/reservation/future')
      .then((response) => response.json())
      .then((data) => {
        setReservations(data);
      })
      .catch((error) => {
        console.error('Error fetching reservations:', error);
      });
  }, []);

  const confirmRemoveReservation = (reservationId) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to remove this reservation?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => onRemoveReservation(reservationId),
        },
      ],
      { cancelable: false }
    );
  };

  const onRemoveReservation = async (reservationId) => {
    console.log(reservationId.toString())
    console.log(`http://192.168.1.9:8080/api/v1/reservation${reservationId}`)
    try {
      
      const response = await axios.delete(`http://192.168.1.9:8080/api/v1/reservation/${reservationId}`);
      if (response.status === 204) {
            // console.count('reservation removed')
      } 
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
    
    setReservations((prevReservations) =>
      prevReservations.filter((reservation) => reservation.reservationId !== reservationId)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>ID</Text>
        <Text style={styles.headerText}>Table</Text>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Date</Text>
        <Text style={styles.headerText}>From</Text>
        <Text style={styles.headerText}>To</Text>
        <Text style={styles.headerText}>   </Text> 
      </View>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.reservationId.toString()}
        renderItem={({ item }) => (
          <View style={styles.reservationRow}>
            <Text style={styles.reservationText}>{item.reservationId}</Text>
            <Text style={styles.reservationText}>{item.tableId}</Text>
            <Text style={styles.reservationText}>{item.customerName}</Text>
            <Text style={styles.reservationText}>{item.date}</Text>
            <Text style={styles.reservationText}>{item.startTime}</Text>
            <Text style={styles.reservationText}>{item.endTime}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => confirmRemoveReservation(item.reservationId)}
            >
              <Text style={styles.removeText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: 'midnightblue',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  reservationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  reservationText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  removeButton: {
    aspectRatio: 1,
    width: 50,
    backgroundColor: 'crimson',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  removeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  separator: {
    height: 3,
    backgroundColor: 'lightgray',
    marginVertical: 20,
    marginHorizontal: 30,
  },
};

export default ReservationList;
