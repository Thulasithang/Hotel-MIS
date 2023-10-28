import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { placeOrder } from "../../store/actions/cartActions";
import { localhost } from "../../data/testData";

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
    dispatch(placeOrder(itemsInCart, tableNo, customerName, contactNumber, localhost));
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
  console.log("tableNo from cart screen: ", tableNo);
  return (
    <View style={styles.cartContainer}>
      <View style={styles.sliderTopic}>
        <Text style={styles.topicText}>Your Cart</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={itemsInCart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.cartItem}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 2, flexDirection: "column" }}>
                    <Text style={styles.cartItemName}>{item.item.name}</Text>
                    <Text style={styles.cartItemPrice}>
                      Price: Rs {item.item.price}
                    </Text>
                    {discountContainer(item)}
                    <View style={styles.totalPrice}>
                      <Text style={{ fontSize: 18, fontWeight: "normal" }}>
                        Total: Rs{" "}
                        {item.item.price * item.count -
                          (
                            (item.item.price * item.item.discount) /
                            100
                          ).toFixed(2)}
                      </Text>
                    </View>
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        style={styles.circleButton}
                        onPress={() => decreaseItemQuantity(item.id)}
                      >
                        <Icon name="remove" size={20} color="white" />
                      </TouchableOpacity>
                      <Text style={styles.cartItemCount}>{item.count}</Text>
                      <TouchableOpacity
                        style={styles.circleButton}
                        onPress={() => increaseItemQuantity(item.id)}
                      >
                        <Icon name="add" size={20} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={({ flex: 1 }, styles.removeFromCartButton)}>
                    <Image
                      style={{ width: 80, height: 80 }}
                      source={{ uri: item.item.imageUrl }}
                    />
                    <TouchableOpacity
                      style={styles.removeFromCartButton}
                      onPress={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item.id,
                        })
                      }
                    >
                      <Icon name="trash" size={25} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>Total Price</Text>
        <Text style={styles.totalPriceAmount}>Rs {totalPrice}</Text>
        <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    width: "100%", // Adjust the width as needed
    minHeight: "100%",
    maxHeight: "135%",
    zIndex: 1, // Ensures it is on top of other views
    justifyContent: "space-between",
  },

  sliderTopic: {
    height: 90,
    backgroundColor: "#060a71",
    borderTopLeftRadius: 50,
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
    flexDirection: "column",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  circleButton: {
    backgroundColor: "#060a71",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  cartItem: {
    flexDirection: "column",
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
    flex: 2,
    fontSize: 20,
    fontWeight: "bold",
  },
  cartItemPrice: {
    fontSize: 18,
    color: "gray",
    marginRight: 10,
  },
  cartItemCount: {
    fontSize: 18,
    color: "#060a71",
    alignContent: "flex-end",
  },
  quantityContainer: {
    left: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "flex-end",
    width: 100,
    height: 30,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  removeFromCartButton: {
    paddingTop: 15,
    paddingHorizontal: 10,
    alignSelf: "flex-end",
  },
  totalPriceContainer: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 10,
    display: "flex-end",
    borderTopColor: "lightgray",
    borderTopWidth: 2,
  },
  totalPriceText: {
    color: "#747474",

    fontSize: 18,
    fontWeight: "bold",
  },
  totalPriceAmount: {
    marginTop: 10,
    fontSize: 25,
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
    marginVertical: 10,
    backgroundColor: "#060a71",
    borderRadius: 20,
    width: "90%",
    height: 60,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
