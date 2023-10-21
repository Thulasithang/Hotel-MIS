import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';

const mapStateToProps = (state) => ({
  customerName: state.customer.customerName,
  contactNumber: state.customer.contactNumber,
});

const WelcomePage = ({ dispatch, customerName, contactNumber }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Update the state when the props change, used for resetting name and contact number
    setName(customerName);
    setCustomerNumber(contactNumber);

    // Add animations here
    Animated.timing(fadeAnim, {
      toValue: 1, // Target value is 1 (fully opaque)
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: false, // Required for Android
    }).start();
  }, [customerName, contactNumber, fadeAnim]);

  const handleSubmit = () => {
    dispatch({
      type: 'SET_CUSTOMER_NAME',
      payload: name,
    });
    dispatch({
      type: 'SET_CONTACT_NUMBER',
      payload: customerNumber,
    });
    navigation.navigate('MainContainer');
    // Handle the submission of customer's name and contact number here
    // You can add your logic to save the information or navigate to the next screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Animated.Image
          source={require('../../assets/images/splash-screen.png')}
          style={[styles.logo, { opacity: fadeAnim }]}
        />
        <Animated.Text
          style={[styles.title, { opacity: fadeAnim }]}
        >
          Welcome to Virtual Waiter
        </Animated.Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Enter your name"
          />
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setCustomerNumber(text)}
            value={customerNumber}
            placeholder="Enter your contact number"
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Start Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    margin: 5,
    borderColor: '#007bff',
    borderWidth: 2,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default connect(mapStateToProps)(WelcomePage);
