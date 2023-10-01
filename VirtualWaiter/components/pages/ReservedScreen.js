import React from "react";

import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const ReservedScreen = () => {
  return (
    <View>
      <Text>Reserved</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>    
        <Text>Menu</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ReservedScreen;