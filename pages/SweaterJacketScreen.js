import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const window = Dimensions.get("window");
const height = window.height;
const width = window.width;

function SweaterJacketScreen({ navigation }) {
  var usr = firebase.auth().currentUser;
  const [sJacket, setSJacket] = useState([]);
  let brandMap = new Map([
        ['Second Hand', '   A+'],
        ['Thrift Store', '      A+'],
        ['Boyish', '            A+'],
        ['Girlfriend Collective', 'A+'],
        ['Reformation', '      A'],
        ['H&M', '               A-'],
        ['Uniqlo', '            B+'],
        ['Nike', '               B+'],
        ["Levi's", '              B+'],
        ['Gap', '                 B'],
        ['Topshop', '           B'],
        ['Zara', '               B-'],
        ['Lululemon', '        B-'],
        ['Walmart', '          B-'],
        ['American Eagle', 'C+'],
        ['Hollister', '          C+'],
        ['Urban Outfitters', 'C+'],
        ['Aritzia', '              C'],
        ['Forever 21', '         C'],
        ['Brandy Melville', '   C'],
        ['Shein', '              C']
  ]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(usr.uid)
      .collection('closet')
      .orderBy('category') // initially order by date
      .onSnapshot(querySnapshot => {
        const sJacket = [];

        querySnapshot.forEach(documentSnapshot => {
          if (documentSnapshot.data().category == "Sweaters & Jackets")
            sJacket.push(documentSnapshot.data());
        });
        setSJacket(sJacket);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB' }}>
      <Text style={styles.title}>SWEATERS & JACKETS</Text>
      <View style={{width: width - 60, height: 1, backgroundColor: '#000'}}/>
      <View style={{height: 10}}/>
      <FlatList
        data={sJacket}
        numColumns={2}
        keyExtractor={(item) => item.title }
        renderItem={({ item }) => (
          <View >
            <TouchableOpacity style={styles.shirtItem}
                              onPress={() => navigation.navigate('EditItem', {item: item, score: brandMap.get(item.brand)})}>
              <Image source = {require('../images/Sweater.png')} />
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
              <View style={styles.label}>
                <Text style={{fontFamily: 'Roboto-Light', color: '#fff'}}>{item.brand}</Text>
              </View>
              <Text style={{fontFamily: 'Roboto-Light', fontSize: 20, marginTop: 6, paddingHorizontal: 10, textAlign: 'right'}}>
                {brandMap.get(item.brand)}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Light',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 30,
    paddingLeft: 30,
    marginTop: 60
  },
  shirtItem: {
    height: 150,
    width: 150,
    backgroundColor: '#DDBEA9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 30,
    alignSelf: 'flex-start'
  },
  label: {
    marginTop: 5,
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A5A58D',
    alignSelf: 'flex-start',
    marginLeft: 30
  }
});

export default SweaterJacketScreen;
