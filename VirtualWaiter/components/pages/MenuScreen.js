import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CarouselCards from '../molecules/CarouselCards';


const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logoImg}
          source={require("../../assets/images/splash-screen.png")}
        />
        <CarouselCards/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
  },
  logoImg: {
    justifyContent: 'flex-start',
    top: 8,
    left: 16,
    height: 150,
    width: 150,
    padding: 10,
    borderWidth: 2,
    borderColor: "black"
  },
});

export default MenuScreen;
