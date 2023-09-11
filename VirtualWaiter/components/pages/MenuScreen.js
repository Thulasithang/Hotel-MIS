import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, ActivityIndicator, FlatList } from "react-native";
import CarouselCards from '../molecules/CarouselCards';
import data from "../../data/data";

burgerData = data.filter(item => {
  return item.category === 'Burgers';
})
console.log(burgerData)
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import CarouselCards from "../molecules/CarouselCards";
import data from "../../data/data";

const mapStateToProps = (state) => ({
  itemsInCart: state.cart.itemsInCart,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => {
    if (item.count > 0) {
      dispatch({ type: "ADD_TO_CART", payload: item });
    } else {
      alert("Please add at least one item to cart");
    }
  },
});


burgerData = data.filter((item) => {
  return item.category === "Burgers";
});

drinkData = data.filter((item) => {
  return item.category === "Drinks";
});

const MenuScreen = ({ navigation }) => {
    const [item, setItem] = useState("Loading..");
    const getItem = async () => {
      try {
        const response = await fetch("http://192.168.1.6:8080/menu/getMenu", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const responseJson = await response.json();
        // Assuming responseJson is an array of items, you can set it in state:
        setItem(responseJson);
        console.log(responseJson);

      } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
      }
    };
  
    // Call the getItem function when the component mounts
    useEffect(() => {
      getItem();
    }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logoImg}
          source={require("../../assets/images/splash-screen.png")}
        />
        <View style={styles.carousel}>
        <Text style={styles.headerText}>Burgers</Text>
        <View>
      {item === "Loading.." ? (
        <Text>Loading...</Text>
      ) : (
        // Render your fetched data here
        <FlatList
          data={item}
          renderItem={({ item }) => (
            <Text>{item.name}</Text> // Assuming 'name' is a property of each item
          )}
        />
      )}
    </View>
        <CarouselCards 
        newData={burgerData}/>
const MenuScreen = ({ itemsInCart, addToCart }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.logoImg}
              source={require("../../assets/images/splash-screen.png")}
            />
            <View style={styles.carousel}>
              <Text style={styles.headerText}>Burgers</Text>
              <CarouselCards newData={burgerData} />
            </View>
            <View style={styles.carousel}>
              <Text style={styles.headerText}>Drinks</Text>
              <CarouselCards newData={drinkData} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
  },
  logoImg: {
    justifyContent: "flex-start",
    top: 8,
    left: 16,
    height: 100,
    width: 150,
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    top: 8,
    left: 16,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  carousel: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
});

export default MenuScreen;
