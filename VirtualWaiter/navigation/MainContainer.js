import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MenuScreen from '../components/pages/MenuScreen';
import CartScreen from '../components/pages/CartScreen';
import OrderStatusScreen from '../components/pages/OrderStatus';

const Tab = createBottomTabNavigator();

const screenWidth = Dimensions.get('window').width;
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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <MenuScreen />
        </View>
        {cartVisible && (
          <View style={[styles.cartOverlay, { width: screenWidth * cartWidthPercentage }]}>
            <CartScreen onClose={toggleCart} />
          </View>
        )}
        {orderStatusVisible && (
          <View style={[styles.orderStatusOverlay, { width: screenWidth * cartWidthPercentage }]}>
            <OrderStatusScreen />
          </View>
        )}
        <TouchableOpacity
          style={styles.cartButton}
          onPress={toggleCart}
        >
          <Text>Show Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.orderStatusButton}
          onPress={toggleOrderStatus}
        >
          <Text>Show Order Status</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  cartButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue', // Customize the button style
    padding: 10,
    borderRadius: 5,
  },
  cartOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'white', // Customize the background color
    zIndex: 1, // Ensure it's above MenuScreen
    // shadowColor: 'black', // Customize shadow color
    // shadowOpacity: 0.3, // Customize shadow opacity
    // shadowOffset: { width: 2, height: 2 }, // Customize shadow offset
    // elevation: 5, // For Android shadow
  },
  orderStatusOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'white', // Customize the background color
    zIndex: 1, // Ensure it's above MenuScreen
    // shadowColor: 'black', // Customize shadow color
    // shadowOpacity: 0.3, // Customize shadow opacity
    // shadowOffset: { width: 2, height: 2 }, // Customize shadow offset
    // elevation: 5, // For Android shadow
  },
});

export default MainContainer;
