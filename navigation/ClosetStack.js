import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ClosetScreen from '../pages/ClosetScreen.js';
import ShirtScreen from '../pages/ShirtScreen.js';

const Stack = createStackNavigator();

function ClosetStack ( ) {
    return (
        <Stack.Navigator intialRouteName = 'ClosetScreen'>
            <Stack.Screen name='ClosetScreen' component={ClosetScreen}  />
            <Stack.Screen name='Shirts' component={ShirtScreen}  />
        </Stack.Navigator>

    );
}
export default ClosetStack;