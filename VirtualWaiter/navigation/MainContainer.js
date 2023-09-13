import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import MenuScreen from "../components/pages/MenuScreen";
import CartScreen from "../components/pages/CartScreen";
import OrderStatusScreen from "../components/pages/OrderStatus";

const Tab = createBottomTabNavigator();

const screenWidth = Dimensions.get("window").width;
const cartWidthPercentage = 0.3; // Adjust as needed

function MainContainer() {
  const [cartVisible, setCartVisible] = useState(false);
  const [orderStatusVisible, setOrderStatusVisible] = useState(false); // State to control the visibility of Order Status

  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  const toggleOrderStatus = () => {
    setOrderStatusVisible((prev) => !prev);
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
          <CartScreen onClose={toggleCart} />
        </View>
      )}
      {orderStatusVisible && (
        <View
          style={[
            styles.orderStatusOverlay,
            { width: screenWidth * cartWidthPercentage },
          ]}
        >
          <OrderStatusScreen />
        </View>
      )}
      <View style={styles.bottomNavigator}>
        <TouchableOpacity style={styles.cartButton} onPress={toggleCart}>
          <Icon name="cart-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.orderStatusButton}
          onPress={toggleOrderStatus}
        >
          <Icon name="location-outline" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavigator: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "5%",
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

export default MainContainer;
