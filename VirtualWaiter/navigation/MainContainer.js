import React, { useState } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import MenuScreen from "../components/pages/MenuScreen";
import CartScreen from "../components/pages/CartScreen";
import OrderStatusScreen from "../components/pages/OrderStatus";

const Tab = createBottomTabNavigator();

const screenWidth = Dimensions.get("window").width;
const iconWidth = screenWidth * 0.025;
const cartWidthPercentage = 0.3; // Adjust as needed

const mapStateToProps = (state) => ({
  tableNo: state.table.tableNo,
});

const MainContainer = ({ tableNo }) => {
  const [cartVisible, setCartVisible] = useState(false);
  const [orderStatusVisible, setOrderStatusVisible] = useState(false); // State to control the visibility of Order Status

  const handleCart = () => {
    setCartVisible((prev) => !prev);
    if (orderStatusVisible) {
      setOrderStatusVisible((prev) => !prev);
      setCartVisible((prev) => !prev);
    }
  };

  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  const toggleOrderStatus = () => {
    setOrderStatusVisible((prev) => !prev);
  };

  const handleWaiterRequest = () => {
    Alert.alert(
      "Request Waiter Assistance",
      "Do you need assistance from a waiter?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            try {
              // Ensure tableNo is a valid Long
              const tableId = parseInt(tableNo); // Parse tableNo to an integer

              if (isNaN(tableId)) {
                alert("Invalid table number");
                return;
              }

              // Create a request body with the desired data
              const requestBody = {
                waiterRequested: true, // You can pass any additional data here
              };

              // Make an HTTP PATCH request to your backend API
              const response = await fetch(
                `http://10.10.5.194:8080/api/v1/table/update/${tableId}?waiterRequested=true&occupied=true`,
                {
                  method: "PATCH", // Use PATCH method
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              if (response.ok) {
                alert("Waiter request sent");
              } else {
                alert("Failed to send waiter request");
              }
            } catch (error) {
              console.error("Error sending waiter request:", error);
              alert("An error occurred while sending the request");
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <View style={{ flex: 1 }}>
        <MenuScreen />
      </View>
      {cartVisible && (
        <View
          style={[
            styles.cartOverlay,
            { width: screenWidth * cartWidthPercentage },
          ]}
        >
          <CartScreen onClose={toggleCart} onPlaceOrder={toggleOrderStatus} />
        </View>
      )}
      {orderStatusVisible && (
        <View
          style={[
            styles.orderStatusOverlay,
            { width: screenWidth * cartWidthPercentage },
          ]}
        >
          <OrderStatusScreen onClose={toggleOrderStatus} />
        </View>
      )}
      <View style={styles.bottomNavigator}>
        <TouchableOpacity style={styles.cartButton} onPress={handleCart}>
          <Icon name="cart-outline" size={iconWidth} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.orderStatusButton}
          onPress={toggleOrderStatus}
        >
          <Icon name="location-outline" size={iconWidth} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.requestWaiterButton}
          onPress={handleWaiterRequest}
        >
          <Icon name="person-sharp" size={iconWidth} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigator: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 15,
    width: screenWidth * 0.05,
    height: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "midnightblue",
    borderEndEndRadius: 8,
  },
  cartButton: {
    position: "absolute",
    top: 20,
    right: "10%",
    backgroundColor: "blue", // Customize the button style
    padding: 10,
    borderRadius: 5,
  },
  orderStatusButton: {
    position: "absolute",
    top: 100,
    right: "10%",
    backgroundColor: "blue", // Customize the button style
    padding: 10,
    borderRadius: 5,
  },
  requestWaiterButton: {
    position: "absolute",
    top: 180,
    right: "10%",
    backgroundColor: "blue", // Customize the button style
    padding: 10,
    borderRadius: 5,
  },
  cartOverlay: {
    position: "absolute",
    top: 0,
    right: "5%",
    height: "100%",
    backgroundColor: "white", // Customize the background color
    zIndex: 1,
  },
  orderStatusOverlay: {
    position: "absolute",
    top: 0,
    right: "5%",
    height: "100%",
    backgroundColor: "white", // Customize the background color
    zIndex: 1,
  },
});

export default connect(mapStateToProps)(MainContainer);
