import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import NavHeader from "../atoms/NavHeader";

const AdminTaskScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const staffId = route.params;
  console.log("StaffID", staffId);

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [staffDetails, setStaffDetails] = useState({
    id: staffId,
    name: "John Doe",
    phone: "123-456-7890",
    email: "johndoe@example.com",
  });

  const handleAllocateTask = () => {
    //post request
  };

  const handleEditStaffDetails = () => {
    //patch request
  };

  const handleRemoveStaff = () => {
    //delete request
  };

  return (
    <ScrollView style={styles.container}>
      <NavHeader navigation={navigation} />
      <View style={styles.tskSection}>
        <Text style={styles.heading}>Allocate Task</Text>
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={date}
          onChangeText={(text) => setDate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Start Time"
          value={startTime}
          onChangeText={(text) => setStartTime(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="End Time"
          value={endTime}
          onChangeText={(text) => setEndTime(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Task Description"
          value={taskDescription}
          onChangeText={(text) => setTaskDescription(text)}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleAllocateTask}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tskSection}>
        <Text style={styles.heading}>Staff Details</Text>
        <TextInput
          style={styles.input}
          placeholder="ID"
          value={staffDetails.id}
          onChangeText={(text) =>
            setStaffDetails({ ...staffDetails, id: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={staffDetails.name}
          onChangeText={(text) =>
            setStaffDetails({ ...staffDetails, name: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={staffDetails.phone}
          onChangeText={(text) =>
            setStaffDetails({ ...staffDetails, phone: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={staffDetails.email}
          onChangeText={(text) =>
            setStaffDetails({ ...staffDetails, email: text })
          }
        />
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={handleRemoveStaff}
          >
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleEditStaffDetails}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  section: {
    backgroundColor: "white",
    borderRadius: 1,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 5,
    elevation: 1,
  },
  tskSection: {
    backgroundColor: "aliceblue",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 5,
    elevation: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#030957",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#030957",
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#030957",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  removeButton: {
    backgroundColor: "firebrick",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#030957",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default AdminTaskScreen;
