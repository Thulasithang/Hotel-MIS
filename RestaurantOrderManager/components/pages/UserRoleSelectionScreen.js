import React from 'react';
import UserRoleCard from "../atoms/UserRoleCard";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import OrderDeliveryCard from '../atoms/OrderDeliveryCard';
import OrderCard from '../atoms/OrderCard';
import ReservationList from '../molecules/ReservationList';




const UserRoleSelectionScreen=()=>{
    const logo = require('../../assets/images/Wlogo.png');
    const navigation = useNavigation();
    const handleLoginPress = (userRole) => {
        // Add navigation logic to navigate to the login screen here
        navigation.navigate('login',{role: userRole})
      };

    return (
      <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topContainer}>
        <Image
          source={logo}
          style={{ width: 400, height: 400, alignSelf: 'center' }}
        />
      </View>
      
      <View style={styles.bottomContainer}>
        <UserRoleCard role="Waiter" onPress={() => handleLoginPress('Waiter')} />
        <UserRoleCard role="Kitchen Staff" onPress={() => handleLoginPress('Kitchen Staff')}/>
        <UserRoleCard role="Admin" onPress={() => handleLoginPress('Admin')} />
      </View>
    </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20, // Adjust the margin as needed
  },
});

export default UserRoleSelectionScreen;