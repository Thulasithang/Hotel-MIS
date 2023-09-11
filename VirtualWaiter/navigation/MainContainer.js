import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MenuScreen from '../components/pages/MenuScreen';
import CartScreen from '../components/pages/CartScreen';

const Tab = createBottomTabNavigator();

function MainContainer() {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MenuScreen />
      </View>
      {cartVisible && (
        <View style={styles.cartOverlay}>
          <CartScreen onClose={() => setCartVisible(false)} />
        </View>
      )}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => setCartVisible(!cartVisible)}
      >
        <Text>Show/Hide Cart</Text>
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
    width: '30%', // Adjust the width as needed
    height: '100%',
    backgroundColor: 'white', // Customize the background color
    zIndex: 1, // Ensure it's above MenuScreen
  },
});

export default MainContainer;
