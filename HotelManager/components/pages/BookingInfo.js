import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Alert, StyleSheet, TouchableOpacity } from "react-native";
// import DatePicker from "react-native-modern-date-picker";
import ipAddress from "../../config";
import DatePicker from "expo-datepicker";

const BookingInfo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { booking } = route.params;
  console.log("Booking", booking);

  const checkIn = booking.Cin;
  const checkOut = booking.Cout;
  const roomId = booking.RoomId;
  const firstName = booking.FirstName;
  const lastName = booking.LastName;
  const bookingId = booking.ID;

  const handleDelete = () => {
    Alert.alert(
      "Delete Booking",
      "Are You Sure to Delete the booking ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Sure",
          onPress: () => {
            const deleteIds = [bookingId];
            console.log("Delete Ids", deleteIds);
            const requestBody = {
              bookingIdList: deleteIds,
            };

            apiUrl = `${ipAddress}/api/v1/room/booking/delete-selections`;
            fetch(apiUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestBody),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Success:", data);
              })
              .catch((error) => {
                // Handle any errors here
                console.error("Error:", error);
              });
            navigation.reset({
              index: 0,
              routes: [{ name: "BookingScreen" }],
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking Details</Text>
      <View style={styles.infoContainer}>
        <View style={styles.lefttextContainer}>
          <Text style={styles.lableText}>Booking ID</Text>
        </View>
        <View style={styles.righttextContainer}>
          <Text style={styles.detailtext}> {bookingId} </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.lefttextContainer}>
          <Text style={styles.lableText}>Name</Text>
        </View>
        <View style={styles.righttextContainer}>
          <Text style={styles.detailtext}>
            {" "}
            {firstName} {lastName}{" "}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.lefttextContainer}>
          <Text style={styles.lableText}>Check-In</Text>
        </View>
        <View style={styles.righttextContainer}>
          <Text style={styles.detailtext}>
            {" "}
            {new Date(checkIn).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.lefttextContainer}>
          <Text style={styles.lableText}>Check-Out</Text>
        </View>
        <View style={styles.righttextContainer}>
          <Text style={styles.detailtext}>
            {new Date(checkOut).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.lefttextContainer}>
          <Text style={styles.lableText}>Room ID</Text>
        </View>
        <View style={styles.righttextContainer}>
          <Text style={styles.detailtext}> {roomId} </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.removeButton} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
    alignSelf: "center",
  },
  infoContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  header: {
    fontSize: 25,
    color: "#030957",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
  },
  lableText: {
    fontSize: 16,
    margin: 5,
    fontWeight: "bold",
  },
  detailtext: {
    fontSize: 16,
    margin: 5,
    fontWeight: "bold",
  },

  lefttextContainer: {
    flex: 3,
    justifyContent: "space-between",
    backgroundColor: "#BDCDFF",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  righttextContainer: {
    flex: 6,
    justifyContent: "space-between",
    backgroundColor: "#BDCDFF",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  removeButton: {
    backgroundColor: "firebrick",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    alignSelf: "flex-end",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BookingInfo;
