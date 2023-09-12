import React from 'react';
import UserRoleCard from "../atoms/UserRoleCard";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native";
import { View, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AdminHomeDetailCard from '../atoms/AdminHomeDetailCard';
import BarGraph from '../atoms/RevenueBarGraph';




const UserRoleSelectionScreen=()=>{
    const logo = require('../../assets/images/Wlogo.png');
    const navigation = useNavigation();

    const handleLoginPress = (userRole) => {
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
        <UserRoleCard role="Admin" onPress={() => handleLoginPress('Admin')} />
        <UserRoleCard role="Hotel Staff" onPress={() => handleLoginPress('staff')} />
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