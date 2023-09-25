import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserList from '../molecules/UserList';

const AddUserPage = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');

  const handleRegister = () => {
    
    console.log('Registration data:', {
      username,
      fullName,
      email,
      password,
      role: userRole,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <Text style={styles.label}>User Role:</Text>
        <TextInput
          style={styles.input}
          value={userRole}
          onChangeText={(text) => setUserRole(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rightContainer}>
        <UserList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
    backgroundColor: 'white'
  },
  leftContainer: {
    flex: 4,
    marginRight: 10,
    backgroundColor: "aliceblue",
    padding: 25
  },
  rightContainer: {
    flex: 6,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 25,
    elevation: 6
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default AddUserPage;
