/* REFASHION */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import NavWrapper from './navigation/NavWrapper.js';

//import screens
import HomeScreen from './pages/HomeScreen.js';
import ExploreScreen from './pages/ExploreScreen.js';
import ClosetStack from './navigation/ClosetStack.js';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    /*<NavigationContainer>
       <Tab.Navigator
          initialRouteName = 'Home'
          activeColor="#000"
          inactiveColor = "#fff"
          barStyle={{ backgroundColor: '#B7B7A4', height: 77, paddingTop: 10}}
          >
        <Tab.Screen name='Explore' component={ExploreScreen}
                    options = {{
                      tabBarLabel: <Text style={{ fontSize: 15}}> Explore </Text>,
                      tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="magnify" color={color} size={26} />
                       ),
                     }}
                    />
        <Tab.Screen name='Home' component={HomeScreen}
                    options = {{
                      tabBarLabel: <Text style={{ fontSize: 15}}> Home </Text>,
                      tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                       ),
                     }}
                    />
        <Tab.Screen name='Closet' component={ClosetStack}
                    options = {{
                      tabBarLabel: <Text style={{ fontSize: 15}}> Closet </Text>,
                      tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="hanger" color={color} size={26} />
                       ),
                     }}
                    />
      </Tab.Navigator>
    </NavigationContainer>*/
    <NavWrapper />
  );
}
