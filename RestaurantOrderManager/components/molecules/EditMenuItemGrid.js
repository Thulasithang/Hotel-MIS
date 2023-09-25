import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import EditMenuItemCard from "../atoms/EditMenuItemCard";
import { KeyboardAwareFlatList, KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AddMenuItemForm from '../atoms/AddMenuItemForm';

const EditMenuItemGrid=({menuData})=>{

    const renderItem =({item})=>{

        //{InitialId,initialName,initialPrice,initialDiscount,initialStock,}

        return(<EditMenuItemCard
            initialId={item.id.toString()}
            initialName={item.name.toString()}
            initialPrice={item.price.toString()}
            initialDiscount={item.discount.toString()}
            initialStock={item.stock.toString()}
            initialFoodType={item.foodType}
            initialDescription={item.description}
            initialImageUrl={item.imageUrl}
          />);
      }

    return (
    <View style={styles.container}>
    <KeyboardAwareScrollView
      extraScrollHeight={100} 
    >
    <KeyboardAwareFlatList
        data={menuData}
        numColumns={1} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={renderItem}
        contentContainerStyle={styles.gridContainer}
    />
    </KeyboardAwareScrollView>
    </View>
    );


}

const styles = StyleSheet.create({
    gridContainer: {
        flexGrow:1,
        padding: 8,
    },
  
    container:{
      backgroundColor:'white',
    },
  });

export default EditMenuItemGrid;
