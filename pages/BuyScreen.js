import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, FlatList  } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Hyperlink from 'react-native-hyperlink'

//array for the brands, score and brand pages
function BuyScreen({navigation}) {
    const [brands, setBrands] = React.useState([
        {name: 'Second Hand', id: 1, score: 'A+', fta: 'N/A', image: require('../images/brands/secondhand.png'), human: 5, environment: 5},
        {name: 'Thrift Store', id: 2, score: 'A+', fta: 'N/A', image: require('../images/brands/thrift.png'), human: 5, environment: 4.5},
        {name: 'Boyish', id: 3, score: 'A+', fta: 'N/A', image: require('../images/brands/boy.png'), human: 4, environment: 5},
        {name: 'Girlfriend Collective', id: 4, score: 'A+', fta: 'N/A', image: require('../images/brands/girl.png'), human: 5, environment: 4},
        {name: 'Reformation', id: 5, score: '  A ', fta: 'N/A',image: require('../images/brands/reformation.png'), human: 4, environment: 3.5},
        {name: 'H&M', id: 6, score: ' A-', fta: '73%', image: require('../images/brands/hm.png'), human: 3, environment: 3},
        {name: 'Uniqlo', id: 7, score: 'B+', fta: '40%', image: require('../images/brands/uniqlo.png'), human: 2, environment: 3},
        {name: 'Nike', id: 8, score: 'B+', fta: '55%', image: require('../images/brands/nike.png'), human: 3, environment: 2.5},
        {name: "Levi's", id: 9, score: 'B+', fta: '48%', image: require('../images/brands/levi.png'), human: 2, environment: 3},
        {name: 'Gap', id: 10, score: ' B ', fta: '50%',image: require('../images/brands/gap.png'), human: 2, environment: 2.5},
        {name: 'TopShop', id: 11, score: '  B ', fta: '38%', image: require('../images/brands/topshop.png'), human: 2, environment: 2.5},
        {name: 'Zara', id: 12, score: 'B- ', fta: '43%', image: require('../images/brands/zara.png'), human: 2, environment: 2},
        {name: 'Lululemon', id: 13, score: 'B- ', fta: '44%', image: require('../images/brands/lulu.png'), human: 2, environment: 2},
        {name: 'Walmart', id: 14, score: 'B- ', fta: '28%', image: require('../images/brands/walmart.png'), human: 2, environment: 2},
        {name: 'American Eagle', id: 15, score: 'C+', fta: '17%', image: require('../images/brands/AE.png'), human: 2, environment: 2},
        {name: 'Hollister', id: 16, score: 'C+', fta: '25%', image: require('../images/brands/hollister.png'), human: 2, environment: 2},
        {name: 'Urban Outfitters', id: 17, score: 'C+', fta: '20%', image: require('../images/brands/UO.png'), human: 2, environment: 2},
        {name: 'Aritzia', id: 18, score: ' C ', fta: '16%', image: require('../images/brands/aritzia.png'), human: 2, environment: 1.5},
        {name: 'Forever 21', id: 19, score: ' C ', fta: ' 7%', image: require('../images/brands/forever.png'), human: 1, environment: 2},
        {name: 'Brandy Melville', id: 20, score: '  C ', fta: 'N/A',image: require('../images/brands/brandy.png'), human: 1, environment: 1},
        {name: 'Shein', id: 21, score: ' C ', fta: 'N/A', image: require('../images/brands/shein.png'), human: 1, environment: 0.5}
      ]);

  return (
    <View style={{ flex: 1, backgroundColor: '#F0EFEB'}}>
        <View style={{height: 20}} />
        <Image source = {require('../images/logo.png')} style={{width: 50, height: 50, marginLeft: 350, marginTop: 10}}></Image>

        <Text style={{ fontFamily: 'Roboto', textAlign: 'center', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', marginTop: -10, color: '#4E4E42'}}>
            brands</Text>

        <View style ={{flexDirection:'row'}} >
            <TextInput
                style= {styles.search}
                placeholder = 'search...'
                //onChangeText =
            ></TextInput>
            <TouchableOpacity style={{justifyContent:'center', marginLeft: -40, marginTop: 5}} >
                <AntDesign name="arrowright" color='#CB997E' size={30} />
            </TouchableOpacity>
        </View>

        <Text style={{ fontFamily: 'Roboto-Light', fontSize: 25, paddingTop: 10, color: '#4E4E42', marginLeft: 40}}>
            FEATURED</Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 360,marginLeft: 40 }} />

        <ScrollView style ={{marginLeft:40, height: 900}}>
            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/arc.png')} style = {{marginRight: 10, marginTop: 10}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://www.arcapparel.ca/' ? 'Arc Apparel' : url }  >
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold', textDecorationLine: "underline", paddingTop: 10 } }>
                    https://www.arcapparel.ca/</Text>
                </Hyperlink>
                <View style={{paddingTop: 15, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/CL.png')} style = {{marginRight: 10, marginTop: 15}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://www.charlieandlee.com/' ? 'Charlie & Lee' : url } >
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold', textDecorationLine: "underline", paddingTop: 25} }>
                    https://www.charlieandlee.com/</Text>
                </Hyperlink>
                <View style={{paddingTop: 30, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/boyish.png')} style = {{marginRight: 10, marginTop: 20}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://www.boyish.com/' ? 'Boyish' : url } >
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold',textDecorationLine: "underline", paddingTop: 20 } }>
                    https://www.boyish.com/</Text>
                </Hyperlink>
                <View style={{paddingTop: 25, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Image source = {require('../images/gf.png')} style = {{marginRight: 10, marginTop: 15}} ></Image>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://www.girlfriend.com/' ? 'Girlfriend Collective' : url }>
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold',textDecorationLine: "underline", paddingTop: 20 } }>
                    https://www.girlfriend.com/</Text>
                </Hyperlink>
                <View style={{paddingTop: 25, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>


            <View style ={{flexDirection:'row'}} >
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', paddingTop: 10, color: '#4E4E42'}}>
                    local thrift stores: </Text>
                <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20, fontStyle: 'italic', paddingTop: 10, color: '#4E4E42'}}>
                    hometown faves</Text>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'https://www.valuevillage.com/' ? 'Value Village' : url }>
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold',textDecorationLine: "underline", paddingTop: 10 } }>
                    https://www.valuevillage.com/</Text>
                </Hyperlink>
                <View style={{paddingTop: 15, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'http://wildlifethriftstore.com/' ? 'Wildlife Thrift Store' : url }>
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold',textDecorationLine: "underline", paddingTop: 10 } }>
                    http://wildlifethriftstore.com/</Text>
                </Hyperlink>
                <View style={{paddingTop: 15, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>

            <View style ={{flexDirection:'row'}}>
                <Hyperlink
                    linkDefault
                    linkStyle={ { color: '#BD9680', fontSize: 20 } }
                    linkText={ url => url === 'http://www.stillfabulousthrift.com/' ? 'Still Fabulous' : url }>
                    <Text style={ { fontFamily: 'Roboto-Light', fontSize: 20, fontWeight:'bold',textDecorationLine: "underline", paddingTop: 10} }>
                    http://www.stillfabulousthrift.com/</Text>
                </Hyperlink>
                <View style={{paddingTop: 15, marginLeft: 5}}>
                    <AntDesign name="link" color='#BD9680' size={20} />
                </View>
            </View>
        </ScrollView>

        <View style ={{flexDirection:'row'}} >
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 25, paddingTop: 5, color: '#4E4E42', marginLeft: 40}}>
                BRANDS BY: </Text>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 25, fontWeight: 'bold', paddingTop: 5, color: '#4E4E42'}}>
                SCORE</Text>
        </View>

        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 360,marginLeft: 40 }} />

        <ScrollView >
            <View style = {{marginLeft: 40, width: 350, marginTop: 10}}>
                <FlatList
                numColumns = {3}
                keyExtractor = {(item) => item.id}
                data ={brands}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('BrandsTemplate', {brandName: item.name, brandScore: item.score, brandFTA: item.fta, hScore: item.human, eScore: item.environment})} style={{flexDirection: 'row', alignContent: 'center', padding:15 }}>
                        <Image source = {item.image} ></Image>
                        <Text style={{ fontFamily: 'Roboto-Light', fontSize: 25, backgroundColor: '#DADAC6', color: '#000', marginLeft: -30, marginRight: 20, marginTop: -5, marginBottom: 45, borderRadius: 10}}>
                        {item.score} </Text>
                    </TouchableOpacity>
                    )}/>
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
    marginLeft: 40
}
});
export default BuyScreen;
