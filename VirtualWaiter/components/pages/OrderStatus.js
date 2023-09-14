import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const handleNavigation = () => {
  // Navigate to the MainContainer
  navigation.navigate("MainContainer");
};

const OrderStatusScreen = ({navigation, onClose}) => {
  const handleNavigation = () => {
    // Navigate to the MainContainer
    navigation.navigate("MainContainer");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Status</Text>
      {/* Create three progress bars with text */}
      <ProgressBar text="Ordered" />
      <ProgressBar text="Accepted" />
      <ProgressBar text="Prepared" />
    </View>
  );
};

// Create a custom ProgressBar component
const ProgressBar = ({ text }) => {
  return (
    <View style={styles.progressBar}>
      <View style={styles.progressBarFill}></View>
      <Text style={styles.progressBarText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  progressBar: {
    width: "80%",
    height: 30,
    backgroundColor: "lightgray", // Background color of the progress bar
    borderRadius: 15, // Half of the height for rounded corners
    marginBottom: 10,
    flexDirection: "row", // Align text horizontally with progress bar
  },
  progressBarFill: {
    flex: 1, // Fills the available space based on progress
    backgroundColor: "midnightblue", // Color of the filled progress
    borderRadius: 15, // Match the parent for rounded corners
  },
  progressBarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white", // Text color
    textAlign: "center", // Center text horizontally
    lineHeight: 30, // Center text vertically within the progress bar
    flex: 2, // Take up 2/3 of the space for text
  },
});

export default OrderStatusScreen;
