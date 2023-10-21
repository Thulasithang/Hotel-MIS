import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { StyleSheet, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { authenticateUser } from '../../AuthenticateUser';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {


  const route = useRoute();
  const {role} = route.params
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const navigation = useNavigation();

  const handleLogin = async ({role, username}) => {

    try {
      const token = await authenticateUser(username, password);
      await AsyncStorage.setItem('authToken', token);
  
      // Navigate based on user's role
      if(role==='Admin'){
        navigation.navigate('AdminHome');
      }else if (role=='Hotel Staff'){
        navigation.navigate('EditMenuScreen');
      }
   
    } catch (error) {
      //console.error('Authentication failed:', error);
        console.error('Authentication failed:', error);
        Alert.alert('Authentication Failed', 'Incorrect username or password.');
    }
    };




  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white'
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'midnightblue'
  },
  input: {
    color: 'midnightblue',
    borderWidth: 1,
    borderColor: 'midnightblue',
    borderRadius: 14,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'midnightblue', // Button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop:30,
    borderRadius: 14,
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default LoginScreen;





  