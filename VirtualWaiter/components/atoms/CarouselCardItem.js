import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.199);

const CarouselCardItem = ({ item, index, dispatch }) => {
  const handleAddToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id: item.menuitemId, item: item, count: 1 },
    });
  };

  // Check if discount is 0, if so, hide the red discount circle
  const renderDiscountCircle = () => {
    if (item.discount === 0) {
      return null; // Return null to hide the circle
    }
    return (
      <View style={styles.discountStar}>
        <Text style={styles.discountText}>{item.discount}% OFF</Text>
      </View>
    );
  };

  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      {renderDiscountCircle()}
      <View style={{ padding: 5 }}>
        <Text style={styles.header}>{item.name}</Text>
      </View>
      <View style = {{height: "20%" }}>
        <Text style={styles.body}>{item.description}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20, paddingLeft: 10, maxHeight: "30%" }}>
        <Ionicons name="star" size={20} color="gold" />
        <Text style={{ marginLeft: 10 }}>{item.rating}</Text>
        <Text style={{ position: "absolute", end: 60 }}>Rs {item.price}</Text>
        <TouchableOpacity
          onPress={() => handleAddToCart(item)} // Pass a function reference
          style={{ position: "absolute", end: 10, alignSelf: "center" }}
        >
          <Ionicons name="add-circle" size={40} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 380,
    width: ITEM_WIDTH,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    backgroundColor: "white",
    elevation: 10,
    paddingBottom: 10,
  },
  image: {
    borderRadius: 8,
    width: "100%",
    height: "50%",
  },
  header: {
    paddingLeft: 10,
    color: "#222",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
  body: {
    padding: 5,
    color: "#222",
  },
  // Style for the discount star
  discountStar: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "red",
    borderRadius: 50, // Makes it a circle
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
  },
  discountText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default connect()(CarouselCardItem);
