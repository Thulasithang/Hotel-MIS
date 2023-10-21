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
      <Text style={styles.header}>{item.name}</Text>
      <Text style={styles.body}>{item.description}</Text>
      <View style={{ flexDirection: "row", marginTop: 20, paddingLeft: 10 }}>
        <Ionicons name="star" size={20} color="gold" />
        <Text style={{ marginLeft: 10 }}>{item.rating}</Text>
        <Text style={{ position: "absolute", end: 60 }}>Rs {item.price}</Text>
        <TouchableOpacity
          onPress={() => handleAddToCart(item)} // Pass a function reference
          style={{ position: "absolute", end: 10, alignSelf: "center" }}
        >
          <Ionicons name="add-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: 380,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    backgroundColor: "white",
    elevation: 10,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 10,
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },

  plus: {
    color: "#070C41",
  },

  ratings: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 10,
  },

  header: {
    color: "#3D3D3D",
    fontSize: 20,
    // paddingVertical: 10,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: -0.72,
  },

  body: {
    padding: 10,
    color: "#222",
    fontSize: 12,
  },
});

export default connect()(CarouselCardItem);
