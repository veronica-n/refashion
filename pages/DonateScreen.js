import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';;
import AntDesign from 'react-native-vector-icons/AntDesign';

function DonateScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F0EFEB'}}>
        <Text style={{ fontFamily: 'Roboto', textAlign: 'center', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', paddingTop: 51, color: '#4E4E42'}}>
            donate/sell</Text>
    
        <View style ={{flexDirection:'row'}} > 
            <TextInput
                style= {styles.search}
                placeholder = 'search...'
                //onChangeText =  
            ></TextInput>
            <TouchableOpacity style={{justifyContent:'center', marginLeft: -40, marginTop: 9}} >
                <AntDesign name="arrowright" color='#CB997E' size={30} />
            </TouchableOpacity> 
        </View>
        
        <Text style={{ fontFamily: 'Roboto-Light', fontSize: 25, paddingTop: 30, color: '#4E4E42', marginLeft: 40}}>
            FEATURED</Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 360,marginLeft: 40 }} />

        <View style ={{flexDirection:'row'}} >   
            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', paddingTop: 30, color: '#4E4E42', marginLeft: 40}}>
                local selects: </Text>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20, fontStyle: 'italic', paddingTop: 30, color: '#4E4E42'}}>
                hometown faves</Text>
        </View>

        <View style ={{flexDirection:'row'}} >   
            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', paddingTop: 30, color: '#4E4E42', marginLeft: 40}}>
                the online edit: </Text>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20, fontStyle: 'italic', paddingTop: 30, color: '#4E4E42'}}>
                anywhere, any time</Text>
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: '#DFC8BA',
        borderRadius: 15,
        borderRightWidth: 5,
        borderLeftWidth: 5,
        borderBottomWidth:9,
        borderTopWidth:9,
        borderColor: '#DFC8BA',
        width: 360,
        height: 35,
        padding: 15,
        marginTop:10,
        fontFamily: 'Roboto',
        fontSize: 18,
        letterSpacing: 4,
        marginLeft: 40
    }
});
export default DonateScreen;