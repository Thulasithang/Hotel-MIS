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
      <View style={styles.image}>
        <Image
          source={require('../../assets/images/WelcomeScreenImage.jpg')}
          // style={styles.image}
        />
      </View>
      <View style={styles.card}>
      {/* <Animated.Image
          source={require('../../assets/images/splash-screen.png')}
          style={[styles.logo, { opacity: fadeAnim }]}
        /> */}
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
    // justifyContent:"center",
    alignItems:"flex-end",
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    objectFit:"cover",
    backgroundColor: 'rgba(255, 255, 255, 0.5)',

    backdropFilter: 'blur(10px)',

  },
  card: {
    marginVertical: "5%",
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(10px)',
    justifyContent: 'center',
    paddingHorizontal: "5%",
    height: '80%', 
    width: '40%',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#060a71',
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    margin: 5,
    borderColor: '#060a71',
    borderWidth: 2,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#060a71',
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
