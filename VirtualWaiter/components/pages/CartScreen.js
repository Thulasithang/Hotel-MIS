import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { placeOrder } from "../../store/actions/cartActions";

const mapStateToProps = (state) => ({
  tableNo: state.table.tableNo,
  itemsInCart: state.cart.itemsInCart,
  customerName: state.customer.customerName,
  contactNumber: state.customer.contactNumber,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (itemId) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId }),
});

const CartScreen = ({
  onClose,
  itemsInCart,
  tableNo,
  onPlaceOrder,
  customerName,
  contactNumber,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price whenever itemsInCart changes
    let totalPrice = 0;
    itemsInCart.forEach((item) => {
      totalPrice += item.item.price * item.count;
    });
    setTotalPrice(totalPrice);
  }, [itemsInCart]);

  const handlePlaceOrder = () => {
    dispatch(placeOrder(itemsInCart, tableNo, customerName, contactNumber));
    // navigation.navigate("OrderStatus");
    onPlaceOrder();
  };

  const decreaseItemQuantity = (itemId) => {
    // Dispatch an action to decrease the quantity
    dispatch({ type: "DECREASE_ITEM_QUANTITY", payload: itemId });
  };

  const increaseItemQuantity = (itemId) => {
    // Dispatch an action to increase the quantity
    dispatch({ type: "INCREASE_ITEM_QUANTITY", payload: itemId });
  };

  const discountContainer = (item) => {
    if (item.item.discount === 0) {
      return null;
    }
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 18, fontWeight: "normal" }}>
          Discount: {((item.item.price * item.item.discount) / 100).toFixed(2)}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.cartContainer}>
      <View style={styles.sliderTopic}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>Close Cart</Text>
        </TouchableOpacity>
        <Text style={styles.topicText}>Your Cart</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={itemsInCart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.cartItem}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.cartItemName}>{item.item.name}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View>
                      <Text style={styles.cartItemPrice}>
                        Price: Rs {item.item.price}
                      </Text>
                    </View>
                    <View>
                      <View style={styles.quantityContainer}>
                        <TouchableOpacity
                          onPress={() => decreaseItemQuantity(item.id)}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: "bold",
                              alignSelf: "center",
                            }}
                          >
                            <Icon name="remove" size={20} color="white" />
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.cartItemCount}>{item.count}</Text>
                        <TouchableOpacity
                          onPress={() => increaseItemQuantity(item.id)}
                        >
                          <Text style={{ fontWeight: "bold" }}>
                            <Icon name="add" size={20} color="white" />
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  {discountContainer(item)}
                  <View style={styles.totalPrice}>
                    <Text style={{ fontSize: 18, fontWeight: "normal" }}>
                      Total: Rs{" "}
                      {item.item.price * item.count -
                        ((item.item.price * item.item.discount) / 100).toFixed(
                          2
                        )}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                      }
                    >
                      <Text style={styles.removeFromCartButton}>
                        Remove from cart
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      {/* Total Price */}
      <View style={styles.buttonContainer}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>Total Price:</Text>
          <Text style={styles.totalPriceAmount}>Rs {totalPrice}</Text>
        </View>
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
  },

  sliderTopic: {
    height: 90,
    backgroundColor: "#060a71",
    borderTopLeftRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  closeText: {
    color: "white",
    fontSize: 12,
    textDecorationLine: "underline",
    marginBottom: 10,
    marginRight: 10,
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

  topicText: {
    color: "#ffffff",
    fontSize: 36,
    fontStyle: "normal",
    fontWeight: "800",
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
    color: "white",
    alignContent: "flex-end",
  },
  quantityContainer: {
    left: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 100,
    height: 30,
    backgroundColor: "blue",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  removeFromCartButton: {
    color: "red",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPriceAmount: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
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
