import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserRoleCard = ({ role, onPress }) => {
  return (
    <View >
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.roleText}>{role}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'midnightblue',
    padding: 16,
    margin: 5,
    borderRadius: 25,
    shadowColor: '00008b',
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  roleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'orange',
  },
  button: {
    backgroundColor: '#ffa07a',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserRoleCard;
