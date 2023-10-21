import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import UserList from '../molecules/UserList';
import IpConfig from '../../IpConfig';
import axios from 'axios';
import { useEffect } from 'react';

const AddUserPage = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState(''); // Initialize userRole state with an empty string
  const [selectedUserRole, setSelectedUserRole] = useState('Admin'); // Initialize selectedUserRole with 'Admin'
  const [users, setUsers] = useState([]);

  const fetchUserList = () => {
    fetch(`http://${IpConfig.apiBaseUrl}:8080/api/v1/user`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  useEffect(() => {
    fetchUserList();
  }, []);


  const handleRegister = () => {
    // function that adds a new user
    console.log("abc");

    let roleText;

    if (selectedUserRole === 'Admin') {
      roleText = 'ROLE_ADMIN';
    } else if (selectedUserRole === 'Waiter') {
      roleText = 'ROLE_WAITER';
    } else {
      console.error('Invalid role:', selectedUserRole);
      return; // Exit the function
    }

    const userData = {
      username,
      fullName,
      userPassword: password,
      userRole: roleText,
    };

    axios.post(`http://${IpConfig.apiBaseUrl}:8080/api/v1/user/new`, userData)
      .then(response => {
        console.log('User added:', response.data);
        fetchUserList();
        // Display an alert to the user and reset the input fields
        Alert.alert('User Saved', 'User has been successfully added', [
          {
            text: 'OK', onPress: () => {
              setUsername('');
              setFullName('');
              setEmail('');
              setPassword('');
              setSelectedUserRole('Admin'); // Reset selectedUserRole to 'Admin'
            }
          },
        ]);
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });

    
     
  };

  const onRemoveUser = (userId) => {
    axios
    .delete(`http://${IpConfig.apiBaseUrl}:8080/api/v1/user/remove/${userId}`)
    .then(() => {
      // If the deletion was successful, update the user list in the state
      setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== userId));
    })
    .catch((error) => {
      console.error('Error deleting user:', error);
      // Handle the error as needed (e.g., show an error message to the user)
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

        {/* <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        /> */}

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <Text style={styles.label}>User Role:</Text>
        <Picker
          selectedValue={selectedUserRole}
          onValueChange={(itemValue, itemIndex) => setSelectedUserRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Admin" value="Admin" style={styles.pickerItem}/>
          <Picker.Item label="Waiter" value="Waiter" style={styles.pickerItem}/>
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rightContainer}>
        <UserList users={users} onRemoveUser={onRemoveUser} />
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
    fontSize: 20
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
  picker: {
    width: 200, 
    height: 40, 
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pickerItem: {
    fontSize: 20, 
    color: 'black', 
    fontWeight: 'bold', 
  },
});

export default AddUserPage;
