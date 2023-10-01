import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo for icons
import logo from "..//..//assets/logo.png";

const CustomTitleBar = ({ onBackPress, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Ionicons name="ios-arrow-back" size={24} color="#030957" />
      </TouchableOpacity>
      <Image source={logo} style={styles.logo} />
      <Ionicons name="ios-notifications" size={24} color="#030957" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#030957",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  logo: {
    width: 40, // Adjust the width and height as needed
    height: 40,
  },
});

export default CustomTitleBar;
