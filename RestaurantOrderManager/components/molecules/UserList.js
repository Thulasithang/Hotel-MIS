import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import IpConfig from '../../IpConfig';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    fetch(`http://${IpConfig.apiBaseUrl}:8080/api/v1/user`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const confirmRemoveUser = (userId) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to remove this user?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => onRemoveUser(userId),
        },
      ],
      { cancelable: false }
    );
  };

  const onRemoveUser = (userId) => {
    // Filter out the user to be removed from the state
    setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== userId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>User ID</Text>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Email</Text>
        <Text style={styles.headerText}>User Role</Text>
        <Text style={styles.headerText}>   </Text>
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.userId.toString()}
        renderItem={({ item }) => (
          <View style={styles.userRow}>
            <Text style={styles.userText}>{item.userId}</Text>
            <Text style={styles.userText}>{item.fullName}</Text>
            <Text style={styles.userText}>{item.email}</Text>
            <Text style={styles.userText}>
              {item.userRole === 'ROLE_WAITER' ? 'Waiter' : 'Admin'}
            </Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => confirmRemoveUser(item.userId)}
            >
              <Text style={styles.removeText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    elevation: 5,
    shadowOpacity: 0.8,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,
    margin: -7 
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: 'midnightblue',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  userText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  removeButton: {
    aspectRatio: 1,
    width: 50,
    backgroundColor: 'crimson',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  removeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  separator: {
    height: 3,
    backgroundColor: 'lightgray',
    marginVertical: 20,
    marginHorizontal: 30,
  },
};

export default UserList;
