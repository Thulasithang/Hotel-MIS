import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useRoute, useNavigation } from '@react-navigation/native';
import TableGrid from '../molecules/TableGrid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IpConfig from '../../IpConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = `http://${IpConfig.apiBaseUrl}:8080/api/v1`

// const apiUrl = 'http://10.10.22.66:8080/api/v1/table';

const TableSelectionScreen=()=>{
    const route = useRoute();
    const { waiterID } = route.params;
    const navigation = useNavigation();
    const [orderData, setOrderData] = useState([]);

    // useEffect(() => {
    //   fetch(baseUrl+"/order/prepared")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       const transformedData = data.map((item) => ({
    //         orderId: item.orderId.toString(), 
    //         tableId: item.tableId.toString(),
    //       }));
    //       setOrderData(transformedData);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //     });
    // }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Retrieve the JWT token from AsyncStorage
          const token = await AsyncStorage.getItem('authToken');
    
          if (token) {
            // Include the JWT token in the request headers
            const headers = {
              Authorization: `Bearer ${token}`,
            };
    
            // Make the fetch request with the token in the headers
            const response = await fetch(baseUrl + "/order/prepared", {
              headers,
            });
    
            if (response.ok) {
              const data = await response.json();
              const transformedData = data.map((item) => ({
                orderId: item.orderId.toString(),
                tableId: item.tableId.toString(),
              }));
              setOrderData(transformedData);
            } else {
              console.error('Error fetching data:', response.statusText);
            }
          } else {
            console.error('User is not authenticated');
          }
        } catch (error) {
          // Handle errors
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []);

    const deliveryNo = orderData.length;



    const handleDeliveryButtonPress = () => {
      navigation.navigate('OrderDeliveryScreen',{orders : orderData})
      
    };

    const [testData, setTestData]=useState([])
    // useEffect(() => {
      
    //   axios.get(baseUrl+"/table") 
    //     .then((response) => {
    //       setTestData(response.data); 
    //     })
    //     .catch((error) => {
    //       // Handle errors
    //       console.error('Error fetching data:', error);
    //     });
    // }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Retrieve the JWT token from AsyncStorage
          const token = await AsyncStorage.getItem('authToken');
    
          if (token) {
            // Include the JWT token in the request headers
            const headers = {
              Authorization: `Bearer ${token}`,
            };
    
            // Make the GET request with the token in the headers
            const response = await axios.get(baseUrl + "/table", { headers });
    
            // Set the data in your state
            setTestData(response.data);
          } else {
            // Handle the case where the user is not authenticated
            console.error('User is not authenticated');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []);


    const tableData = testData.map( item => ({
      table_id: item.id,
      reserved: item.reserved,
      occupied: item.occupied,
      waiter_requested: item.waiterRequested
    }));





      // <TableCard number={'12'} status={'reserved'} waiterRequested={false}></TableCard>
    return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <Text style={styles.leftText}>Waiter ID : {waiterID}</Text>
      <TouchableOpacity style={styles.button} onPress={handleDeliveryButtonPress}>
      <Text style={styles.buttonText}>Delivery</Text>
      {deliveryNo > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{deliveryNo}</Text>
        </View>
      )}
    </TouchableOpacity>
      

      </View>
        <TableGrid tableData={tableData} />
      </View>);
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
    },
    topBar:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'midnightblue',
      padding: 10,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      elevation: 10,
      alignItems: "center",
    },
    button:{
      backgroundColor: 'white',
      alignContent: "center",
      padding: 10,
      borderRadius: 10,
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'flex-end', 
      position: 'relative',

    },
    leftText: {
      color: 'white',
      fontSize: 20,
      marginLeft: 20, 
    },

    buttonText: {
      color: 'midnightblue',
      fontSize: 20,
    },

    badge: {
      backgroundColor: 'red', 
      borderRadius: 100, 
      paddingHorizontal: 10, 
      paddingVertical: 4, 
      position: 'absolute', 
      top: -10, 
      right: -10, 
      zIndex: 1, 
      elevation: 10,
    },
    badgeText: {
      color: 'white', 
      fontSize: 18, 
      fontWeight: 'bold',
    },
  });


export default TableSelectionScreen;


