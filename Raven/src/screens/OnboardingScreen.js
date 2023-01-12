import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, StatusBar, View, Image, Button, Text, Touchable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'
import Svg  from 'react-native-svg';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slide from '../assets/img/imgSlide1.svg'

const {width, height} = Dimensions.get('window');



// const slides = [
//     {
//         id:'1',
//         image: require('../assets/img/imgSlide1.svg'),
//         title: 'Find interesting places',
//         subtitle: 'Possibility of viewing a vast list of specific geographic points, as well as filtering them'
//     },
//     {
//         id:'2',
//         image: require('../assets/img/imgSlide2.svg'),
//         title: 'Save your favorite locations',
//         subtitle: 'You can save whatever location in order to provide prior planning at a distance'
//     },
//     {
//         id:'3',
//         image: require('../assets/img/imgSlide3.svg'),
//         title: 'Reward system',
//         subtitle: 'You can get rewards and higher your progress by simply discovering new places and having fun'
//     },
//     {
//         id:'4',
//         image: require('../assets/img/imgSlide4.svg'),
//         title: '',
//         subtitle: 'That’s it. Are you ready to start?'
//     },
    
// ];


const styles = StyleSheet.create({

    allWreapper:{
        height: height,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center'
    },
    wrapper: {
    },
    slides: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FDFDFD'
    },
      title:{
                color:'#000000',
                fontSize:24,
                fontWeight:'bold',
                marginTop:100,
                textAlign:'center',  
                fontFamily:"Quicksand-Bold"
            },
    
    subtitle:{
                color:'#717171',
                fontSize:20,
                marginTop:10,
                maxWidth:'70%',
                textAlign:'center',
                lineHeight:23,
                
            },
    activeDot:{ 
                backgroundColor: 'transparent',
                borderColor:'transparent', 
                width: 14, 
                height: 14, 
                borderRadius: 7, 
                marginLeft: 5, 
                marginRight: 5, 
                marginTop: 3, 
                marginBottom: 3 ,
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
        <View style={styles.allWreapper}>
            <Swiper style={styles.wrapper} showsButtons={false} loop={false} index={0} autoplay={false} onMomentumScrollEnd={(e) => handleSlideChange(e)}
                activeDot={<LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#07CDF9', '#5508D2']}
                    style={styles.activeDot}
                    ></LinearGradient>}
                dot={<View style={{ backgroundColor:'#c9cacc',borderColor:'transparent', width: 13, height: 13, borderRadius: 7, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3 ,borderWidth:1}} />}
            >
                
                <View style={styles.slides}>
                    <Text style={styles.title}>Find interesting places</Text>
                        {/* <Image source={slide.image} style={{height:'75%', width, resizeMode:'contain'}}/> */}
                        
                            {/* <Slide /> */}
                       
                        
                    <Text style={styles.subtitle}>Possibility of viewing a vast list of specific geographic points, as well as filtering them</Text>
                </View>

                <View style={styles.slides}>
                    <Text style={styles.title}>Save your favorite locations</Text>
                        {/* <Image source={slide.image} style={{height:'75%', width, resizeMode:'contain'}}/> */}
                    <Text style={styles.subtitle}>You can save whatever location in order to provide prior planning at a distance</Text>
                </View>

                <View style={styles.slides}>
                    <Text style={styles.title}>Reward system</Text>
                        {/* <Image source={slide.image} style={{height:'75%', width, resizeMode:'contain'}}/> */}
                    <Text style={styles.subtitle}>You can get rewards and higher your progress by simply discovering new places and having fun</Text>
                </View>

                <View style={styles.slides}>
                        {/* <Image source={slide.image} style={{height:'75%', width, resizeMode:'contain'}}/> */}

                    <Text style={styles.subtitle}>That’s it. Are you ready to start?</Text>
                    <LinearGradient onPress={handleButtonGetStarted}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#07CDF9', '#5508D2']}
                    style={styles.button}
                    >
                        <Text style={{ textAlign: 'center' }}>
                            Get started
                        </Text>
                    </LinearGradient>
                </View>
            </Swiper>
        </View>
    
      )
            
  }
   
  