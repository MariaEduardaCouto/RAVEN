import React, { useState, useEffect } from "react";
import {View, StyleSheet, Text, ScrollView, KeyboardAvoidingView, TextInput, Image, ImageBackground, TouchableOpacity, Button, Dimensions, Animated, FlatList} from 'react-native';
import ProfileIcon from '../assets/img/profileIcon.svg'
import LocationIcon from '../assets/img/locationIcon.svg'
import ProfileScreen from './ProfileScreen.js'
// import Monument from '../assets/img/Monument.svg'
// import Museum from '../assets/img/Museum.svg'
// import Nature from '../assets/img/Nature.svg'
import Nature from '../assets/img/Nature.svg';
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
// import { FlatList } from "react-native-gesture-handler";
const {width, height} = Dimensions.get('window')
const ITEM_SIZE = width * 0.75
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) /2
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


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

export default function MyStack() {
    return (
      <Stack.Navigator screenOptions = {{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomepageScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    );
}
const HomepageScreen = ({navigation, route, goBack}) => {
    const [attractions, setAttractions] = useState()

    useEffect(() => {
            let attractions = [
                {
                    "name":"Torre dos Clérigos",
                    "address":"Porto, Portugal",
                    "image":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/ae/18/17/torre-de-los-clerigos.jpg?w=1100&h=-1&s=1&cx=1250&cy=821&chk=v1_63aacc650342946a8f49"
                },
                {
                    "name":"Dom Luís I Bridge",
                    "address":"Porto, Portugal",
                    "image":"https://lp-cms-production.imgix.net/2019-06/16339ba77bf3814311c99bd4f8061aa9-ponte-de-dom-luis-i.jpg"
                },
                {
                    "name":"Livraria Lello",
                    "address":"Porto, Portugal",
                    "image":"https://i1.wp.com/mundodosviajantes.com/wp-content/uploads/2019/01/Lello-10.jpg?resize=572%2C763"
                }
            ]
            setAttractions([{key: 'left-spacer'}, ...attractions, {key: 'right-spacer'}])
        

    }, [])

    function changePage(page) {
        navigation.navigate(page)
    }

    const scrollX = React.useRef(new Animated.Value(0)).current
    


    const styles = StyleSheet.create({
        text: {
            fontSize: 25,
            color: "#161616"
        }
    })

    const preferencesArray = [
        {
            title: 'Nature',
            image: '../assets/img/Nature.svg'
        },
        {
            title: 'Museums',
            image: '../assets/img/Museum.svg'
        },
        {
            title: 'Monuments',
            image: '../assets/img/Monument.svg'
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
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
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
                style={{flexDirection:'row', width:'100%', marginVertical: 30}}
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
                            {/* <SvgUri width="100" height="100"  /> */}
                            {/* <Nature style={{width:18,height:18}}/> */}
                            <Nature style={{width:18,height:18}}/>
                            {/* <SvgUri source={require('../assets/img/Nature.svg')} width="30" height="30"/> */}
                            <Text numberOfLines={1} style={styles.txtCenter}>{preference.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Animated.FlatList
                snapToInterval={ITEM_SIZE}
                decelerationRate={0}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={attractions}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{
                    alignItems: 'center'
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: {contentOffset: {x:scrollX}}}],
                    {useNativeDriver: true}
                )}
                scrollEventThrottle={16}
                renderItem={({item, index}) => {
                    if (!item.image) {
                        return <View style={{width: SPACER_ITEM_SIZE}}/>
                    }
                    const inputRange = [
                        (index - 2) * ITEM_SIZE,
                        (index - 1) * ITEM_SIZE,
                        index * ITEM_SIZE
                    ]
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [0,-40,0]
                    })
                    return (
                        <TouchableOpacity activeOpacity={1}>
                        <View style={{width: ITEM_SIZE, marginTop: 50}}>
                            <Animated.View style={{marginHorizontal: 25,height:400, alignItems:'center', borderRadius:35, overflow:'hidden', transform: [{translateY}]}}>
                            
                                <ImageBackground source={{uri:item.image}} resizeMode="cover" style={{ height: '100%', width: '100%',justifyContent:'flex-end' }}>
                                    <View style={{backgroundColor:'rgba(255,255,255,0.9)', width:'120%',height:'17%', paddingLeft:19, paddingTop:10}}>
                                        <Text style={{fontSize:21,}}>{item.name}</Text>
                                        <View style={{flexDirection:'row',align:'center'}}>
                                            <LocationIcon style={{width:18,height:18}}/>
                                            <Text style={{fontSize:15, marginLeft:7, }}>{item.address}</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            
                            </Animated.View>
                        </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
        
    )
}