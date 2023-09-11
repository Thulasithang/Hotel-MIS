import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './components/pages/LoginScreen'; // Import your login screen component
import MainContainer from './navigation/MainContainer';
import CartScreen from './components/pages/CartScreen';
import ReservedScreen from './components/pages/ReservedScreen';
import store from "./store/store"; // Import the Redux store
import { Provider } from 'react-redux';


const Tab = createBottomTabNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Conditionally render the login screen or the main app content based on isLoggedIn
  return (
    <Provider store={store}>
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="reserved" component={ReservedScreen} />
          <Tab.Screen name="main" component={MainContainer} />
          <Tab.Screen name="cart" component={CartScreen} />
        </Tab.Navigator>
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
    </NavigationContainer>
    </Provider>
  );
}

export default App;
