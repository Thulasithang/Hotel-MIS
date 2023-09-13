import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BarChart from '../atoms/RevenueBarGraph';
import AdminHomeDetailCard from '../atoms/AdminHomeDetailCard';

const AdminHomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Rooms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Staff</Text>
        </TouchableOpacity>
      </View>
      <AdminHomeDetailCard text1="Today's" text2="Check-in" text3="23" />
      <AdminHomeDetailCard text1="today's" text2="Check-out" text3="13" />
      <AdminHomeDetailCard text1="Today" text2="In Hotel" text3="17" />
      <AdminHomeDetailCard text1="Total" text2="Available Rooms" text3="7" />
      <Text style={styles.text}>Hotel Revenue</Text>
      <BarChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'navy',
    padding: 10,
    borderRadius: 25,
    width: 80,
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'navy',
  },
  buttonText:{
    fontSize: 14,
    color: "aliceblue",
    alignContent: "center",
    textAlign: "center"
  }
});

export default AdminHomeScreen;
