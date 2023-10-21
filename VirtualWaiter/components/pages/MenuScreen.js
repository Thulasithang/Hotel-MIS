import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import CarouselCards from "../molecules/CarouselCards";
import data from "../../data/data";
import { fetchItems, fetchDiscountItems } from "../../data/testData";

//New cart system is added
const mapStateToProps = (state) => ({
  itemsInCart: state.cart.itemsInCart,
  customerName: state.customer.customerName,
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

const MenuScreen = ({ itemsInCart, addToCart, customerName }) => {
  const [items, setItems] = useState([]);
  const [discountItems, setDiscountItems] = useState([]);
  const [burgerList, setBurgerList] = useState([]);
  const [pizzaList, setPizzaList] = useState([]);
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    // Fetch data using the service
    fetchDiscountItems()
      .then((data) => {
        setDiscountItems(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error as needed (e.g., show an error message)
      });
  }, []);

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

    // Filter drink items
    const drinks = items.filter((item) => item.foodType === "Drink");
    setDrinkList(drinks);
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
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome {customerName},</Text>
            </View>
            {/* trial for the carousel from the backend */}
            <View style={styles.carousel}>
              <Text style={styles.headerText}>Special Offers</Text>
              <CarouselCards newData={discountItems} />
            </View>
            <View style={styles.carousel}>
              <Text style={styles.headerText}>Pizza</Text>
              <CarouselCards newData={pizzaList} />
            </View>
            <View style={styles.carousel}>
              <Text style={styles.headerText}>Burgers</Text>
              <CarouselCards newData={burgerList} />
            </View>

            <View style={styles.carousel}>
              <Text style={styles.headerText}>Drinks</Text>
              <CarouselCards newData={drinkList} />
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
    paddingLeft: 10,
  },
  logoImg: {
    justifyContent: "flex-start",
    height: 150,
    width: 150,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    top: 8,
    left: 16,
  },
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: -80,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    justifyContent: "center",
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

export default connect(mapStateToProps)(MenuScreen);
