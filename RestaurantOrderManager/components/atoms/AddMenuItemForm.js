import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const AddMenuItemForm = ({onAdd}) => {
  const [isEditing, setIsEditing] = useState(true);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDiscount, setItemDiscount] = useState("");
  const [itemStock, setItemStock] = useState("");
  const [itemFoodType, setItemFoodType] = useState("");
  const [itemImageUrl, setItemImageUrl] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [formError, setFormError] = useState("");

  const handleAddClick = () => {

      // Reset previous error message
      setFormError("");

      // Validate form fields
      if (
        itemName.trim() === "" ||
        itemPrice.trim() === "" ||
        itemDiscount.trim() === "" ||
        itemStock.trim() === "" ||
        itemFoodType.trim() === ""
      ) {
        setFormError("Cannot leave required fields empty");
        return;
      }
  
    setIsEditing(false);

    const newItem = {
      name: itemName,
      price: parseFloat(itemPrice), // Convert to a number
      discount: parseInt(itemDiscount), // Convert to a number
      quantity: parseInt(itemStock), // Convert to a number
      foodType: itemFoodType,
      imageUrl: itemImageUrl,
      description: itemDescription,
    };

    onAdd(newItem)

    //  add the menu item to the dayabase
  };

  return (
    <View style={styles.container}>
      <Text style={styles.MenuItemText}> |                       Add New Menu Item                       | </Text>
      {isEditing ? (
        <View>
          {formError !== "" && <Text style={styles.errorText}>{formError}</Text>}
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
            <TouchableOpacity style={styles.AddButton} onPress={handleAddClick}>
              <Text style={styles.Text}>ADD</Text>
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
  AddButton: {
    backgroundColor: 'gainsboro',
    borderRadius: 25,
    padding: 10,
    width: '100%', 
    alignItems: 'center',
    shadowColor: 'midnightblue',
    elevation: 5,
    width: 150
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default AddMenuItemForm;
