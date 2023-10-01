import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomHeader = ({ navigation }) => {
  const handleHomeScreen = () => {
    navigation.navigate("AdminHome");
  };
  const handleBookingScreen = () => {
    navigation.navigate("BookingScreen");
  };

  const handleRoomsScreen = () => {
    navigation.navigate("RoomScreen");
  };

  const handleStaffScreen = () => {
    navigation.navigate("StaffScreen");
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={handleHomeScreen}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleBookingScreen}>
        <Text style={styles.buttonText}>Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRoomsScreen}>
        <Text style={styles.buttonText}>Rooms</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleStaffScreen}>
        <Text style={styles.buttonText}>Staff</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#030957",
    padding: 10,
    borderRadius: 25,
    width: 80,
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    color: "aliceblue",
    alignContent: "center",
    textAlign: "center",
  },
});

export default CustomHeader;
