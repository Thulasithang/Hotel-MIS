import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#030957",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 20,
    alignItems: "flex-end", // Align text to the right
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right", // Align text to the right
  },
});

export default Button;
