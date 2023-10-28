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

  const handleAddToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      // payload: { price: item.price, item: item, id: item.menuitemId, name: item.name, count: 1 },
      payload: { id: item.menuitemId, item: item, count: 1 },
    });
    console.log("item: ", item.menuitemId)
  };

  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      {renderDiscountCircle()}
      <Text style={styles.header}>{item.name}</Text>
      <Text style={styles.body}>{item.description}</Text>
      <View style={styles.ratings}>
        <Ionicons name="star" size={25} color="gold" />
        <Text style={{ marginLeft: 10, fontSize: 22 }}>{item.rating}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
        <TouchableOpacity
          onPress={() => handleAddToCart(item)} // Pass a function reference
          style={{ position: "absolute", end: 10, alignSelf: "center" }}
        >
          <Ionicons name="add-circle-outline" size={40} style={styles.plus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: 250,
    height: 380,
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "white",
    elevation: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flex: 1, // This makes the parent view take up the entire available height
    justifyContent: "space-between", // Aligns items at the start and end, pushing the ratings view to the bottom

    borderRadius: 30,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    elevation: 2,
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
    color: "#060A71",
  },

  ratings: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 10,
  },
  discountStar: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "red",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
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
    color: "#000000",
    paddingTop: 10,
    fontSize: 13,
  },

  price: {
    position: "absolute",
    end: 60,
    color: "#FE554A",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: -0.72,
  },
});

export default connect()(CarouselCardItem);
