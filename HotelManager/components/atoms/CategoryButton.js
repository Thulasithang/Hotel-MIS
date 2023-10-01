import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CategoryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "#7F7F7F",
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 24,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#7F7F7F",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CategoryButton;
