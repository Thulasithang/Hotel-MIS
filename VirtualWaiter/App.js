import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginScreen from './components/pages/LoginScreen';
import MainContainer from './navigation/MainContainer';
import CartScreen from './components/pages/CartScreen';
// import OrderStatus from './components/pages/OrderStatus';
import store from "./store/store";
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator>
            <Tab.Screen name="Menu" component={MainContainer} />
            <Tab.Screen name="Cart" component={CartScreen} />
            {/* <Tab.Screen name="Order Status" component={OrderStatus} /> */}
          </Tab.Navigator>
        ) : (
          <LoginScreen onLogin={() => setIsLoggedIn(true)} />
        )}
        {cartVisible && (
          <View style={{ position: 'absolute', top: 0, right: 0, width: '30%', height: '100%', zIndex: 1 }}>
            <CartScreen onClose={() => setCartVisible(false)} />
          </View>
        )}
        {!cartVisible && (
          <TouchableOpacity
            onPress={() => setCartVisible(true)}
          >
            <Text>Show Cart</Text>
          </TouchableOpacity>
        )}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
