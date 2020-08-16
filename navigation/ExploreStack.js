import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ExploreScreen from '../pages/ExploreScreen.js';
import BuyScreen from '../pages/BuyScreen.js';
import DonateScreen from '../pages/DonateScreen.js';
import BrandsTemplate from '../pages/BrandsTemplate.js';

//Navigating the Explore

const Stack = createStackNavigator();

function ExploreStack ( ) {
    return (
        <Stack.Navigator intialRouteName = 'ExploreScreen' screenOptions={{headerShown: false}}>
            <Stack.Screen name='ExploreScreen' component={ExploreScreen}  />
            <Stack.Screen name='BuyScreen' component={BuyScreen} />
            <Stack.Screen name='DonateScreen' component={DonateScreen} />
            <Stack.Screen name='BrandsTemplate' component={BrandsTemplate}  />
        </Stack.Navigator>
    );
}
export default ExploreStack;
