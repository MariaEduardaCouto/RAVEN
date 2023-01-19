import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, StatusBar, View, Image, Button, Text, Touchable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'


import { useState, useEffect } from 'react';
import Slide1 from '../assets/img/imgSlide1.png'
import Slide2 from '../assets/img/imgSlide2.png'
import Slide3 from '../assets/img/imgSlide3.png'
import Slide4 from '../assets/img/imgSlide4.png'
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({

    allWreapper:{
        height: height,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        

    },
    wrapper: {
        
    },
    slides: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FDFDFD',
    },
      title:{
                color:'#000000',
                fontSize:24,
                fontWeight:'bold',
                marginTop:70,
                textAlign:'center',  
                fontFamily:"Quicksand-Bold",
                marginBottom:50
            },
    
    subtitle:{
                color:'#717171',
                fontSize:20,
                marginTop:10,
                maxWidth:'70%',
                textAlign:'center',
                lineHeight:23,
                marginTop:30
                
            },
    activeDot:{ 
                backgroundColor: 'transparent',
                borderColor:'transparent', 
                width: 15, 
                height: 15, 
                borderRadius: 7, 
                marginLeft: 5, 
                marginRight: 5, 
                marginTop: 3, 
                marginBottom: 30 ,
                borderWidth:1 
            },
            dot:{ 
                backgroundColor: 'transparent',
                borderColor:'transparent', 
                width: 13, 
                height: 13, 
                borderRadius: 9, 
                marginLeft: 5, 
                marginRight: 5, 
                marginTop: 3, 
                marginBottom: 3 ,
                borderWidth:1 
            },
            button:{
                padding: 15,
                borderRadius: 18,
                width: width*0.7,
                marginTop:30
               
            }
  })

  export function OnboardingScreen({navigation}){
    const [currentPage, setCurrentPage] = useState(1)
    const [countSlide, setCountSlide] = useState(0)
   

    function handleSlideChange(swiper){
        // setCurrentPage(swiper.activeIndex + 1);
        if (countSlide > 3) {
            setCountSlide(0)
        } else {
            setCountSlide(countSlide+1)
        }
    }

    const handleButtonGetStarted = () => {
        //Ação do botão
    }


     
      return (
        <>
            <View style={{backgroundColor:'white'}}>
                <Text style={{ textAlign: 'right', color:'black', marginRight:20, fontWeight:'bold', fontSize:20, marginTop:10}} onPress={() => navigation.navigate('HomepageScreen')}>
                    Skip
                </Text>
            </View>
            <View style={styles.allWreapper}>
                <Swiper style={styles.wrapper} showsButtons={false} loop={false} index={0} autoplay={false} onMomentumScrollEnd={(e) => handleSlideChange(e)}
                    activeDot={<LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#07CDF9', '#5508D2']}
                        style={styles.activeDot}
                        ></LinearGradient>}
                    dot={<View style={{ backgroundColor:'#c9cacc',borderColor:'transparent', width: 13, height: 13, borderRadius: 7, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 30 ,borderWidth:1}} />}
                >
                
                    
                    <View style={styles.slides}>
                        <Text style={styles.title}>Find interesting places</Text>
                            
                                <Image style={{height:450, width: 450, resizeMode:'contain'}} source={Slide1}/>
                        
                            
                        <Text style={styles.subtitle}>Possibility of viewing a vast list of specific geographic points, as well as filtering them</Text>
                    </View>

                    <View style={styles.slides}>
                        <Text style={styles.title}>Save your favorite locations</Text>
                        <Image style={{height:450, width: 450, resizeMode:'contain'}} source={Slide2}/>
                        <Text style={styles.subtitle}>You can save whatever location in order to provide prior planning at a distance</Text>
                    </View>

                    <View style={styles.slides}>
                        <Text style={styles.title}>Reward system</Text>
                        <Image style={{height:420, width: 420, resizeMode:'contain'}} source={Slide3}/>
                        <Text style={styles.subtitle}>You can get rewards and higher your progress by simply discovering new places and having fun</Text>
                    </View>

                    <View style={styles.slides}>
                        <Image style={{height:200, width: 420,marginTop:200, resizeMode:'contain'}} source={Slide4}/>
                        <Text style={styles.subtitle}>That’s it. Are you ready to start?</Text>
                        <LinearGradient 
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#07CDF9', '#5508D2']}
                        style={styles.button}
                        >
                            <Text style={{ textAlign: 'center', color:'white' }} onPress={() => navigation.navigate('LoginScreen')}>
                                Get started
                            </Text>
                        </LinearGradient>
                    </View>
                </Swiper>
            </View>
        </>
      )
            
  }