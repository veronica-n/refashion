import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput,
        Dimensions, FlatList, TouchableOpacity,
        Alert, Image, ScrollView } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';

const window = Dimensions.get("window");
const height = window.height;
const width = window.width;

function EditItemScreen({ navigation, route }) {
  var usr = firebase.auth().currentUser;
  const [deleteItem, setDeleteItem] = useState('');
  const { item } = route.params;
  const { score } = route.params;

  function sendDelete() {
    Alert.alert(
      "Delete this item?",
      "Note: This action cannot be undone",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          try {
            firestore()
              .collection('users')
              .doc(usr.uid)
              .collection('closet')
              .onSnapshot(querySnapshot => {
                if (querySnapshot.exists)
                  console.log("query snapshot exists");
                querySnapshot.forEach(documentSnapshot => {
                    if (documentSnapshot.data().category == item.category &&
                        documentSnapshot.data().title == item.title) {
                      setDeleteItem(documentSnapshot.documentID);
                      console.log(documentSnapshot.documentID);
                    }
                });
              })
              .then(
                firestore()
                .collection('users')
                .doc(usr.uid)
                .collection('closet')
                .doc(deleteItem)
                .delete()
              ).then(() => {
                console.log("Deleted!");
                navigation.goBack();
              });
            } catch (e) {
              console.log(e);
              Alert.alert("Delete Unsuccessful");
            }
          }
        }
      ],
      { cancelable: true }
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB' }}>
      <AntDesign name="arrowleft" color={'#000'} size={35}
                 style={{marginTop: 50, marginLeft: -340}}
                 onPress={() => navigation.goBack()}/>
      <View style={styles.titleBar}>
        <Text style={{fontFamily: 'Roboto-Light', fontSize: 20, textAlign: 'center'}}>{item.title}</Text>
      </View>
      <View style={styles.bigBox}>
        <Image source = {item.category == "Shirts" ? require('../images/Tshirt.png') :
                         item.category == "Bottoms" ? require('../images/Bottoms.png') :
                         item.category == "Skirts & Dreses" ? require('../images/Skirts.png') :
                         item.category == "Sweaters & Jackets" ? require('../images/Sweater.png') :
                         require('../images/acessories.png')}
        />
      </View>
      <View style={styles.fieldInput}>
        <Text style={styles.boxLabel}>Category: </Text>
        <Text style={styles.boxText}>{item.category}</Text>
      </View>
      <View style={styles.fieldInput}>
        <Text style={styles.boxLabel}>Brand: </Text>
        <Text style={styles.boxText}>{item.brand}</Text>
      </View>
      <View style={{height: 120}}/>
      <EvilIcons name="trash" color={'#CB997E'} size={80}
                 onPress={() => sendDelete()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBar: {
    height: 40,
    width: width - 80,
    borderRadius: 10,
    backgroundColor: '#DDBEA9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  picBox: {
    marginTop: 10,
    height: width - 80,
    width: width - 80,
    backgroundColor: '#CB997E',
    borderRadius: 10
  },
  bigBox: {
    marginTop: 10,
    height: width - 80,
    width: width - 80,
    borderColor: '#B7B7A4',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fieldInput: {
    flexDirection: 'row',
    width: width - 80,
    height: 35,
    borderColor: '#B7B7A4',
    borderWidth: 1,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    marginTop: 25,
  },
  boxText: {
    fontFamily: 'Roboto-Light',
    fontSize: 20
  },
  boxLabel: {
    fontFamily: 'Roboto',
    fontSize: 20,
  }
});

export default EditItemScreen;
