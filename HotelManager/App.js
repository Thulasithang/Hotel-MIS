import UserRoleSelectionScreen from "../HotelManager/components/pages/UserRoleSelectionScreen";
import { View, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../HotelManager/components/pages/LoginScreen";
import AdminHomeScreen from "./components/pages/AdminHomeScreen";
import BookingScreen from "./components/pages/BookingScreen";
import BookingInfo from "./components/pages/BookingInfo";
import StaffScreen from "./components/pages/StaffScreen";
import StaffTask from "./components/pages/StaffTask";
import RoomScreen from "./components/pages/RoomScreen";
import AddBooking from "./components/pages/AddBooking";

import logo from "./assets/logo.png";
import StaffHomeScreen from "./components/pages/StaffHomeScreen";
import AddUserPage from "./components/pages/AddEmployee";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserRoleSelect"
          component={UserRoleSelectionScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="AdminHome"
          component={AdminHomeScreen}
          options={{ title: "Welcome" }}
        />

        <Stack.Screen
          name="StaffHome"
          component={StaffHomeScreen}
          options={{ title: "Welcome" }}
        />

        <Stack.Screen
          name="AddEmployeeScreen"
          component={AddUserPage}
          options={{ title: "Welcome" }}
        />

        <Stack.Screen
          name="BookingScreen"
          component={BookingScreen}
          options={{
            title: "",
            headerBackground: () => (
              <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
              </View>
            ),
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="BookingInfo"
          component={BookingInfo}
          options={{
            title: "",
            headerBackground: () => (
              <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
              </View>
            ),
            headerTintColor: "white",
          }}
        />

        {/* <Stack.Screen
          name="AddRoom"
          component={AddRoom}
          options={{
            title: "",
            headerBackground: () => (
              <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
              </View>
            ),
            headerTintColor: "white",
          }}
        /> */}

        <Stack.Screen
          name="StaffScreen"
          component={StaffScreen}
          options={{
            title: "",
            headerBackground: () => (
              <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
              </View>
            ),
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="StaffTask"
          component={StaffTask}
          options={{
            title: "",
            headerBackground: () => (
              <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
              </View>
            ),
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="RoomScreen"
          component={RoomScreen}
          options={{
            title: "",
            headerBackground: () => (
              <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
              </View>
            ),
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="AddBooking"
          component={AddBooking}
          options={{
            title: "",
            headerBackground: () => (
              <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
              </View>
            ),
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#030957",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  logo: {
    marginTop: 20,
    width: 40, // Adjust the width and height as needed
    height: 40,
  },
});
