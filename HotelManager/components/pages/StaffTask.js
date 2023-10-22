import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from "@react-navigation/native";
import NavHeader from "../atoms/NavHeader";
import axios from "axios";
import ipAddress from '../../config';

const AdminTaskScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const staffId = route.params;
  //console.log("StaffID", staffId);

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [taskDescription, setTaskDescription] = useState(""); 

  // const [staffDetails, setStaffDetails] = useState({
  //   id: staffId,
  //   name: "John Doe",
  //   phone: "123-456-7890",
  //   email: "johndoe@example.com",
  // });

  // State variables to manage the visibility of the pickers
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

  // Show/hide picker functions
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(false);
  };

  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  };

  // Event handlers for date and time pickers
  const handleDateConfirm = (selectedDate) => {
    setDate(selectedDate.getTime());
    hideDatePicker();
  };

  const handleStartTimeConfirm = (selectedTime) => {
    const hours = String(selectedTime.getHours()).padStart(2, '0');
    const minutes = String(selectedTime.getMinutes()).padStart(2, '0');
    //const seconds = String(selectedTime.getSeconds()).padStart(2, '0');
  
    // Format the time as 'HH:mm:ss'
    const formattedTime = `${hours}:${minutes}:00`;
  
    setStartTime(formattedTime);
    hideStartTimePicker();

  };

  const handleEndTimeConfirm = (selectedTime) => {
    const hours = String(selectedTime.getHours()).padStart(2, '0');
    const minutes = String(selectedTime.getMinutes()).padStart(2, '0');
    //const seconds = String(selectedTime.getSeconds()).padStart(2, '0');
  
    // Format the time as 'HH:mm:ss'
    const formattedTime = `${hours}:${minutes}:00`;
  
    setEndTime(formattedTime);
    hideEndTimePicker();
  };

  const handleAllocateTask = () => {

    const newTask = {
      status: "To Do", // Default status
      description: taskDescription,
      date: date, // Format as 'YYYY-MM-DD'
      startTime: startTime, // Format as 'HH:mm:ss'
      endTime: endTime, // Format as 'HH:mm:ss'
      staffId: staffId, // Default staffId
    };
    console.log(newTask);

    const backendUrl = `${ipAddress}/api/v1/task/add`; 
    console.log(backendUrl);

    // Make a POST request using Axios
    axios.post(backendUrl, newTask)
      .then(response => {
        // Task successfully added
        console.log('Task successfully added:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error adding task:', error);
      });
  

 
  };

  const handleEditStaffDetails = () => {
    // Handle editing staff details, e.g., making a PATCH request.
  };

  const handleRemoveStaff = () => {
    // Handle removing staff, e.g., making a DELETE request.
  };

  return (
    <ScrollView style={styles.container}>
      <NavHeader navigation={navigation} />
      <View style={styles.tskSection}>
        <Text style={styles.heading}>Allocate Task</Text>
        {/* Date Picker */}
        <TouchableOpacity style={styles.input} onPress={showDatePicker}>
          <Text>{date ? new Date(date).toDateString() : "Select Date"}</Text>
        </TouchableOpacity>
        {/* Start Time Picker */}
        <TouchableOpacity style={styles.input} onPress={showStartTimePicker}>
          <Text>{startTime ? startTime : "Select Start Time"}</Text>
        </TouchableOpacity>
        {/* End Time Picker */}
        <TouchableOpacity style={styles.input} onPress={showEndTimePicker}>
          <Text>{endTime ? endTime : "Select End Time"}</Text>
        </TouchableOpacity>
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

      {/* Date Picker Modal */}
      {isDatePickerVisible && (
        <DateTimePicker
          value={new Date()} // Provide the initial date value
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            if (event.type === "set") {
              handleDateConfirm(selectedDate);
            }
            hideDatePicker();
          }}
        />
      )}

      {/* Start Time Picker Modal */}
      {isStartTimePickerVisible && (
        <DateTimePicker
          value={new Date()} // Provide the initial time value
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            if (event.type === "set") {
              handleStartTimeConfirm(selectedTime);
            }
            hideStartTimePicker();
          }}
        />
      )}

      {/* End Time Picker Modal */}
      {isEndTimePickerVisible && (
        <DateTimePicker
          value={new Date()} // Provide the initial time value
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            if (event.type === "set") {
              handleEndTimeConfirm(selectedTime);
            }
            hideEndTimePicker();
          }}
        />
      )}
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
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
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default AdminTaskScreen;
