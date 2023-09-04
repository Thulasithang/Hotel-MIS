// CartScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const CartScreen = ({ onClose }) => {
  return (
    <View style={{ flex: 0.3, flexDirection: 'row', backgroundColor: 'white' }}>
      {/* Your cart content */}
      <Text>Your Cart Items Here</Text>
      <Button title="Close" onPress={onClose} />
    </View>
  );
};

export default CartScreen;
