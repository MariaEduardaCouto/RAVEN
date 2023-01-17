import React from "react";
import {View, StyleSheet, Text, ScrollView, KeyboardAvoidingView, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';
import ProfileIcon from '../assets/img/profileIcon.svg'
import LocationIcon from '../assets/img/locationIcon.svg'
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomepageScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 25,
            color: "#161616"
        }
    })
 
    const preferencesArray = ['Nature','Museums','Monuments','Movie theaters','Restaurants','Shoppings','Libraries/Bookshops','Hiking','Beach','Sunset'];
  
    return(
        
        <View>
            //Texto e botão profile
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 40, alignItems:'center'}}>
                <Text numberOfLines={2} lineBreakMode='wordWrap' style={styles.text}>
                    Explore the world{"\n"}
                    like a
                </Text>
                <TouchableOpacity >
                    <ProfileIcon style={{width:45,height:45}}/>
                </TouchableOpacity>
            </View>

            //Caixa de texto
            <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection:'row'}}>
                <Icon
                    name="search"
                    size={30}
                    color="grey"
                    style={{
                        marginTop: 35,
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
                />
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
                            <LocationIcon style={{width:20,height:'90%', alignSelf:'center', marginRight:10}}/>
                            <Text numberOfLines={1} style={styles.txtCenter}>{preference}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <ScrollView>
                <View style={{flexDirection:'column', width:300, height:400, alignSelf: 'center', alignItems:'center', borderRadius:30 , overflow:'hidden'}}>
                    <ImageBackground source={{uri:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/ae/18/17/torre-de-los-clerigos.jpg?w=1100&h=-1&s=1&cx=1250&cy=821&chk=v1_63aacc650342946a8f49'}} resizeMode="cover" style={{ height: '100%', width: '100%',justifyContent:'flex-end' }}>
                        <View style={{backgroundColor:'rgba(255,255,255,0.9)', width:'100%',height:'17%', paddingLeft:19, paddingTop:10}}>
                            <Text style={{fontSize:20,}}>Torre dos Clérigos</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <LocationIcon/>
                                <Text style={{fontSize:14, marginLeft:7, }}>Porto, Portugal</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    
                </View>
            </ScrollView>
        </View>
        
    )
}

export default HomepageScreen