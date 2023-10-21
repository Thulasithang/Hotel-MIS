import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LoginScreen from "./components/pages/LoginScreen";
import MainContainer from "./navigation/MainContainer";
import CartScreen from "./components/pages/CartScreen";
import OrderStatus from "./components/pages/OrderStatus";
import WelcomeScreen from "./components/pages/WelcomeScreen";
import FeedbackScreen from "./components/pages/FeedbackScreen";
import store from "./store/store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ tabBarVisible: false, headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ tabBarVisible: false, headerShown: false }}
          />
          <Stack.Screen
            name="MainContainer"
            component={MainContainer}
            options={{ tabBarVisible: false, headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ tabBarVisible: false, headerShown: false }}
          />
          <Stack.Screen
            name="OrderStatus"
            options={{ tabBarVisible: false, headerShown: false }}
          >
            {(props) => <OrderStatusScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="Feedback"
            component={FeedbackScreen}
            options={{ tabBarVisible: false, headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
