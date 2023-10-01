import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const ForumView = ({ title, rightText, onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
    if (onInputChange) {
      onInputChange(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftTextContainer}>
        <Text style={styles.leftText}>Filter By {title}</Text>
      </View>
      <View style={styles.rightTextContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder={rightText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  leftTextContainer: {
    justifyContent: "center",
    height: 40,
    backgroundColor: "#BDCDFF",
    flex: 3,
    borderRadius: 20,
    padding: 7,
    marginRight: 10,
  },
  leftText: {
    fontSize: 16,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  rightTextContainer: {
    justifyContent: "center",
    height: 40,
    backgroundColor: "#A2A2A2",
    flex: 4,
    borderRadius: 20,
    padding: 7,
  },
  input: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});

export default ForumView;
