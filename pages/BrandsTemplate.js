
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function BrandsTemplate({navigation, route}) {
    const {brandName} = route.params;
    const {brandScore} = route.params;
    const {brandFTA} = route.params;
    const {hScore} = route.params;
    const {eScore} = route.params;
    const empty = 'star-o';
    const half = 'star-half-full';
    const full = 'star';

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB'}}>
        <View style={{height: 50}}/>
        <View style = {styles.rectangle}/>
        <Text style={{ fontFamily: 'Roboto-Light', fontSize: 40, marginTop: -45, color: '#000'}}>
            {brandName}</Text>

        <View style ={{flexDirection: 'row'}}>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20, color: '#000', paddingRight:250, marginTop: 45}}> Human Index:</Text>
            <View style ={{ flexDirection: 'row', marginLeft: -230}}>
                <FontAwesome name= {(hScore == 0.5) ? half: full} color= '#CB997E' size={30} style={styles.circle}/>
                <FontAwesome name={(hScore <= 1) ? empty : (hScore==1.5) ? half : full } color= '#CB997E' size={30} style={styles.circle}/>
                <FontAwesome name={(hScore <= 2) ? empty : (hScore==2.5) ? half : full } color= '#CB997E'size={30} style={styles.circle}/>
                <FontAwesome name={(hScore <= 3) ? empty : (hScore==3.5) ? half : full } color= '#CB997E' size={30} style={styles.circle}/>
                <FontAwesome name={(hScore <= 4) ? empty : (hScore==4.5) ? half : full } color= '#CB997E' size={30} style={styles.circle}/>
            </View>
        </View>
        <View style ={{flexDirection: 'row'}}>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20, color: '#000', marginRight: 42, marginTop: 45}}> Environment:</Text>
            <View style ={{ flexDirection: 'row', marginLeft: -15}}>
                <FontAwesome name= {(eScore == 0.5) ? half : full} color= '#CB997E' size={30} style={styles.circle}/>
                <FontAwesome name={(eScore <= 1) ? empty : (eScore==1.5) ? half : full } color= '#CB997E' size={30} style={styles.circle}/>
                <FontAwesome name={(eScore <= 2) ? empty : (eScore==2.5) ? half : full } color= '#CB997E'size={30} style={styles.circle}/>
                <FontAwesome name={(eScore <= 3) ? empty : (eScore==3.5) ? half : full } color= '#CB997E' size={30} style={styles.circle}/>
                <FontAwesome name={(eScore <= 4) ? empty : (eScore==4.5) ? half : full } color= '#CB997E' size={30} style={styles.circle}/>
            </View>
        </View>

        <View style ={{flexDirection: 'row'}}>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20, color: '#000', marginTop: 40, marginLeft:-20}}> Fashion Transparency Rating:</Text>
            <Text style={{ fontFamily: 'Roboto-Light', fontWeight: 'bold', fontSize: 20, color: '#CB997E', marginLeft: 10, marginTop: 40}}> {brandFTA}</Text>
        </View>

        <View style ={{flexDirection: 'row', marginLeft: -190}}>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20, color: '#000', marginTop: 40, marginLeft:15}}> Overall Score:</Text>
            <Text style={{ fontFamily: 'Roboto-Light', fontWeight: 'bold', fontSize: 20, color: '#CB997E', marginLeft: 10, marginTop: 40}}> {brandScore}</Text>
        </View>

        <Image source={require('../images/logo.png')} style={{width: 100, height: 100, marginTop: 60, marginBottom:40}}></Image>

        <TouchableOpacity onPress={() => navigation.navigate('BuyScreen')} style={styles.button}>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 18, color: '#000', marginRight: 10}}>
                BACK TO BRANDS</Text>
        </TouchableOpacity>

    </View>


  );
}
const styles = StyleSheet.create({
    rectangle: {
      width: 348,
      height: 12,
      borderRadius: 10,
      backgroundColor: '#DADAC6',
      marginTop:61
    },
    circle: {
      paddingRight: 10,
      marginTop: 40
    },
    image: {
      width: 348,
      height: 200,
      backgroundColor: 'lightgray',
      marginTop: 20
    },
    button: {
        flexDirection: 'row',
        height: 53,
        width: 215,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 90
    }
});

export default BrandsTemplate;
