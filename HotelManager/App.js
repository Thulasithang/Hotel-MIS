import UserRoleSelectionScreen from '../HotelManager/components/pages/UserRoleSelectionScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../HotelManager/components/pages/LoginScreen';
import AdminHomeScreen from './components/pages/AdminHomeScreen';



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
          name="AdminHome"
          component={AdminHomeScreen}
          options={{title: 'Welcome'}}
        />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}


