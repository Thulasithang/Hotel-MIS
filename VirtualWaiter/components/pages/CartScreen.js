import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { placeOrder } from "../../store/actions/cartActions";

const mapStateToProps = (state) => ({
  tableNo: state.table.tableNo,
  itemsInCart: state.cart.itemsInCart,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (itemId) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId }),
});

const CartScreen = ({ onClose, itemsInCart, tableNo, onPlaceOrder }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handlePlaceOrder = () => {
    dispatch(placeOrder(itemsInCart, tableNo));
    // navigation.navigate("OrderStatus");
    onPlaceOrder();
  };

  console.log("tableNo from cartScreen: ", tableNo);

  const decreaseItemQuantity = (itemId) => {
    // Dispatch an action to decrease the quantity
    dispatch({ type: "DECREASE_ITEM_QUANTITY", payload: itemId });
  };

  const increaseItemQuantity = (itemId) => {
    // Dispatch an action to increase the quantity
    dispatch({ type: "INCREASE_ITEM_QUANTITY", payload: itemId });
  };

  return (
    <View style={styles.cartContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>
        <FlatList
          data={itemsInCart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.cartItem}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.cartItemName}>{item.item.name}</Text>
                  <View style={{ flexDirection: "row"}}>
                    <Text style={styles.cartItemPrice}>
                      Price: Rs {item.item.price}
                    </Text>
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => decreaseItemQuantity(item.id)}
                      >
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                          -
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.cartItemCount}>{item.count}</Text>
                      <TouchableOpacity
                        onPress={() => increaseItemQuantity(item.id)}
                      >
                        <Text style={{ fontSize: 20 }}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.totalPrice}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      Total: Rs {item.item.price * item.count}
                    </Text>
                    </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: "white",
    // position: "absolute",
    top: 0,
    right: 0,
    width: "100%", // Adjust the width as needed
    height: "100%",
    zIndex: 1, // Ensures it is on top of other views
    paddingHorizontal: 20,
    paddingTop: 40, // Create space for the close button
  },
  container: {
    // flex:  1,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  cartItem: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingVertical: 10,
    alignContent: "flex-end",
    // justifyContent: "space-between",
  },
  cartItemName: {
    fontSize: 20,
    justifyContent: "flex-end",
    fontWeight: "bold",
  },
  cartItemPrice: {
    fontSize: 18,
    color: "gray",
    marginRight: 10,
    alignContent: "flex-start",
  },
  cartItemCount: {
    fontSize: 18,
    color: "gray",
    alignContent: "flex-end",
  },
  quantityContainer: {
    left: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 100,
    height: 30,
    backgroundColor: "lightgray",
    borderRadius: 10,
    paddingHorizontal: 5,

  },
  removeFromCartButton: {
    color: "red",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    width: "90%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "midnightblue",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
