import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function ExploreScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB' }}>
      <Text style={{ fontFamily: 'Roboto', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', paddingTop: 51, color: '#4E4E42'}}>
        explore</Text>
      <View style={{height: 60}}/>
      <View style = {styles.rectangle}/>
      <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20,paddingRight: 150, color: '#4E4E42', marginTop: -27}}>
            buy sustainably</Text>
      <View style = {styles.images}/>

      <View style={{height: 50}}/>
      <View style = {styles.rectangle}/>
      <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, paddingRight: 100, color: '#4E4E42', marginTop: -27}}>
            getting rid of clothes?</Text>
      <View style = {styles.images}/>

      <View style={{height: 50}}/>
      <View style = {styles.rectangle}/>
      <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, paddingRight: 50, color: '#4E4E42', marginTop: -27}}>
        what does the score mean?</Text>

    </View>
  );
}
const styles = StyleSheet.create({
  rectangle: {
    width: 348,
    height: 12,
    borderRadius: 10,
    backgroundColor: '#DADAC6'
  },
  images: {
    width: 348,
    height: 100,
    backgroundColor: '#C4C4C4',
    marginTop: 10
  }

});

export default ExploreScreen;
