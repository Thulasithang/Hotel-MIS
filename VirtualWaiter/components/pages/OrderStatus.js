import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebSocket from 'react-native-websocket';



const OrderStatusScreen = ({onClose}) => {
  const [message, setMessage] = useState('');
  const socketRef = useRef(null);
  const navigation = useNavigation();


  useEffect(() => {
    // Replace 'ws://your-backend-url' with the actual WebSocket server URL.
    socketRef.current = new WebSocket('ws://192.168.1.6:8080/websocket');
    
    socketRef.current.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    socketRef.current.onmessage = (e) => {
      // Handle incoming WebSocket messages here.
      setMessage(e.data);
    };

    socketRef.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socketRef.current.onclose = (event) => {
      console.log('WebSocket closed:', event.reason);
    };
  }, []);

  const handleButton = () => {
      navigation.navigate('Feedback');
    }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Status</Text>
      <Text>message: {message}</Text>
      {/* Create three progress bars with text */}
      <ProgressBar text="Ordered" />
      {/* <ProgressBar text="Accepted" />
      <ProgressBar text="Prepared" /> */}
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
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    width: "90%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "midnightblue",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default OrderStatusScreen;
