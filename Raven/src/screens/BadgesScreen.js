import React , {useState} from "react";
import {View, StyleSheet, Text,Modal, ScrollView,Dimensions, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'

import visitCountry from '../assets/img/visitCountry.png'
import xp from '../assets/img/xp.png'
import xp10k from '../assets/img/xp10k.png'
import countries from '../assets/img/countries.png'
import attractions from '../assets/img/attractions.png'
import aroundWorld from '../assets/img/aroundWorld.png'
import allEurope from '../assets/img/allEurope.png'
import badgesPaises from '../assets/img/badgesPaises.png'

const {width, height} = Dimensions.get('window');

const BadgesScreen = ({navigation}) => {

    const [isUnlocked, setIsUnlocked] = useState(true);
    const [isLocked, setIsLocked] = useState(false);
    // const [modalActive, setModalActive] = useState (false)

   
    

    return(
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 40, alignItems:'center'}}>
                <Text numberOfLines={3} lineBreakMode='wordWrap' style={styles.text}>
                    Here’s where you can{"\n"}find your progress{"\n"} 
                    with RAVEN
                </Text>
                
            </View>

            <View style={{flexDirection:'row', flexWrap:'nowrap'}}>
                <LinearGradient 
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={isUnlocked ? ['rgba(255,255,255,0.5)','rgba(255,255,255,0.5)'] : ['#07CDF9','#5508D2'] }
                    // style={isUnlocked ? styles.button1 : styles.pressedButton}
                    style={styles.button1}
                    >
                        <Text style={{ textAlign: 'center', color: isUnlocked ? 'black' : 'white' }}  onPress={() => {
                            setIsUnlocked(!isUnlocked);
                            setIsLocked(!isLocked);
                        }}>
                            Unlocked
                        </Text>
                </LinearGradient>
                <LinearGradient 
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={isUnlocked ?   ['#07CDF9','#5508D2'] : ['rgba(255,255,255,0.5)','rgba(255,255,255,0.5)'] }
                    style={styles.button2}
                    >
                        <Text style={{ textAlign: 'center',color: isUnlocked ?  'white' : 'black' }} onPress={() => {
                            setIsUnlocked(!isUnlocked);
                            setIsLocked(!isLocked);
                        }}>
                            Locked
                        </Text>
                </LinearGradient>

                

            </View>

            <View>
            {isLocked && (
                   
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}} >
                            <Image onPress={() => setModalActive(true)} style={{height:height*0.2, width: width*0.3, resizeMode:'contain', marginLeft:50}} source={visitCountry} />
                            <Image style={{height:height*0.2, width: width*0.3, resizeMode:'contain', marginLeft:50}} source={xp}/>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <Image style={{height:height*0.2, width: width*0.3, resizeMode:'contain', marginLeft:50}} source={countries}/>
                            <Image style={{height:height*0.2, width: width*0.3, resizeMode:'contain', marginLeft:50}} source={allEurope}/>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <Image style={{height:height*0.2, width: width*0.3, resizeMode:'contain', marginLeft:50}} source={attractions}/>
                            <Image style={{height:height*0.2, width: width*0.3, resizeMode:'contain', marginLeft:50}} source={aroundWorld}/>
                        </View>
                    </View>
                    
                )}
                
            </View>
            <View>
            {isUnlocked && (
                   
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={{height:height*0.2, width: width*0.3, resizeMode:'contain', marginLeft:50}} source={badgesPaises}/>
                            <Image style={{height:height*0.2, width: width*0.3, resizeMode:'contain', marginLeft:50}} source={xp10k}/>
                        </View>

                       
                    </View>
                    
                )}
                
            </View>
            
                {/* <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalActive}
                    onRequestClose={() => setModalActive(false)}
                >
                    <View style={styles.outerView}>
                        <View style={styles.modalView}></View>
                    </View>
                </Modal> */}

                {/* <View>
                    {modalActive && (
                        
                            <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalActive}
                            onRequestClose={() => setModalActive(false)}
                        >
                            <View style={styles.outerView}>
                                <View style={styles.modalView}></View>
                            </View>
                        </Modal>
                        
                        )}
                    
                </View> */}

           
        </View>
    )
}

const styles = StyleSheet.create({
        text: {
            fontSize: 25,
            color: "#161616",
            
        },
        button1:{
            padding: 15,
            borderRadius: 18,
            width: width*0.4,
            marginTop:30,
            marginLeft:25,
            
           
        },
        button2:{
            padding: 15,
            borderRadius: 18,
            width: width*0.4,
            marginTop:30,
            marginLeft:25,
            
           
        },
        // outerView:{
        //     flex:1,
        //     justifyContent:'center',
        //     alignContent:'center',
        //     alignItems:'center',
        //     backgroundColor:'rgba(0,0,0,0.2)'
        // },
        // modalView:{
        //     backgroundColor:'white',
        //     borderRadius:30,
        //     padding:35,
        //     width:200,
        //     alignItems:'center'
        // }
    })

export default BadgesScreen