import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.3)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.name}</Text>
      <Text style={styles.body}>{item.description}</Text>
      <View style={{flexDirection: 'row'}}>
      <Ionicons name="star" size={20} color="gold" />
      <Text style={{marginLeft:10}}>{item.rating}</Text>
      <Text style={{position: "absolute", end: 40}}>Rs {item.price}</Text>
      <Ionicons 
      name="add-circle-outline" 
      size={20} color="black" 
      style={{position: "absolute", end: 10}}
      onPress={() => alert( item.name +" " +'Added to cart')}
      />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderRadius: 8,
    width: 250,
    height: 300,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 250,
    height: 150,
  },
  header: {
    color: "#222",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 12,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem