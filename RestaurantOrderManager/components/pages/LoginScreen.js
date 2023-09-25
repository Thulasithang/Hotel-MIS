import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { StyleSheet, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { authenticateUser } from '../AuthenticateUser';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// import { FIREBASE_AUTH } from '../../FirebaseConfig';


const LoginScreen = () => {


  const route = useRoute();
  const {role} = route.params
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const auth = FIREBASE_AUTH

  const navigation = useNavigation();

  const handleLogin = async ({role, username}) => {

    try {
      const token = await authenticateUser(username, password);
      //console.out(username,password)
      await AsyncStorage.setItem('authToken', token);
  
      // Navigate based on user's role
      if (role === 'Waiter') {
        navigation.navigate('TableSelection', { waiterID: username });
      } else if (role === 'Admin') {
        navigation.navigate('EditMenuScreen');
      } else if (role === 'Kitchen Staff') {
        navigation.navigate('OrderAcceptScreen');
      }
    } catch (error) {
      console.error('Authentication failed:', error);
    }



    // if(role==='Waiter'){
    //   navigation.navigate('TableSelection',{waiterID: username});
    // }else if (role=='Admin'){
    //   navigation.navigate('EditMenuScreen');
    // }else if (role=="Kitchen Staff"){
    //   navigation.navigate('OrderAcceptScreen');
    // }

    // Implement login logic here
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
    marginHorizontal: 20,
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





  