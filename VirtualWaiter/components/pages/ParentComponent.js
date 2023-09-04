// ParentComponent.js
import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import MenuScreen from './MenuScreen';
import CartScreen from "./CartScreen";

const ParentComponent = () => {
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 0.7 }}>
        <MenuScreen />
      </View>
      <View style={{ flex: 0.3 }}>
        <TouchableOpacity onPress={toggleCart}>
          <Text>Show Cart</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isCartVisible}
        animationType="slide"
        transparent={true}
      >
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onPress={toggleCart}
        >
          <CartScreen onClose={toggleCart} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ParentComponent;
