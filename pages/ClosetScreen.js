import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../navigation/AuthProvider';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function ClosetScreen({navigation}) {
  const { logout } = useContext(AuthContext);
  var usr = firebase.auth().currentUser;
  console.log(usr.uid);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB' }}>
      <View style={{height: 30}} />
      <Text style={{ fontFamily: 'Roboto', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', paddingTop: 51, color: '#4E4E42'}}>
        closet</Text >
    <View style={styles.buttonRow} >
      <TouchableOpacity onPress={() => navigation.navigate('Shirts')} style={styles.button}>
          <Image source = {require('../images/Tshirt.png')} style={{marginTop: -20}}></Image>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 24, textAlignVertical: 'center', marginTop: -50}}>
            shirts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Bottoms')} style={styles.button}>
          <Image source = {require('../images/Bottoms.png')} style={{marginTop: -20 }}></Image>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 24, textAlignVertical: 'center', marginTop: -50}}>
            bottoms</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.buttonRow} >
      <TouchableOpacity onPress={() => navigation.navigate('SkirtsDresses')} style={styles.button}>
          <Image source = {require('../images/Skirts.png')}></Image>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 24, textAlignVertical: 'center', lineHeight: 25, textAlign: 'center', marginTop: -80}}>
            skirts          &      dresses</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SweatersJackets')} style={styles.button}>
          <Image source = {require('../images/Sweater.png')} ></Image>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 24, textAlignVertical: 'center',lineHeight: 25, textAlign: 'center', marginTop: -80}}>
            sweaters    &       jackets</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.buttonRow} >
      <TouchableOpacity onPress={() => navigation.navigate('Accessories')} style={styles.button}>
          <Image source = {require('../images/acessories.png')} style={{marginTop: -40}}></Image>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 24, textAlignVertical: 'center', textAlign: 'center', marginTop: -80}}>
            accesories</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddItem')} style={styles.button}>
          <Text style={{fontFamily: 'Roboto-Light', color: '#FFF', fontSize: 70, paddingTop: 30, textAlign: 'center', marginTop: -30}}>
            +</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.buttonRow} >
      <TouchableOpacity style={styles.logout} onPress={() => logout()}>
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
    marginTop: 20,
    alignItems: 'center'
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
