import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';;
import AntDesign from 'react-native-vector-icons/AntDesign';
import Hyperlink from 'react-native-hyperlink'

const window = Dimensions.get("window");
const height = window.height;
const width = window.width;
function DonateScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F0EFEB', alignItems: 'center'}}>
        <View style={{height: 30}} />
        <Image source = {require('../images/logo.png')} style={{width: 50, height: 50, marginLeft: 350}}></Image>

        <Text style={{ fontFamily: 'Roboto', textAlign: 'center', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', marginTop: 5, color: '#4E4E42'}}>
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

        <Text style={{ fontFamily: 'Roboto-Light', fontSize: 25, paddingTop: 10, color: '#4E4E42', marginLeft: -240, marginTop: 10}}>
            FEATURED</Text>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: width - 40}} />

        <View style ={{flexDirection:'row'}} >
            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', paddingTop: 10, color: '#4E4E42', marginLeft: -100}}>
                local selects: </Text>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20, fontStyle: 'italic', paddingTop: 10, color: '#4E4E42'}}>
                hometown faves</Text>
        </View>

        <ScrollView style ={{ height: 140}}>
            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/vancouver.png')} style = {{marginRight: 10, marginTop: 10}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 18 } }
                    linkText={ url => url === 'https://vancouver.ca/home-property-development/zero-waste-centre.aspx' ? 'Vancouver Zero Waste Centre' : url }>
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 18, fontWeight:'bold', textDecorationLine: "underline", paddingTop: 15 } }>
                    https://vancouver.ca/home-property-development/zero-waste-centre.aspx</Text>
                </Hyperlink>
                <View style={{paddingTop: 20, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={17} />
                </View>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/TSA.png')} style = {{marginRight: 10, marginTop: 10}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://salvationarmy.ca/britishcolumbia/' ? 'The Salvation Army' : url }>
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold', textDecorationLine: "underline", paddingTop: 40} }>
                    https://salvationarmy.ca/britishcolumbia/</Text>
                </Hyperlink>
                <View style={{paddingTop: 45, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/BB.png')} style = {{marginRight: 10, marginTop: 10}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://www.bigbrothersvancouver.com/' ? 'Big Brothers Vancouver' : url }>
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold',textDecorationLine: "underline", paddingTop: 30 } }>
                    https://www.bigbrothersvancouver.com/</Text>
                </Hyperlink>
                <View style={{paddingTop: 35, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/turnabout.png')} style = {{marginRight: 10, marginTop: 10}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://turnabout.com/pages/sellwithus' ? 'Turnabout' : url } >
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold',textDecorationLine: "underline", paddingTop: 30 } }>
                    https://turnabout.com/pages/sellwithus</Text>
                </Hyperlink>
                <View style={{paddingTop: 35, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>
        </ScrollView>

        <View style ={{flexDirection:'row', marginTop: 20, paddingTop: 5}} >
            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic',  color: '#4E4E42', marginLeft: -60}}>
                the online edit: </Text>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20, fontStyle: 'italic', color: '#4E4E42'}}>
                anywhere, any time</Text>
        </View>

        <ScrollView style ={{marginLeft: -30, height: 100, marginBottom: 10}}>
            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/depop.png')} style = {{marginRight: 10, marginTop: 10}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://www.depop.com/' ? 'Depop' : url } >
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold', textDecorationLine: "underline", paddingTop: 40 } }>
                    https://www.depop.com/</Text>
                </Hyperlink>
                <View style={{paddingTop: 45, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/mercari.png')} style = {{marginRight: 10, marginTop: 10}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://www.mercari.com/' ? 'Mecari' : url } >
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold',textDecorationLine: "underline", paddingTop: 40 } }>
                    https://www.mercari.com/</Text>
                </Hyperlink>
                <View style={{paddingTop: 45, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/fb.png')} style = {{marginRight: 10, marginTop: 10}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://www.facebook.com/marketplace/' ? 'Facebook Marketplace' : url } >
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold', textDecorationLine: "underline", paddingTop: 40 } }>
                    https://www.facebook.com/marketplace/</Text>
                </Hyperlink>
                <View style={{paddingTop: 45, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>
        </ScrollView>

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
    }
});
export default DonateScreen;
