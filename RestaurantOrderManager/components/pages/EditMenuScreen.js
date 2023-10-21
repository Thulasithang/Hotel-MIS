import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import EditMenuItemGrid from '../molecules/EditMenuItemGrid';
import { useNavigation } from '@react-navigation/native';
import AddMenuItemForm from '../atoms/AddMenuItemForm';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReservationList from '../molecules/ReservationList';
import IpConfig from '../../IpConfig';
import axios from 'axios';


const EditMenuScreen = () => {
  const navigation = useNavigation();
  const [menuItems, setMenuItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   const backendEndpoint = `http://${IpConfig.apiBaseUrl}:8080/api/v1/menuitem/getAllItems`;

  //   fetch(backendEndpoint)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const convertedData = data.map((item) => ({
  //         id: item.menuitemId,
  //         name: item.name,
  //         price: item.price,
  //         discount: item.discount,
  //         stock: item.quantity,
  //         foodType: item.foodType,
  //         imageUrl: item.imageUrl,
  //         description: item.description,
  //       }));
  //       setMenuItems(convertedData);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // ////////////////////////////////////////////////////////////////////////

  // const handleRemoveItem = (itemId) => {
  //   // Send a request to delete the item from the server
  //   axios.delete(`http://${IpConfig.apiBaseUrl}:8080/api/v1/menuitem/delete/${itemId}`)
  //     .then(() => {
  //       console.log('delete successfull')
  //       // Update the menu items in state by filtering out the deleted item
  //       setMenuItems((prevItems) => prevItems.filter(item => item.id !== itemId), () => {
  //         // This callback will be executed after the state has been updated
  //         console.log(menuItems);
  //       });

  //     })
  //     .catch((error) => {
  //       console.error('Error deleting item:', error);
  //     });
  // };

    // Define a state to track changes in menuItems
    const [menuItemsChanged, setMenuItemsChanged] = useState(false);

    useEffect(() => {
      // Fetch menu items when the component mounts
      fetchMenuItems();
    }, [menuItemsChanged]); // Add menuItemsChanged as a dependency
  
    const fetchMenuItems = () => {
      const backendEndpoint = `http://${IpConfig.apiBaseUrl}:8080/api/v1/menuitem/getAllItems`;
  
      fetch(backendEndpoint)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const convertedData = data.map((item) => ({
            id: item.menuitemId,
            name: item.name,
            price: item.price,
            discount: item.discount,
            stock: item.quantity,
            foodType: item.foodType,
            imageUrl: item.imageUrl,
            description: item.description,
          }));
          setMenuItems(convertedData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
  
    const handleRemoveItem = (itemId) => {
      axios.delete(`http://${IpConfig.apiBaseUrl}:8080/api/v1/menuitem/delete/${itemId}`)
        .then(() => {
          console.log('Delete successful');
          // Set menuItemsChanged to trigger the useEffect
          setMenuItemsChanged(!menuItemsChanged);
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
    };

    const handleEditItem = (updatedItem) => {
        axios.patch(`http://${IpConfig.apiBaseUrl}:8080/api/v1/menuitem/update/${updatedItem.id}`, updatedItem)
        .then(() => {
          console.log('Edit successful');
          setMenuItemsChanged(!menuItemsChanged); //to re render
        })
        .catch((error) => {
          console.error('Error editing item:', error);
        });
    };

    const handleAddItem = (newItem) => {

      axios.post(`http://${IpConfig.apiBaseUrl}:8080/api/v1/menuitem/add`, newItem)
      .then(() => {
        console.log('Add successful');
        setMenuItemsChanged(!menuItemsChanged); // To trigger a re-render
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });
  
    };






  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigateToUserScreen = () => {
    navigation.navigate('AddUserPage');
  };

  const navigateToTableScreen = () => {
    navigation.navigate('Tablereservation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <TouchableOpacity style={styles.button} onPress={navigateToTableScreen}>
          <Text style={styles.buttonText}>Tables & Reservations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToUserScreen}>
          <Text style={styles.buttonText}>Add User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonText}>Add MenuItem</Text>
        </TouchableOpacity>
      </View>
      <EditMenuItemGrid menuData={menuItems} onRemove={handleRemoveItem} onEdit={handleEditItem} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                <Icon name="close" size={20} color="darkred" />
            </TouchableOpacity>
            <AddMenuItemForm onAdd={handleAddItem} />
          </View>
        </View>
      </Modal>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    backgroundColor: 'midnightblue',
    padding: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowColor: 'midnightblue',
    elevation: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 10, 
    margin: 5,
  },
  buttonText: {
    color: 'midnightblue',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditMenuScreen;
