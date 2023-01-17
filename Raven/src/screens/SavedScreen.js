import React, {useState} from 'react';

import {
    Dimensions,
    ScrollView,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

export function Saved({natigation}){


    return(
        <>
            <LinearGradient
                start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                colors={['#07CDF9','#5508D2']}
                style={{height: height*0.55, width: width, padding: 15, paddingTop: 50,
                        alignItems: 'center'}}>


            </LinearGradient>
        </>
    )
}