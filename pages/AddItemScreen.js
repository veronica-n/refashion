import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput,
        Dimensions, FlatList, TouchableOpacity,
        Alert, ScrollView } from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const window = Dimensions.get("window");
const height = window.height;
const width = window.width;

function AddItemScreen({ navigation }) {
  var usr = firebase.auth().currentUser;
  const [title, setTitle] = useState('');
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [active, setActive] = useState(false);
  const onChangeTitle = (textValue) => setTitle(textValue);

  useEffect(() => {
    const subscriber = firestore()
      .collection('brands')
      .orderBy('name') // initially order by date
      .onSnapshot(querySnapshot => {
        const brands = [];

        querySnapshot.forEach(documentSnapshot => {
          brands.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        brands.filter(item => item.name != "Second Hand");
        brands.filter(item => item.name != "Thrift Store");
        brands.unshift({environment: 9, fash_trans: 0, grade: "A+",
                          human: 5, name: "Thrift Store", score: 15, trans_point: 8},
                        {environment: 10, fash_trans: 0, grade: "A+",
                          human: 5, name: "Second Hand", score: 16, trans_point: 8});
        setBrands(brands);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  const renderBrand = (item) => {
    return (
      <TouchableOpacity style={styles.brandItem} onPress={() => setBrand(item.name)}>
        <Text style={styles.brandText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  async function addNewItem() {
    const itemID = uuidv4();
    if (title == "")
      Alert.alert("Please add a title to your item");
    else if (category == "")
      Alert.alert("Please select a category")
    else {
      try {
        await firestore()
          .collection('users')
          .doc(usr.uid)
          .collection('closet')
          .doc(itemID)
          .set({
            category: category,
            title: title,
            brand: brand,
            id: itemID
          })
          .then(async () => {
            const db_brand = await firestore().collection('brands').doc(brand).get();
            console.log(db_brand);
            const user = await firestore().collection('users').doc(usr.uid).get();
            console.log(user);
            console.log(user.data());
            if (brand == "Second Hand")
              var newNum = +24 + +user.data().num;
            else if (brand == "Thrift Store")
              var newNum = +23 + +user.data().num;
            else
              var newNum = +db_brand.data().score + +db_brand.data().trans_point + +user.data().num;
            var newDen = +24 + +user.data().den;
            var newScore = +(+newNum / +newDen) * +100;
            console.log(newNum);
            console.log(newDen);
            await firestore()
              .collection('users')
              .doc(usr.uid)
              .update({
              num: +newNum,
              den: +newDen,
              score: +newScore
            })
          })
          .then(() => {
            console.log('Added entry!');
            navigation.goBack();
          });
      } catch (e) {
        Alert.alert("Add Unsuccessful");
        console.log(e);
      }
    }
  }

  function unSelect() {
    setActive(false);
    setCategory('');
  }

  function newSelect(category) {
    setActive(true);
    setCategory(category);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB' }}>
      <View style={{height: 60}} />
      <TextInput
        placeholder = "item name..."
        style= {styles.titleInput}
        autoCorrect={false}
        onChangeText = {onChangeTitle}
      />
      <View style={{marginTop: 10, height: width - 130, width: width - 80, backgroundColor: '#CB997E'}} />

      <Text style={{fontFamily: 'Roboto', fontSize: 23, marginTop: 12, color: '#4E4E42'}}>Choose a Category</Text>
      <View style={{height: 1, width: width - 80, backgroundColor: '#000', marginTop: 2}}/>

      <View style={{flexDirection: 'row', marginTop: 5}}>
        <TouchableOpacity style={category == "Shirts" ? styles.categoryTopActive : styles.categoryBtnTop}
                          onPress={() => category == "Shirts" ? unSelect() : newSelect("Shirts")}>
          <Text style={styles.categoryText}>Shirts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={category == "Bottoms" ? styles.categoryTopActive : styles.categoryBtnTop}
                          onPress={() => category == "Bottoms" ? unSelect() : newSelect("Bottoms")}>
          <Text style={styles.categoryText}>Bottoms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={category == "Accessories" ? styles.categoryTopActive : styles.categoryBtnTop}
                          onPress={() => category == "Accessories" ? unSelect() : newSelect("Accessories")}>
          <Text style={styles.categoryText}>Accessories</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <TouchableOpacity style={category == "Skirts & Dresses" ? styles.categoryBottomActive : styles.categoryBtnBottom}
                          onPress={() => category == "Skirts & Dresses" ? unSelect() : newSelect("Skirts & Dresses")}>
          <Text style={styles.categoryText}>Skirts & Dresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={category == "Sweaters & Jackets" ? styles.categoryBottomActive : styles.categoryBtnBottom}
                          onPress={() => category == "Sweaters & Jackets" ? unSelect() : newSelect("Sweaters & Jackets")}>
          <Text style={styles.categoryText}>Sweaters & Jackets</Text>
        </TouchableOpacity>
      </View>

      <View style= {styles.fieldInput}>
        <Text style={{fontFamily: 'Roboto', fontSize: 18}}>Selected Brand: </Text>
        <Text style={{fontFamily: 'Roboto-Light', fontSize: 18, letterSpacing: 2}}>{brand}</Text>
      </View>

      <Text style={{marginTop: 10, fontFamily: 'Roboto-Light', fontSize: 15}}>Available Brands</Text>
      <View style={{width: width - 80, height: 1, backgroundColor: '#000', marginTop: 2}} />
      <FlatList
          data={brands}
          numColumns={2}
          keyExtractor={(item) => item.name }
          renderItem={({ item }) => (
            renderBrand(item)
          )}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={() => addNewItem()}>
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleInput: {
    width: width - 80,
    height: 35,
    backgroundColor: '#DDBEA9',
    opacity: 0.8,
    fontFamily: 'Roboto-Light',
    fontSize: 20,
    paddingLeft: 10,
    textAlign: 'left',
    borderRadius: 10
  },
  fieldInput: {
    flexDirection: 'row',
    width: width - 80,
    height: 35,
    borderColor: '#B7B7A4',
    borderWidth: 1,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  brandItem: {
    height: 35,
    width: 155,
    backgroundColor: '#DADAC6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 10
  },
  brandText: {
    fontFamily: 'Roboto-Light',
    fontSize: 17,
    color: '#000',
    textAlign: 'center'
  },
  submitBtn: {
    marginTop: 10,
    marginBottom: 10,
    height: 35,
    width: 120,
    borderRadius: 15,
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    fontFamily: 'Roboto-Light',
    fontSize: 15,
    textAlign: 'center'
  },
  categoryBtnTop: {
    height: 40,
    width: 110,
    borderRadius: 10,
    backgroundColor: '#A5A58D',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2.5,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1.84,

    elevation: 2,
  },
  categoryTopActive: {
    height: 40,
    width: 110,
    borderRadius: 10,
    backgroundColor: '#CDCDC6',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2.5,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1.84,

    elevation: 2,
  },
  categoryBtnBottom: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#A5A58D',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1.84,

    elevation: 2,
    marginHorizontal: 2.5
  },
  categoryBottomActive: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#CDCDC6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1.84,

    elevation: 2,
    marginHorizontal: 2.5
  },
  categoryText: {
    fontFamily: 'Roboto-Light',
    color: '#fff',
    fontSize: 15
  }
});

export default AddItemScreen;
