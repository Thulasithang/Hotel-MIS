import React from "react";

import {
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReservedScreen = () => {
  return (
    <View>
      <Text>Reserved</Text>
      //a button onPress goes to the MenuScreen
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>    
        <Text>Menu</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ReservedScreen;