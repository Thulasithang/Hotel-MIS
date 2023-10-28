import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios"; // Import Axios for making HTTP requests
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import NavHeader from "../atoms/NavHeader";
import Table from "../atoms/Table";
import Button from "../atoms/Button";
import ForumView from "../atoms/ForumView";
import ipAddress from "../../config";

const StaffScreen = () => {
  const [data, setData] = useState([]); // Initialize the state for employee data
  const [filteredData, setFilteredData] = useState(null);
  const navigation = useNavigation(); // Initialize the navigation

  useEffect(() => {
    // Define a function to fetch data from the backend
    const fetchDataFromBackend = async () => {
      try {
        const response = await axios.get(`${ipAddress}/api/v1/user/staff`);
        // Extract the relevant data from the response
        const formattedData = response.data.map((item) => ({
          ID: item.userId,
          Name: item.fullName,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data from the backend:", error);
      }
    };

    fetchDataFromBackend();
  }, []);

  const columns = [
    { title: "ID", flex: 2 },
    { title: "Name", flex: 3 },
  ];

  const handleAddEmployee = () => {
    // Navigate to the screen for adding an employee
    navigation.navigate("AddEmployeeScreen");
  };

  const handleConfirm = (rowData) => {
    console.log("StaffID", rowData.ID);
    const staffID = rowData.ID;
    navigation.navigate("StaffTask", staffID);
  };

  const handleFilterInputChange = (text) => {
    // Filter the data based on the entered staff ID
    const filtered = data.filter((item) => item.ID.toString().includes(text));
    setFilteredData(filtered);
  };

  return (
    <ScrollView>
      <View style={styles.right_form}>
        <NavHeader navigation={navigation} />
        <Button onPress={handleAddEmployee} title="Add Employee" />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Filter By</Text>
        <ForumView
          title="Staff ID"
          rightText="Enter "
          onInputChange={handleFilterInputChange}
        />
      </View>
      <View style={styles.container}>
        <Table columns={columns} data={filteredData || data} onConfirm={handleConfirm} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  filterButtons: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
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
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});

export default StaffScreen;
