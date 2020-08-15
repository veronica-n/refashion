import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LoginScreen from '../pages/LoginScreen.js';

const Stack = createStackNavigator();

function LoginStack ( ) {
    return (
        <Stack.Navigator intialRouteName = 'Login'
                         screenOptions={{
                             headerShown: false
                         }}>
          <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
      );
}

export default LoginStack;
