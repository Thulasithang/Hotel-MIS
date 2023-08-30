import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRegistry } from "react-native";
import { name as appName } from "../app.json";
import LoginScreen from "../components/pages/LoginScreen";
import MenuScreen from "../components/pages/MenuScreen";


const Stack = createStackNavigator();



const MainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //     <Text style={{ color: "black" }}>Login Screen</Text>
    //     <Text> This is a big text</Text>
    // </View>
  );
};

export default MainContainer;
AppRegistry.registerComponent(appName, () => Main);
