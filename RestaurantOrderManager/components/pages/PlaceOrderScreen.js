import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import IpConfig from '../../IpConfig';

const PlaceOrderScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Main Course');
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState(0); // Initialize total to 0

  const fetchMenuItems = async () => {
    try {
      const response = await fetch(`http://${IpConfig.apiBaseUrl}:8080/api/v1/menuitem/instock`);
      if (!response.ok) {
        throw new Error('Failed to fetch menu items');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      return [];
    }
  };

  useEffect(() => {
    // Fetch menu items when the component mounts
    fetchMenuItems()
      .then((menuItems) => {
        // Transform the fetched data into a new structure
        const transformedMenuItems = menuItems.map((item) => ({
          name: item.name,
          price: item.price,
          discount: item.discount,
          category: item.foodType,
        }));
        setMenuItems(transformedMenuItems);
      })
      .catch((error) => {
        console.error('Error loading menu items:', error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedItem(null); // Reset the selected food item when the category changes
  };

  const handleAddItem = () => {
    if (selectedItem && quantity) {
      const itemPrice = selectedItem.price * Number(quantity);
      const newTotal = total + itemPrice; // Calculate the new total
      setSelectedItems([...selectedItems, { item: selectedItem, quantity: Number(quantity) }]);
      setSelectedItem(null); // Reset the selected food item after adding
      setQuantity('');
      setTotal(newTotal); // Update the total
    }
  };

  const handlePlaceOrder = () => {
    console.log('Placing order for the following items:');
    console.log(selectedItems);
  };

  const foodItemsInCategory = menuItems.filter((item) => item.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.leftHalf}>
        <Text style={styles.title}>Take Order</Text>
        <View style={styles.centeredContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => handleCategoryChange(itemValue)}
            style={styles.input}
          >
            {Array.from(new Set(menuItems.map((item) => item.category))).map((category) => (
              <Picker.Item key={category} label={category} value={category} style={styles.text} />
            ))}
          </Picker>

          <Picker
            selectedValue={selectedItem ? selectedItem.name : null}
            onValueChange={(itemValue) =>
              setSelectedItem(foodItemsInCategory.find((item) => item.name === itemValue))
            }
            style={styles.input}
            enabled={foodItemsInCategory.length > 0}
          >
            <Picker.Item label="Select Food Item" value={null} style={styles.text} />
            {foodItemsInCategory.map((item) => (
              <Picker.Item key={item.name} label={item.name} value={item.name} style={styles.text} />
            ))}
          </Picker>

          <TextInput
            placeholder="Quantity"
            style={styles.text}
            value={quantity}
            onChangeText={(text) => setQuantity(text)}
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddItem}
          >
            <Text style={styles.addButtonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.rightHalf}>
        <Text style={styles.title}>Selected Items</Text>
        <ScrollView style={styles.itemList}>
          {selectedItems.map((item, index) => (
            <><View key={index} style={styles.itemRow}>
              <Text style={styles.text}>{item.item.name}</Text>
              <Text style={styles.text}>Quantity: {item.quantity}</Text>
              <Text style={styles.text}>{item.item.price * item.quantity}</Text>
            </View><View style={styles.lineSeparator} /></>
          ))}
        </ScrollView>

        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handlePlaceOrder}
        >
          <Text style={styles.addButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
  },
  leftHalf: {
    flex: 1, 
    padding: 16,
    backgroundColor: 'white',
  },
  rightHalf: {
    flex: 1, 
    padding: 16,
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  itemList: {
    flex: 1,
    width: 500,
    marginBottom: 20,
    backgroundColor: 'lightyellow',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    marginHorizontal: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 40,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'aliceblue',
    elevation: 5,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'midnightblue',
    padding: 10,
    borderRadius: 40,
    marginTop: 10,
    alignItems: 'center',
    width: '40%',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 22,
  },
  lineSeparator: {
    borderBottomWidth: 3, 
    borderColor: 'grey', 
    marginBottom: 10, 
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default PlaceOrderScreen;
