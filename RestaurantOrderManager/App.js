import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import UserRoleSelectionScreen from '../RestaurantOrderManager/components/pages/UserRoleSelectionScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../RestaurantOrderManager/components/pages/LoginScreen';
import TableSelectionScreen from '../RestaurantOrderManager/components/pages/TableSelectionScreen';
import EditMenuScreen from '../RestaurantOrderManager/components/pages/EditMenuScreen';
import OrderDeliveryScreen from './components/pages/OrderDeliveryScreen';
import OrderCardScreen from './components/pages/OrderCardScreen';
import AddUserPage from './components/pages/AddUserPage';
import PlaceOrderScreen from './components/pages/PlaceOrderScreen';
import AdminTableGrid from './components/molecules/AdminTableGrid';
import AdminTableScreen from './components/pages/AdminTableScreen';

const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="UserRoleSelect"
          component={UserRoleSelectionScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{title: 'Welcome'}}
        />  
        <Stack.Screen
          name="TableSelection"
          component={TableSelectionScreen}
          options={{title: 'Welcome'}}
        />  
        <Stack.Screen
          name="EditMenuScreen"
          component={EditMenuScreen}
          options={{title: 'Welcome'}}
        />  
        <Stack.Screen
          name="OrderDeliveryScreen"
          component={OrderDeliveryScreen}
          options={{title: 'Orders To be Delivered'}}
        />
        <Stack.Screen
          name="OrderAcceptScreen"
          component={OrderCardScreen}
          options={{title: 'Orders To Prepare'}}
        />
        <Stack.Screen
          name="AddUserPage"
          component={AddUserPage}
          options={{title: 'Add New User'}}
        />
        <Stack.Screen
          name="Tablereservation"
          component={AdminTableScreen}
          options={{title: 'Tables & Reservation'}}
        />
        <Stack.Screen
          name="PlaceOrder"
          component={PlaceOrderScreen}
          options={{title: 'Welcome'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


