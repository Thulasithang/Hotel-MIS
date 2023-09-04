import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.199)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        resizeMode="cover" // This ensures the image fully covers the container
      />
      <Text style={styles.header}>{item.name}</Text>
      <Text style={styles.body}>{item.description}</Text>
      <View style={{flexDirection: 'row', marginTop:20, paddingLeft: 10}}>
        <Ionicons name="star" size={20} color="gold" />
        <Text style={{marginLeft:10}}>{item.rating}</Text>
        <Text style={{position: "absolute", end: 60}}>Rs {item.price}</Text>
        <Ionicons 
          name="add-circle-outline" 
          size={40} color="black" 
          style={{position: "absolute", end: 10, alignSelf: 'center'}}
          onPress={() => alert( item.name +" " +'Added to cart')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    // borderWidth: 1,
    width: ITEM_WIDTH,
    height: 380,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    backgroundColor: 'white', 
    elevation: 10,
  },
  image: {
    borderRadius: 8,
    width: '100%', // Make sure the image takes the full width of the container
    height: '50%', // Adjust the height as needed
  },
  header: {
    paddingLeft: 10,
    color: "#222",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20
  },
  body: {
    padding: 10,
    color: "#222",
    fontSize: 12,
  }
})

export default CarouselCardItem
