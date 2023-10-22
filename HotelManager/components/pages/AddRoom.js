// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { Button, TextInput, Dropdown } from "react-native-paper";

// const AddRoomScreen = () => {
//   const [roomStatus, setRoomStatus] = useState("");
//   const [roomType, setRoomType] = useState(null); // For the dropdown selected value
//   const [roomTypes, setRoomTypes] = useState([]); // For populating the dropdown options

//   useEffect(() => {
//     // Fetch room types from your API and populate the roomTypes state
//     axios.get("your-api-url/roomTypes").then((response) => {
//       setRoomTypes(response.data);
//     });
//   }, []);

//   const handleAddRoom = () => {
//     // Send a POST request to your API to add a new room with the selected roomStatus and roomType
//     const data = {
//       roomStatus,
//       roomType: roomType.value, // Assuming roomType is an object with a value property
//     };
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         label="Room Status"
//         value={roomStatus}
//         onChangeText={(text) => setRoomStatus(text)}
//       />
//       <Dropdown
//         label="Room Type"
//         value={roomType}
//         data={roomTypes}
//         onChangeText={(value) => setRoomType(value)}
//       />
//       <Button mode="contained" onPress={handleAddRoom}>
//         Add Room
//       </Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
// });

// export default AddRoomScreen;
