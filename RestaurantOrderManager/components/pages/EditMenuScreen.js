import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import EditMenuItemGrid from '../molecules/EditMenuItemGrid';
import { useNavigation } from '@react-navigation/native';
import AddMenuItemForm from '../atoms/AddMenuItemForm';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReservationList from '../molecules/ReservationList';
import IpConfig from '../../IpConfig';

const EditMenuScreen = () => {
  const navigation = useNavigation();
  const [menuItems, setMenuItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const backendEndpoint = `http://${IpConfig.apiBaseUrl}:8080/api/v1/menuitem`;

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
  }, []);

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
      <EditMenuItemGrid menuData={menuItems} />

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
            <AddMenuItemForm />
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
