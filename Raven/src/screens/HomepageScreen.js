import React from "react";
import {View, StyleSheet, Text, ScrollView, KeyboardAvoidingView, TextInput, Image, ImageBackground, TouchableOpacity, Button} from 'react-native';
import ProfileIcon from '../assets/img/profileIcon.svg'
import LocationIcon from '../assets/img/locationIcon.svg'
// import Monument from '../assets/img/Monument.svg'
// import Museum from '../assets/img/Museum.svg'
// import Nature from '../assets/img/Nature.svg'
const Nature = require('../assets/img/Nature.svg');
const Museums = require('../assets/img/Museum.svg');
const Monuments = require('../assets/img/Monument.svg');
// import MovieTheaters from '../assets/img/MovieTheaters.svg'
// import Restaurant from '../assets/img/Restaurant.svg'
// import Sunset from '../assets/img/Sunset.svg'
// import Tourism from '../assets/img/Tourism.svg'
// import Hiking from '../assets/img/Hiking.svg'
// import Beach from '../assets/img/Beach.svg'
// import Shopping from '../assets/img/Shopping.svg'
import { SvgUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconInput = ({ iconName, iconSize, iconColor, inputProps }) => {
    return (
      <View style={styles.container}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
        <TextInput {...inputProps} style={styles.input} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            backgroundColor: 'white',
            width: '85%',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            paddingLeft: 30
        },
        input: {
            paddingLeft: 20,
            width: 220
        }
});

const HomepageScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 25,
            color: "#161616"
        }
    })

    const preferencesArray = [
        {
            title: 'Nature',
            image: <Nature/>
        },
        {
            title: 'Museums',
            image: <Museums/>
        },
        {
            title: 'Monuments',
            image: <Monuments/>
        },
        // {
        //     title: 'Movie theaters',
        //     image: '../assets/img/MovieTheaters.svg'
        // },
        // {
        //     title: 'Restaurants',
        //     image: '../assets/img/Restaurant.svg'
        // },
        // {
        //     title: 'Shopping',
        //     image: '../assets/img/Shopping.svg'
        // },
        // {
        //     title: 'Hiking',
        //     image: '../assets/img/Hiking.svg'
        // },
        // {
        //     title: 'Sunset',
        //     image: '../assets/img/Sunset.svg'
        // },
        // {
        //     title: 'Beach',
        //     image: '../assets/img/Beach.svg'
        // },
        // {
        //     title: 'Tourism',
        //     image: '../assets/img/Tourism.svg'
        // }

        // 'Shoppings','Libraries/Bookshops','Hiking','Beach','Sunset'
    ];

    return(

        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 40, alignItems:'center'}}>
                <Text numberOfLines={2} lineBreakMode='wordWrap' style={styles.text}>
                    Explore the world{"\n"}
                    like a RAVEN
                </Text>
                <TouchableOpacity >
                    <ProfileIcon style={{width:45,height:45}}/>
                </TouchableOpacity>
            </View>

            
            <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection:'row'}}>
                <IconInput
                iconName="search"
                iconSize={30}
                iconColor="grey"
                inputProps={{ placeholder: 'Search', fontSize:18, borderColor: 'red'}}
                />
                {/* <Icon
                    name="search"
                    size={30}
                    color="grey"
                    style={{
                        marginTop: 35,
                        marginLef: 20,
                    }}
                />
                <TextInput
                    placeholder="Search"
                    caretHidden={true}
                    style={{
                        marginTop: 35,
                        backgroundColor: 'white',
                        width: '85%',
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: 'gray',
                        padding: 10,
                        paddingLeft: 40,
                        fontSize: 18
                    }}
                /> */}

            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection:'row', width:'100%', marginVertical: 40}}
                >
                    {preferencesArray.map((preference) => (
                    <TouchableOpacity
                    activeOpacity={1}
                    style={{
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 20,
                    backgroundColor: '#fff',
                    textAlign: 'center',
                    borderColor: '#ccc',
                    paddingHorizontal: 20,
                    paddingVertical:13,
                    display: 'flex',
                }}
                    >
                        <View style={{flexDirection:'row', flexWrap:'nowrap'}}>
                            {/* <View>{preference.image}</View> */}
                            {/* <Image source={{uri:'../src/assets/img/Beach.svg'}} style={{width:20,height:'90%', alignSelf:'center', marginRight:10}}/> */}
                            <SvgUri width="100" height="100" uri={require(`../assets/img/Nature.svg`)} />
                            {/* <SvgUri source={require('../assets/img/Nature.svg')} width="30" height="30"/> */}
                            <Text numberOfLines={1} style={styles.txtCenter}>{preference.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <ScrollView>
                <View style={{flexDirection:'column', width:300, height:400, alignSelf: 'center', alignItems:'center', borderRadius:30 , overflow:'hidden'}}>
                    <ImageBackground source={{uri:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/ae/18/17/torre-de-los-clerigos.jpg?w=1100&h=-1&s=1&cx=1250&cy=821&chk=v1_63aacc650342946a8f49'}} resizeMode="cover" style={{ height: '100%', width: '100%',justifyContent:'flex-end' }}>
                        <View style={{backgroundColor:'rgba(255,255,255,0.9)', width:'100%',height:'17%', paddingLeft:19, paddingTop:10}}>
                            <Text style={{fontSize:21,}}>Torre dos Clérigos</Text>
                            <View style={{flexDirection:'row',align:'center'}}>
                                <LocationIcon style={{width:18,height:18}}/>
                                <Text style={{fontSize:15, marginLeft:7, }}>Porto, Portugal</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    
                </View>
            </ScrollView>
        </View>
        
    )
}

export default HomepageScreen