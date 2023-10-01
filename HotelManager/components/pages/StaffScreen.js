import React from "react";
import { View, Text, Alert, StyleSheet, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import NavHeader from "../atoms/NavHeader";
import Table from "../atoms/Table";
import Button from "../atoms/Button";
import ForumView from "../atoms/ForumView";
import CategoryButton from "../atoms/CategoryButton";

const StaffScreen = () => {
  const navigation = useNavigation();

  const columns = [
    { title: "ID", flex: 2 },
    { title: "Name", flex: 3 },
    { title: "Status", flex: 3 },
  ];

  const data = [
    { ID: "S201", Name: "John", Status: "OnWork" },
    { ID: "S202", Name: "Josh", Status: "Absent" },
    { ID: "S203", Name: "Alice", Status: "OnWork" },
    { ID: "S204", Name: "Emily", Status: "OnWork" },
    { ID: "S205", Name: "Mike", Status: "OnWork" },
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
  const filterOnWork = () => {
    // Handle the category button press action here
    Alert.alert("Category Button Pressed");
  };
  const filterAbsent = () => {
    // Handle the category button press action here
    Alert.alert("Category Button Pressed");
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
          title="Staf ID"
          rightText="Enter "
          onInputChange={(text) => console.log(text)}
        />
        <View style={styles.filterButtons}>
          <CategoryButton title="OnWork" onPress={filterOnWork} />
          <CategoryButton title="Absent" onPress={filterAbsent} />
        </View>
      </View>
      <View style={styles.container}>
        <Table columns={columns} data={data} onConfirm={handleConfirm} />
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
