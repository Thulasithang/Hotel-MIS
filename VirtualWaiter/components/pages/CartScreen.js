import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const mapStateToProps = (state) => ({
  itemsInCart: state.cart.itemsInCart,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (itemId) =>
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId }),
});

const CartScreen = ({ onClose, itemsInCart, removeFromCart }) => {
  return (
    <View style={styles.cartContainer}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text>Close Cart</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 24 }}>Shopping Cart</Text>
      {/* Render cart items and total price here */}
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>
        <FlatList
          data={itemsInCart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.cartItem}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>Price: Rs {item.price}</Text>
                <Text style={styles.cartItemCount}>Qty: {item.count}</Text>
                <TouchableOpacity
                  onPress={() => removeFromCart(item.id)}
                >
                  <Text style={styles.removeFromCartButton}>Remove</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
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
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 10,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 14,
    color: 'gray',
  },
  cartItemCount: {
    fontSize: 14,
    color: 'gray',
  },
  removeFromCartButton: {
    color: 'red',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
