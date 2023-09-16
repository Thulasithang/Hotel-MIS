import React, { useState, useEffect } from "react";
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
import { fetchItems } from "../../data/testData";

//New cart system is added
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

const MenuScreen = ({ itemsInCart, addToCart }) => {
  const [items, setItems] = useState([]);
  const [burgerList, setBurgerList] = useState([]);
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    // Fetch data using the service
    fetchItems()
      .then((data) => {
        setItems(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error as needed (e.g., show an error message)
      });
  }, []);

  useEffect(() => {
    // Filter burger items
    const burgers = items.filter((item) => item.foodType === "burger");
    setBurgerList(burgers);

    // Filter pizza items
    const pizzas = items.filter((item) => item.foodType === "pizza");
    setPizzaList(pizzas);
  }, [items]); // Run this effect whenever menuItems change
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.logoImg}
              source={require("../../assets/images/splash-screen.png")}
            />

            {/* trial for the carousel from the backend */}
            <View style={styles.carousel}>
              <Text style={styles.headerText}>Pizza</Text>
              <CarouselCards newData={pizzaList} />
            </View>
            <View style={styles.carousel}>
              <Text style={styles.headerText}>Burgers</Text>
              <CarouselCards newData={burgerList} />
            </View>




            {/* Data rendered from local storage */}
            <View style={styles.carousel}>
              <Text style={styles.headerText}>burgers(Don't use this)</Text>
              <CarouselCards newData={burgerData} />
            </View>
            <View style={styles.carousel}>
              <Text style={styles.headerText}>Drinks(Don't use this)</Text>
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
