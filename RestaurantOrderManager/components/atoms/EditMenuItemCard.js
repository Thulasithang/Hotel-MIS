import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import IpConfig from '../../IpConfig';
//import axios from 'axios';
const EditMenuItemCard = ({
  initialId,
  initialName,
  initialPrice,
  initialDiscount,
  initialStock,
  initialFoodType,
  initialImageUrl,
  initialDescription,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [itemName, setItemName] = useState(initialName);
  const [itemPrice, setItemPrice] = useState(initialPrice.toString());
  const [itemDiscount, setItemDiscount] = useState(initialDiscount.toString());
  const [itemStock, setItemStock] = useState(initialStock.toString());
  const [itemFoodType, setItemFoodType] = useState(initialFoodType);
  const [itemImageUrl, setItemImageUrl] = useState(initialImageUrl);
  const [itemDescription, setItemDescription] = useState(initialDescription);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Logic to update the DB
  };

  const confirmDelete = () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Send a DELETE request to delete the menu item
            axios
              .delete(`http://${IpConfig.apiBaseUrl}:8080/api/v1/menuitem/delete/${initialId}`)
              .then((response) => {
                // Handle success (e.g., show a success message)
                console.log('Menu item deleted successfully:', response.data);
                //onDelete(initialId);
              })
              .catch((error) => {
                // Handle errors (e.g., show an error message)
                console.error('Error deleting menu item:', error);
              });
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };



  return (
    <View style={styles.container}>
      <Text style={styles.MenuItemText}>ID: {initialId} | Menu Item: {itemName}</Text>
      {isEditing ? (
        <View>
          <TextInput
            style={styles.Text}
            placeholder="Item Name"
            value={itemName}
            onChangeText={(text) => setItemName(text)}
          />
          <TextInput
            style={styles.Text}
            placeholder="Item Price"
            value={itemPrice}
            onChangeText={(text) => setItemPrice(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.Text}
            placeholder="Item Discount"
            value={itemDiscount}
            onChangeText={(text) => setItemDiscount(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.Text}
            placeholder="Item Stock"
            value={itemStock}
            onChangeText={(text) => setItemStock(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.Text}
            placeholder="Food Type"
            value={itemFoodType}
            onChangeText={(text) => setItemFoodType(text)}
          />
          <TextInput
            style={styles.Text}
            placeholder="Image URL"
            value={itemImageUrl}
            onChangeText={(text) => setItemImageUrl(text)}
          />
          <TextInput
            style={styles.Text}
            placeholder="Description"
            value={itemDescription}
            onChangeText={(text) => setItemDescription(text)}
          />
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.EditSaveButton} onPress={handleSaveClick}>
              <Text style={styles.Text}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.Text}>Price: {itemPrice}</Text>
          <Text style={styles.Text}>Discount: {itemDiscount} %</Text>
          <Text style={styles.Text}>Stock: {itemStock}</Text>
          <Text style={styles.Text}>Food Type: {itemFoodType}</Text>
          <Text style={styles.Text}>Image URL: {itemImageUrl}</Text>
          <Text style={styles.Text}>Description: {itemDescription}</Text>
          <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.RemoveButton} onPress={confirmDelete}>
              <Text style={styles.Text}>REMOVE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.EditButton} onPress={handleEditClick}>
              <Text style={styles.Text}>EDIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
    margin: 40,
    marginHorizontal: 70,
    marginBottom: 30,
  },
  MenuItemText: {
    borderRadius: 3,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: 'midnightblue',
    elevation: 10,
    margin: 10,
    fontSize: 23,
    color: 'midnightblue',
  },
  Text: {
    fontSize: 20,
    color: 'black',
  },
  EditSaveButton: {
    backgroundColor: 'gainsboro',
    borderRadius: 25,
    padding: 15,
    width: 200,
    alignItems: 'center',
    shadowColor: 'midnightblue',
    elevation: 5,
  },
  EditButton: {
    backgroundColor: 'gainsboro',
    borderRadius: 25,
    padding: 15,
    width: 100,
    alignItems: 'center',
    shadowColor: 'midnightblue',
    elevation: 5,
    marginRight: 10,
  },
  RemoveButton: {
    backgroundColor: 'indianred',
    borderRadius: 25,
    padding: 10,
    width: 100,
    alignItems: 'center',
    shadowColor: 'red',
    elevation: 5,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default EditMenuItemCard;
