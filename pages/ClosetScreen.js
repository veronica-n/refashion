import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ClosetScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}> 
      <Text style={{ fontFamily: 'Roboto', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', paddingTop: 51, color: '#4E4E42'}}>
        closet</Text >
    <View style={styles.buttonRow} >
      <TouchableOpacity onPress={() => navigation.navigate('Shirts')} style={styles.button}>
          <Image source = {require('../images/Tshirt.png')} style={{marginTop: -20}}></Image>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 24, textAlignVertical: 'center', marginTop: -50}}>
            shirts</Text>
      </TouchableOpacity>
      <TouchableOpacity /*onPress={() => displayMessage(message)}*/ style={styles.button}>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 24, textAlignVertical: 'center', paddingLeft: 20}}>
            bottoms</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.buttonRow} >
      <TouchableOpacity /*onPress={() => displayMessage(message)}*/ style={styles.button}>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 24, textAlignVertical: 'center', textAlign: 'center'}}>
            skirts          &      dresses</Text>
      </TouchableOpacity>
      <TouchableOpacity /*onPress={() => displayMessage(message)}*/ style={styles.button}>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 24, textAlignVertical: 'center', textAlign: 'center'}}>
            sweaters    &       jackets</Text>
      </TouchableOpacity>
    </View>
    
    <View style={styles.buttonRow} >
      <TouchableOpacity /*onPress={() => displayMessage(message)}*/ style={styles.longbutton}>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 24, paddingTop: 30, textAlign: 'center'}}>
            accesories</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.buttonRow} >
      <TouchableOpacity /*onPress={() => displayMessage(message)}*/ style={styles.logout}>
          <Text style={{fontFamily: 'Roboto-Light', color: '#000', fontSize: 24, paddingTop: 12, textAlign: 'center'}}>
            LOGOUT</Text>
      </TouchableOpacity>
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
  },
  button: { 
    margin: 30,
    height: 100,
    width: 126,
    borderRadius: 20,
    backgroundColor: '#DDBEA9',
    alignItems: 'center',
    justifyContent:'center'
  } ,
  longbutton: {
    margin: 30,
    height: 100,
    width: 137,
    borderRadius: 20,
    backgroundColor: '#DDBEA9',
    marginTop: 20
  },
  logout: {
    margin: 30,
    height: 61,
    width: 137,
    borderRadius: 20,
    backgroundColor: '#DADAC6',
    marginTop: 20
  }
});

export default ClosetScreen;