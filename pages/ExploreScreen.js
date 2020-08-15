import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';


function ExploreScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB' }}>
      <Text style={{ fontFamily: 'Roboto', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', paddingTop: 51, color: '#4E4E42'}}>
        explore</Text>

      <View style={{height: 50}}/>
      <View style = {styles.rectangle}/>
      <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20,paddingRight: 150, color: '#4E4E42', marginTop: -27}}>
            buy sustainably</Text>
      <Image source = {require('../images/buy.png')} style = {styles.images} ></Image>
      <TouchableOpacity onPress={() => navigation.navigate('BuyScreen')} style={styles.button}>
        <Text style={{ fontFamily: 'Roboto-Light', fontSize: 19, color: '#FFF', marginRight: 10}}>
              more brands</Text>
        <AntDesign name="arrowright" color='white' size={26} />
      </TouchableOpacity>

      <View style={{height: 50}}/>
      <View style = {styles.rectangle}/>
      <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, paddingRight: 100, color: '#4E4E42', marginTop: -27}}>
            getting rid of clothes?</Text>
      <Image source = {require('../images/donate.png')} style = {styles.images} ></Image>
      <TouchableOpacity onPress={() => navigation.navigate('DonateScreen')} style={styles.button}>
        <Text style={{ fontFamily: 'Roboto-Light', fontSize: 19, color: '#FFF', marginRight: 10}}>
              learn more</Text>
        <AntDesign name="arrowright" color='white' size={26} />
      </TouchableOpacity>

      <View style={{height: 50}}/>
      <View style = {styles.rectangle}/>
      <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, paddingRight: 50, color: '#4E4E42', marginTop: -27}}>
        what does the score mean?</Text>
      <Text style={{ fontFamily: 'Roboto-Light', fontSize: 18, color: '#000', marginLeft: 50, marginRight: 50, padding: 10}}>
        the score indicates how sustainable the brand is.
        The score is calculated based on three categories:
        human impact, environmental impacts and fashion transparency index </Text>
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
  },
  button: {
    flexDirection: 'row',
    height: 37,
    width: 154,
    borderRadius: 15,
    backgroundColor: '#CB997E',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 175,
    marginTop: -20
  }
});

export default ExploreScreen;
