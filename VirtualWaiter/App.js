import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MainContainer from "./navigation/MainContainer";
import "react-native-gesture-handler"



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MainContainer />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
