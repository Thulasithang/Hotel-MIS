import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import CarouselCards from "../molecules/CarouselCards";
import data from "../../data/data";

burgerData = data.filter((item) => {
  return item.category === "Burgers";
});

drinkData = data.filter((item) => {
  return item.category === "Drinks";
});

const MenuScreen = () => {
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
