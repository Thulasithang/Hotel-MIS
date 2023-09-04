import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function CartScreen({ onClose }) {
  // Example cart content
  const cartItems = [
    { id: '1', name: 'Item 1', price: 10.0 },
    { id: '2', name: 'Item 2', price: 15.0 },
    { id: '3', name: 'Item 3', price: 20.0 },
  ];

  return (
    <View style={styles.cartContainer}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text>Close Cart</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 24 }}>Shopping Cart</Text>
      {/* Render cart items and total price here */}
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%', // Adjust the width as needed
    height: '100%',
    zIndex: 1, // Ensures it is on top of other views
    paddingHorizontal: 20,
    paddingTop: 40, // Create space for the close button
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default CartScreen;
