import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './components/pages/LoginScreen'; // Import your login screen component
import MainContainer from './navigation/MainContainer';
import CartScreen from './components/pages/CartScreen';


const Tab = createBottomTabNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Conditionally render the login screen or the main app content based on isLoggedIn
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="main" component={MainContainer} />
          <Tab.Screen name="cart" component={CartScreen} />
        </Tab.Navigator>
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
}

export default App;
