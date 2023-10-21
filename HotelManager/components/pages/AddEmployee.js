// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
// import axios from 'axios';
// import ipAddress from '../../config';

// const AddUserPage = () => {
//   const [username, setUsername] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [password, setPassword] = useState('');
//   const defaultRole = 'ROLE_HOTELSTAFF'; // Set the default role

//   const handleRegister = () => {
//     console.log("abc");

//     // console.log('Registration data:', {
//     //   username,
//     //   fullName,
//     //   email,
//     //   password,
//     //   role: defaultRole, // Use the default role
//     // });

//     const userData = {
//       username,
//       fullName,
//       userPassword: password,
//       userRole: defaultRole, // Use the default role
//     };

//     axios.post(`${ipAddress}/api/v1/user/new`, userData)
//       .then(response => {
//         console.log('User added:', response.data);
//         // Display an alert to the user and reset the input fields
//         Alert.alert('User Saved', 'User has been successfully added', [
//           {
//             text: 'OK', onPress: () => {
//               setUsername('');
//               setFullName('');
//               setPassword('');
//             }
//           },
//         ]);
//       })
//       .catch(error => {
//         console.error('Error adding user:', error);
//       });
//   };

//   return (

//       <View style={styles.leftContainer}>
//         <Text style={styles.label}>Username:</Text>
//         <TextInput
//           style={styles.input}
//           value={username}
//           onChangeText={(text) => setUsername(text)}
//         />

//         <Text style={styles.label}>Full Name:</Text>
//         <TextInput
//           style={styles.input}
//           value={fullName}
//           onChangeText={(text) => setFullName(text)}
//         />

//         <Text style={styles.label}>Password:</Text>
//         <TextInput
//           style={styles.input}
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//           secureTextEntry
//         />

//         <TouchableOpacity style={styles.button} onPress={handleRegister}>
//           <Text style={styles.buttonText}>Register</Text>
//         </TouchableOpacity>
//       </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//     paddingTop: 10,
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   leftContainer: {
//     flex: 4,
//     marginRight: 10,
//     backgroundColor: "aliceblue",
//     padding: 25
//   },
//   rightContainer: {
//     flex: 6,
//   },
//   label: {
//     fontSize: 20,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 8,
//     borderRadius: 20,
//     fontSize: 20
//   },
//   button: {
//     backgroundColor: 'midnightblue',
//     padding: 15,
//     borderRadius: 40,
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 25,
//     elevation: 6
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 20,
//   },
//   picker: {
//     width: 200, 
//     height: 40, 
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   pickerItem: {
//     fontSize: 20, 
//     color: 'black', 
//     fontWeight: 'bold', 
//   },
// });

// export default AddUserPage;



import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import ipAddress from '../../config';
import axios from 'axios';
import { useEffect } from 'react';

const AddUserPage = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [selectedUserRole, setSelectedUserRole] = useState('Hotel Staff'); // Initialize selectedUserRole with 'Admin'



  const handleRegister = () => {
    // function that adds a new user

    if (!username || !fullName || !password ) {
      Alert.alert('Cannot Leave Empty Fields', 'Please fill in all required fields');
      return; // Exit the function
    }

    let roleText;

    if (selectedUserRole === 'Admin') {
      roleText = 'ROLE_ADMIN';
    } else if (selectedUserRole === 'Hotel Staff') {
      roleText = 'ROLE_HOTELSTAFF';
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

    console.log(`${ipAddress}/api/v1/user/new`)

    axios.post(`${ipAddress}/api/v1/user/new`, userData)
      .then(response => {
        console.log('User added:', response.data);
        Alert.alert('User Saved', 'User has been successfully added', [
          {
            text: 'OK', onPress: () => {
              setUsername('');
              setFullName('');
              setPassword('');
              setSelectedUserRole('Hotel Staff'); // Reset selectedUserRole to 'Admin'
            }
          },
        ]);
      })
      .catch(error => {
        console.error('Error adding user:', error);
      }); 
  };



  return (

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
          <Picker.Item label="Hotel Staff" value="Hotel Staff" style={styles.pickerItem}/>
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: 'midnightblue',
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
