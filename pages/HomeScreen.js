import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ScoreElement from './ScoreElement.js'

function HomeScreen() {
  var usr = firebase.auth().currentUser;
  const [userScore, getUserScore] = useState([]);
  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(usr.uid)
      .onSnapshot(documentSnapshot => {
          const score = [];
          score.push(Math.trunc(documentSnapshot.data().score));
          getUserScore(score);
          console.log('User data: ', documentSnapshot.data());
      });
    return () => subscriber();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB'}}>
      <Text style={{ fontFamily: 'Roboto', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', paddingTop: 51, color: '#4E4E42'}}>
        re fashion</Text>
      <View style ={{marginTop: 100}}>
        <FontAwesome name="circle-thin" color={parseInt(userScore[0]) >= 90 ? 'green' :
                                               parseInt(userScore[0]) >= 85 ? '#85B95C' :
                                               parseInt(userScore[0]) >= 80 ? '#9ED970' :
                                               parseInt(userScore[0]) >= 75 ? '#D8EA6A' :
                                               parseInt(userScore[0]) >= 70 ? '#EDC948' :
                                               parseInt(userScore[0]) >= 65 ? '#E5A322' :
                                               parseInt(userScore[0]) >= 60 ? '#E46822' :
                                               parseInt(userScore[0]) >= 55 ? '#DF2F2F' : '#9E1616'} size={350} />
      </View>
      <Text style={{ fontFamily: 'Roboto-Light', fontSize: 24, paddingTop: 200, color: '#000', marginTop: -430}}>
        your score</Text>
        <FlatList
            data={userScore}
            extraData={userScore}
            keyExtractor={(item) => item.name }
            renderItem = {({ item }) => (
              <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 50, paddingTop: 10, color: '#000'}}>
              {item}</Text>
            )}
        />
    </View>
  );
}
export default HomeScreen;
