import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { StyleSheet, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { authenticateUser } from '../AuthenticateUser';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IpConfig from '../../IpConfig';
import { Alert } from 'react-native';




const LoginScreen = () => {


  const route = useRoute();
  const {role} = route.params
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const auth = FIREBASE_AUTH

  const navigation = useNavigation();

  const handleLogin = async ({ role, username }) => {
    try {
      if (role === 'Admin') {
        const token = await authenticateUser(username, password, "ROLE_ADMIN");
        await AsyncStorage.setItem('authToken', token);
        navigation.navigate('EditMenuScreen');
      } else if (role === 'Waiter') {
        const token = await authenticateUser(username, password, "ROLE_WAITER");
        await AsyncStorage.setItem('authToken', token);
        navigation.navigate('TableSelection', { waiterID: username });
      } else if (role === 'Kitchen Staff') {
        const token = await authenticateUser(username, password, "ROLE_HOTELSTAFF");
        await AsyncStorage.setItem('authToken', token);
        navigation.navigate('OrderAcceptScreen');
      }else{
        console.error('Authentication failed: Invalid role');
        Alert.alert('Authentication Failed', 'Invalid role.');
      }

    } catch (error) {
      console.error('Authentication failed:', error);
      Alert.alert('Authentication Failed', 'Incorrect username or password.');
    }
  };




  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Enter your username"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
        <TouchableOpacity style={styles.button} onPress={() => handleLogin({role, username})}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  subContainer: {
    marginHorizontal: 100,
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white'
  },
  label: {
    fontSize: 25,
    marginBottom: 15,
    color: 'midnightblue',
    marginLeft: 15
  },
  input: {
    color: 'midnightblue',
    borderWidth: 1,
    borderColor: 'midnightblue',
    borderRadius: 30,
    padding: 18,
    marginBottom: 16,
    fontSize: 25,
  },
  button: {
    backgroundColor: 'midnightblue', // Button background color
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginTop:45,
    borderRadius:30,
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default LoginScreen;

        // // Handle authentication for other roles and cases
        // const token = await authenticateUser(username, password);
        // await AsyncStorage.setItem('authToken', token);
        // if (role === 'Waiter') {
        //   navigation.navigate('TableSelection', { waiterID: username });
        // } else if (role === 'Kitchen Staff') {
        //   navigation.navigate('OrderAcceptScreen');
        // } else {
        //   // Handle other roles here
        //   // For roles that don't match Admin, Waiter, or Kitchen Staff
        //   console.error('Authentication failed: Invalid role');
        //   Alert.alert('Authentication Failed', 'Invalid role.');
        // }





  