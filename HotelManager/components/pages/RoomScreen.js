import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavHeader from "../atoms/NavHeader";
import Table from "../atoms/Table";
import Button from "../atoms/Button";
import ForumView from "../atoms/ForumView";
import CategoryButton from "../atoms/CategoryButton";
import ipAddress from "../../config";

const RoomScreen = () => {
  const navigation = useNavigation();

  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonRoom = () => {
    setSelectedButton("Rooms");
    // Handle the 'Rooms' button press here
  };

  const handleButtonRoomType = () => {
    setSelectedButton("RoomTypes");
    // Handle the 'Room Types' button press here
  };

  const renderView = () => {
    if (selectedButton === "Rooms") {
      return <RoomView />;
    } else if (selectedButton === "RoomTypes" || selectedButton === "") {
      return <RoomTypeView />;
    }
  };

  return (
    <ScrollView>
      <NavHeader navigation={navigation} />
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={handleButtonRoom}
          style={[
            styles.button,
            selectedButton === "Rooms" ? styles.selected : null,
          ]}
        >
          <Text style={styles.buttonText}>Rooms</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleButtonRoomType}
          style={[
            styles.button,
            selectedButton === "RoomTypes" ? styles.selected : null,
          ]}
        >
          <Text style={styles.buttonText}>Room Types</Text>
        </TouchableOpacity>
      </View>
      {renderView()}
    </ScrollView>
  );
};

const RoomView = () => {
  const navigation = useNavigation();
  const columns = [
    { title: "ID", flex: 1 },
    { title: "Type", flex: 5 },
    { title: "Status", flex: 3 },
  ];

  const [data, setData] = React.useState([]);

  useEffect(() => {
    const apiUrl = `${ipAddress}/api/v1/app/room?roomId`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        const formattedData = responseData.map((item) => ({
          ID: item.roomId.toString(),
          Type: item.roomType.type,
          Status: item.roomStatus,
        }));
        setData(formattedData);
        console.log("Room Data", formattedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddRoom = () => {
    navigation.navigate("AddRoom");
    // Navigate to the screen for adding an employee
    // navigation.navigate("AddEmployeeScreen");
  };

  const handleConfirm = (rowData) => {
    console.log("RoomID", rowData.ID);
    const staffID = rowData.ID;
    // navigation.navigate("StaffTask", staffID);
  };

  const handleFilterID = (text) => {
    if (!text) {
      const apiUrl = `${ipAddress}/api/v1/app/room?roomId`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((responseData) => {
          const formattedData = responseData.map((item) => ({
            ID: item.roomId.toString(),
            Type: item.roomType.type,
            Status: item.roomStatus,
          }));
          setData(formattedData);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      const apiUrl = `${ipAddress}/api/v1/app/room?roomId=${text}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((responseData) => {
          const formattedData = responseData.map((item) => ({
            ID: item.roomId.toString(),
            Type: item.roomType.type,
            Status: item.roomStatus,
          }));
          setData(formattedData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const filterVacant = () => {
    // Handle the category button press action here
  };

  const filterOccupied = () => {
    // Handle the category button press action here
  };

  const filterBooked = () => {
    // Handle the category button press action here
  };
  return (
    <View>
      <View>
        <View style={styles.right_form}>
          <Button onPress={handleAddRoom} title="Add Room" />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Filter By</Text>
          <ForumView
            title="Room No"
            rightText="Enter "
            onInputChange={handleFilterID}
          />
          <View style={styles.filterButtons}>
            <CategoryButton title="Vacant" onPress={filterVacant} />
            <CategoryButton title="Occupied" onPress={filterOccupied} />
            <CategoryButton title="Bookeds" onPress={filterBooked} />
          </View>
        </View>
        <View style={styles.container}>
          <Table columns={columns} data={data} onConfirm={handleConfirm} />
        </View>
      </View>
    </View>
  );
};

const RoomTypeView = () => {
  const columns = [
    { title: "ID", flex: 2 },
    { title: "Type", flex: 4 },
    { title: "Rooms", flex: 3 },
  ];

  const data = [
    { ID: "RT1", Type: "Supperior", Rooms: "20" },
    { ID: "RT2", Type: "Dulux", Rooms: "15" },
    { ID: "RT3", Type: "Family Suit", Rooms: "10" },
    { ID: "RT4", Type: "King Suit", Rooms: "5" },

    // Add more entries as needed
  ];

  const handleAddRoomType = () => {
    // Navigate to the screen for adding an employee
    // navigation.navigate("AddEmployeeScreen");
  };

  const handleConfirm = (rowData) => {
    console.log("Rooms", rowData.ID);
  };
  return (
    <View>
      <View>
        <View style={styles.right_form}>
          <Button onPress={handleAddRoomType} title="Add Room Type" />
        </View>
        <View style={styles.container}>
          <Table columns={columns} data={data} onConfirm={handleConfirm} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterButtons: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: "#6C74D7",
    borderColor: "#F5F5F5",
    borderWidth: 4,
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
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#030957",
    padding: 10,
    height: 50,
    borderWidth: 2,
    borderColor: "white",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RoomScreen;
