import React from "react";
import { View, Text, Alert, StyleSheet, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import NavHeader from "../atoms/NavHeader";
import Table from "../atoms/Table";
import Button from "../atoms/Button";
import ForumView from "../atoms/ForumView";
import CategoryButton from "../atoms/CategoryButton";
import { useState } from "react";

const StaffScreen = () => {
  const [filteredData, setFilteredData] = useState(null);
  const navigation = useNavigation();

  const columns = [
    { title: "ID", flex: 2 },
    { title: "Name", flex: 3 },
  ];

  const data = [
    { ID: 1, Name: "John",},
    { ID: 2, Name: "Josh",},
    { ID: 3, Name: "Alice", },
    { ID: 4, Name: "Emily",  },
    { ID: 5, Name: "Mike", },
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

  // const filterOnWork = () => {
  //   // Handle the category button press action here
  //   Alert.alert("Category Button Pressed");
  // };
  // const filterAbsent = () => {
  //   // Handle the category button press action here
  //   Alert.alert("Category Button Pressed");
  // };

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
        <View style={styles.filterButtons}>
        </View>
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
    // Expand to fill available space
    alignItems: "flex-end", // Align to the right
    justifyContent: "flex-start", // Align to the bottom
  },
});

export default StaffScreen;

{/* <CategoryButton title="OnWork" onPress={filterOnWork} />
<CategoryButton title="Absent" onPress={filterAbsent} /> */}
