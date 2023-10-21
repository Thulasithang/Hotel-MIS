import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebSocket from "react-native-websocket";

const OrderStatusScreen = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const socketRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Replace 'ws://your-backend-url' with the actual WebSocket server URL.
    socketRef.current = new WebSocket("ws://192.168.1.6:8080/websocket");

    socketRef.current.onopen = () => {
      console.log("WebSocket connection opened.");
    };

    socketRef.current.onmessage = (e) => {
      // Handle incoming WebSocket messages here.
      setMessage(e.data);
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socketRef.current.onclose = (event) => {
      console.log("WebSocket closed:", event.reason);
    };
  }, []);

  const handleButton = () => {
    navigation.navigate("Feedback");
  };

  return (
    <View style={styles.cartContainer}>
      <View style={styles.sliderTopic}>
        <Text style={styles.topicText}>Order Status</Text>
      </View>

      <View style={styles.progressContainer}>
        <ProgressBar text="Ordered" />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButton}>
          <Text style={styles.buttonText}>Finish Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Create a custom ProgressBar component
const ProgressBar = ({ text }) => {
  return (
    <View style={styles.progressBar}>
      <View style={styles.progressBarFill}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: "white",
    // position: "absolute",
    top: 0,
    right: 0,
    width: "100%", // Adjust the width as needed
    height: "100%",
    zIndex: 1, // Ensures it is on top of other views
  },

  sliderTopic: {
    height: 90,
    backgroundColor: "#060a71",
    borderTopLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  topicText: {
    color: "#ffffff",
    fontSize: 36,
    fontStyle: "normal",
    fontWeight: "800",
  },

  progressContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  progressBar: {
    alignSelf: "center",
    width: "80%",
    height: 60,
    backgroundColor: "#C1DAF0", // Background color of the progress bar
    borderRadius: 30,
    flexDirection: "row", // Align text horizontally with progress bar
  },
  progressBarFill: {
    flex: 1, // Fills the available space based on progress
    backgroundColor: "#C1F0D1", // Color of the filled progress
    borderRadius: 30, // Match the parent for rounded corners
  },
  progressBarText: {
    height: 100,
    fontSize: 16,
    fontWeight: "bold",
    color: "white", // Text color
    justifyContent: "center",
    lineHeight: 50, // Center text vertically
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    width: "90%",
    alignSelf: "center",
  },
  button: {
    marginVertical: 10,
    backgroundColor: "#060a71",
    borderRadius: 20,
    width: "90%",
    height: 60,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default OrderStatusScreen;
