import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AuthContext } from '../navigation/AuthProvider';


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const onChangeEmail = (textValue) => setEmail(textValue);
  const [password, setPassword] = useState('');
  const onChangePassword = (textValue) => setPassword(textValue);
  const { register, login } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB' }}>
       <Text style={{ fontFamily: 'Roboto', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', paddingTop: 51, color: '#4E4E42'}}>
        re fashion</Text>
        <Text style={{ fontFamily: 'Roboto-Light', letterSpacing: 2, fontSize: 18, color: '#000'}}>
        building your sustainble closet.</Text>
        <Text style={{ fontFamily: 'Roboto-Light', letterSpacing: 4, fontSize: 30, paddingTop: 90, color: '#000'}}>
        sign in</Text>

        <TextInput
            placeholder = "email"
            style= {styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText = {onChangeEmail}
          />

        <TextInput
          placeholder = "password"
          style= {styles.input}
          secureTextEntry={true}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText = {onChangePassword}
        />

        <View style={styles.buttonRow} >
        <TouchableOpacity onPress={() => register(email, password)} style={styles.button}>
            <Text style={{fontFamily: 'Roboto-Light', color: '#000', fontSize: 18, textAlignVertical: 'center'}}>
                Create user</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => login(email, password)} style={styles.button}>
            <Text style={{fontFamily: 'Roboto-Light', color: '#000', fontSize: 18, textAlignVertical: 'center'}}>
                Log in   </Text>
            <AntDesign name="arrowright" color='black' size={26} />
        </TouchableOpacity>
        </View>

        <Image source = {require('../images/logo.png')} style={{width: 150, height: 150, marginTop: 10, marginBottom:50}}></Image>

    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        width: 315,
        height: 50,
        backgroundColor: '#CDCDC6',
        borderRadius: 10,
        padding: 15,
        marginTop: 25,
        fontSize: 18,
        letterSpacing: 2,
        fontFamily: 'Roboto'
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
        backgroundColor: '#CDCDC6',
        alignItems: 'center',
        justifyContent:'center'
      }
});

export default LoginScreen;
