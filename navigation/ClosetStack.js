import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ClosetScreen from '../pages/ClosetScreen.js';
import ShirtScreen from '../pages/ShirtScreen.js';
import BottomScreen from '../pages/BottomScreen.js';
import SkirtDressScreen from '../pages/SkirtDressScreen.js'
import SweaterJacketScreen from '../pages/SweaterJacketScreen.js'
import AccessoriesScreen from '../pages/AccessoriesScreen.js';
import LoginScreen from '../pages/LoginScreen.js';
import AddItemScreen from '../pages/AddItemScreen.js';

//Navigating the closet

const Stack = createStackNavigator();

function ClosetStack () {
    return (
        <Stack.Navigator intialRouteName = 'ClosetScreen'
                         screenOptions={{
                             headerShown: false
                         }}>
            <Stack.Screen name='ClosetScreen' component={ClosetScreen}  />
            <Stack.Screen name='Shirts' component={ShirtScreen}  />
            <Stack.Screen name='Bottoms' component={BottomScreen}  />
            <Stack.Screen name='SkirtsDresses' component={SkirtDressScreen}/>
            <Stack.Screen name='SweatersJackets' component={SweaterJacketScreen}/>
            <Stack.Screen name='Accessories' component={AccessoriesScreen}/>
            <Stack.Screen name='AddItem' component={AddItemScreen} />
        </Stack.Navigator>
    );
}
export default ClosetStack;
