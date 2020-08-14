import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';


function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB' }}>
       <Text style={{ fontFamily: 'Roboto', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', paddingTop: 51, color: '#4E4E42'}}>
        re fashion</Text>
        <Text style={{ fontFamily: 'Roboto-Light', letterSpacing: 2, fontSize: 18, color: '#000'}}>
        building your sustainble closet.</Text>
        <Text style={{ fontFamily: 'Roboto-Light', letterSpacing: 4, fontSize: 30, paddingTop: 90, color: '#000'}}>
        sign in</Text>
        
        <TextInput
          style= {styles.input}
          placeholder = 'email'
          //onChangeText =  
         ></TextInput>
        
        <TextInput
          style= {styles.input}
          placeholder = 'password'
          //onChangeText =  
         ></TextInput>

        <View style={styles.buttonRow} >
        <TouchableOpacity onPress={() => navigation.navigate('Shirts')} style={styles.button}>
            <Text style={{fontFamily: 'Roboto-Light', color: '#000', fontSize: 18, textAlignVertical: 'center'}}>
                Create user</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Bottoms')} style={styles.button}>
            <Text style={{fontFamily: 'Roboto-Light', color: '#000', fontSize: 18, textAlignVertical: 'center'}}>
                Log in   </Text>
            <AntDesign name="arrowright" color='black' size={26} />
        </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#CDCDC6',
        borderRadius: 10,
        borderWidth: 10,
        borderColor: '#CDCDC6',
        width: 315,
        height: 35,
        padding: 15,
        marginTop:25,
        fontFamily: 'Roboto',
        fontSize: 18,
        letterSpacing: 4,
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
    },
    button: { 
        flexDirection: 'row',
        margin: 30,
        height: 35,
        width: 126,
        borderRadius: 15,
        padding:10,
        backgroundColor: '#CDCDC6',
        alignItems: 'center',
        justifyContent:'center'
      } 
});

export default LoginScreen;