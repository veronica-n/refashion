import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function ScoreElement() {
  var usr = firebase.auth().currentUser;
  const [userScore, getUserScore] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(usr.uid)
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot.exists) {
          const score = [];
          score.push(Math.trunc(documentSnapshot.data().score));
          getUserScore(score);
          console.log('User data: ', documentSnapshot.data());
        }
      });
    return () => subscriber;
  }, []);
  //var top = calc.data().num;
  //var bottom = calc.data().den;
  //const score = (top / bottom) * 100;
  return (
    <FlatList
        data={userScore}
        extraData={userScore}
        keyExtractor={(item) => item.name }
        renderItem = {({ item }) => (
          <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 50, paddingTop: 10, color: '#000'}}>
          {item}</Text>
        )}
    />
  );
}

export default ScoreElement;
