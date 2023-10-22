import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BarChart from "../atoms/RevenueBarGraph";
import AdminHomeDetailCard from "../atoms/AdminHomeDetailCard";
import NavHeader from "../atoms/NavHeader";
import ipAddress from "../../config";

const AdminHomeScreen = () => {
  const navigation = useNavigation();
  const [responseData, setResponseData] = useState(null);

  const [revenueData, setRevenueData] = useState(null);

  useEffect(() => {
    // Make the GET request when the component mounts
    const apiUrl = `${ipAddress}/api/v1/app/home`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Set the response data to the local constant
        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const apiUrl = `${ipAddress}/api/v1/rev`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRevenueData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <NavHeader navigation={navigation} />
        <AdminHomeDetailCard
          text1="Today's"
          text2="Check-in"
          text3={responseData ? responseData.todayCheckIn : "N/A"}
        />
        <AdminHomeDetailCard
          text1="today's"
          text2="Check-out"
          text3={responseData ? responseData.todayCheckOut : "N/A"}
        />
        <AdminHomeDetailCard
          text1="Today"
          text2="In Hotel"
          text3={responseData ? responseData.todayInHotel : "N/A"}
        />
        <AdminHomeDetailCard
          text1="Total"
          text2="Available Rooms"
          text3={responseData ? responseData.totalAvailableRoom : "N/A"}
        />
        <Text style={styles.text}>Hotel Revenue</Text>
        <BarChart revenue={revenueData} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: "navy",
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
    fontWeight: "bold",
    marginBottom: 10,
    color: "navy",
  },
  buttonText: {
    fontSize: 14,
    color: "aliceblue",
    alignContent: "center",
    textAlign: "center",
  },
});

export default AdminHomeScreen;
