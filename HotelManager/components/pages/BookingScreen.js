import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Button from "../atoms/Button";
import ForumView from "../atoms/ForumView";
import NavHeader from "../atoms/NavHeader";
import Table from "../atoms/Table";
import ipAddress from "../../config";

const BookingScreen = () => {
  const navigation = useNavigation();

  // ===============================================
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const apiUrl = `${ipAddress}/api/v1/app/booking?bookingId&customerName`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        // Process the response data and set it to the 'data' state variable
        const formattedData = responseData.map((item) => ({
          ID: item.bookingId.toString(),
          FirstName: item.firstName,
          LastName: item.lastName,
          Cin: item.checkIn,
          Cout: item.checkOut,
          RoomId: item.roomId,
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const columns = [
    { title: "ID", flex: 1 },
    { title: "FirstName", flex: 2 },
    { title: "Cin", flex: 3 },
    { title: "Cout", flex: 3 },
  ];

  const handleConfirm = (rowData) => {
    navigation.navigate("BookingInfo", { booking: rowData });
  };

  // ===============================================
  const handleAddBooking = () => {
    navigation.navigate("AddBooking");
    console.log("Add Booking");
  };
  const handleFilterID = (value) => {
    if (!value) {
      navigation.reset({
        index: 0,
        routes: [{ name: "BookingScreen" }],
      });
    } else {
      const apiUrl = `${ipAddress}/api/v1/app/booking?bookingId=${value}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((responseData) => {
          const formattedData = responseData.map((item) => ({
            ID: item.bookingId.toString(),
            FirstName: item.firstName,
            LastName: item.lastName,
            Cin: item.checkIn,
            Cout: item.checkOut,
            RoomId: item.roomId,
          }));

          console.log("Formatted Data:", formattedData);
          setData(formattedData);
          console.log("Response:", responseData);
          console.log("Data:", data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleFilterName = (value) => {
    if (!value) {
      navigation.reset({
        index: 0,
        routes: [{ name: "BookingScreen" }],
      });
    } else {
      const apiUrl = `${ipAddress}/api/v1/app/booking?customerName=${value}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((responseData) => {
          const formattedData = responseData.map((item) => ({
            ID: item.bookingId.toString(),
            FirstName: item.firstName,
            LastName: item.lastName,
            Cin: item.checkIn,
            Cout: item.checkOut,
            RoomId: item.roomId,
          }));

          console.log("Formatted Data:", formattedData);
          setData(formattedData);
          console.log("Response:", responseData);
          console.log("Data:", data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <ScrollView>
      <View style={styles.right_form}>
        <NavHeader navigation={navigation} />
        <Button onPress={handleAddBooking} title="Create Booking" />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Filter By</Text>
        <ForumView
          title="ID"
          rightText="Enter Booking"
          onInputChange={handleFilterID}
        />
        <ForumView
          title="Name"
          rightText="Enter"
          onInputChange={handleFilterName}
        />
      </View>
      <View style={styles.container}>
        <Table columns={columns} data={data} onConfirm={handleConfirm} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#474747",
    marginLeft: 10,
  },
  container: {
    marginHorizontal: 10,
    justifyContent: "flex-start",
  },
  right_form: {
    // Expand to fill available space
    alignItems: "flex-end", // Align to the right
    justifyContent: "flex-start", // Align to the bottom
  },
  button: {
    backgroundColor: "#030957",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: "flex-end", // Align text to the right
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right", // Align text to the right
  },
});

export default BookingScreen;
