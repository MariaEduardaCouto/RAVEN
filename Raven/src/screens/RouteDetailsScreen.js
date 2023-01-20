/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
    Image,
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ImageBackground,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

// import Svg  from 'react-native-svg';
import LocationIcon from '../assets/img/locationIcon.svg'
import ActiveSaved from '../assets/img/activeSaved.svg';
import InactiveSaved from '../assets/img/inactiveSaved.svg';

import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import GoBackYT from "../assets/img/goBackYT.svg"
import GoBackYTLeft from "../assets/img/goBackYT_left.svg"
import GoBackBL from "../assets/img/goBackBL.svg"

export function RouteDetailsScreen({navigation}) {
    let height = Dimensions.get('window').height;
    let width = Dimensions.get('window').width;
    const [saved, setSaved] = useState(false);

    let attractions = [
        {
            name:"Torre dos Clérigos",
            about: 'Catholic church in Porto.',
            cityCountry:"Porto, Portugal",
            address:"R. de São Filipe de Nery, 4050-546 Porto",
            latitude: 41.145907,
            longitude: -8.613536,
            image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/ae/18/17/torre-de-los-clerigos.jpg?w=1100&h=-1&s=1&cx=1250&cy=821&chk=v1_63aacc650342946a8f49"
        },
        {
            name:"Dom Luís I Bridge",
            about: 'Double-deck metal arch bridge that spans the River Douro.',
            cityCountry:"Porto, Portugal",
            address:"Pte. Luiz I, Porto",
            latitude: 41.140080,
            longitude: -8.609460,
            image:"https://lp-cms-production.imgix.net/2019-06/16339ba77bf3814311c99bd4f8061aa9-ponte-de-dom-luis-i.jpg"
        },
        {
            name:"Livraria Lello",
            about: 'Historic bookstore in the center of Porto.',
            cityCountry:"Porto, Portugal",
            address:"R. das Carmelitas 144, 4050-161 Porto",
            latitude: 41.146790,
            longitude: -8.614900,
            image:"https://i1.wp.com/mundodosviajantes.com/wp-content/uploads/2019/01/Lello-10.jpg?resize=572%2C763"
        }
    ]

    function saveAttraction(active) {
        if (!active) {
            setSaved(true)
        } else {
            setSaved(false)
        }
    }

    const styles = StyleSheet.create({
        WH100: {
            width: width,
            height: height,
        },
        W100: {
            width: width,
        },
        W70: {
            width: width*0.7,
        },
        fColumn: {
            flexDirection: 'column',
        },
        fRow: {
            flexDirection: 'row'
        },
        jcc: {
            justifyContent: 'center'
        },
        aic: {
            alignItems: 'center'
        },
        jccAic: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        my10: {
            marginTop: 10,
            marginBottom: 10,
        },
        mt10: {
            marginTop: 10,
        },
        bgWhite: {
            backgroundColor: '#fdfdfd'
        },
        input: {
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 18,
            backgroundColor: '#fff',
            borderColor: '#ccc',
            paddingLeft: 30,
        },
        inputN: {
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 22,
            backgroundColor: '#fff',
            
            textAlign: 'center',
            borderColor: '#ccc',
            flexWrap: 'wrap'
        },
        inputPref: {
        //   borderStyle: 'solid',
        //   borderWidth: 1,
            borderRadius: 25,
            backgroundColor: '#fff',
            textAlign: 'center',
            borderColor: '#ccc',
            paddingHorizontal: 20,

            display: 'flex',
            // flexShrink: ,
        },

        containerPref: {
            // flexWrap: 'wrap',
            // flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            width: '100%',
            // borderStyle: 'solid',
            // borderColor: 'red',
            // borderWidth: 1,
            // overflow:
        },

        button: {
            backgroundColor: '#07CDF9',
            padding: 15,
            borderRadius: 18,
        },
        buttonTransp: {
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            padding: 15,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: '#07CDF9',
            backfaceVisibility:''
        },

        div: {
            backgroundColor: '#f2f2f2',
            padding: 27,
            borderRadius: 30,
        },
        txt: {
            // fontSize: 20,
            color: 'darkGrey',
        },
        txtTitle: {
            fontSize: 30,
            color: '#232323',
        },
        txtWhite: {
            color: '#f4f4f4',
        },
        txtCenter: {
            textAlign: 'center',
        },
        txtUnderlined: {
            textDecorationLine: 'underline',
            // borderStyle: 'solid',
            // borderBottomWidth: 1,
        },
    });

    return (
        <>
            <ImageBackground source={{uri: attractions[1].image}}
                                style={{height: height*0.55, width: width,
                                padding: 15, paddingTop: 50, alignItems: 'center'}}>

                <View style={Object.assign({}, styles.W100,
                            {textAlign: 'left', paddingLeft: 40})}>

                    <GoBackYTLeft
                        style={{resizeMode: 'contain', height: 30, width: 30}}
                        onPress={()=>changePage('initial')}
                    />
                </View>

                
            </ImageBackground>

            <View
                style={Object.assign({}, styles.bgWhite, styles.fColumn,
                        {position: 'absolute', top: height*0.45,
                        width: width, height: height*0.55,
                        borderRadius: 30, padding: 30})}>

                <Text style={{fontSize: 20, color: 'black'}}>
                    {attractions[1].name}
                </Text>
                <Text>
                    {attractions[1].about}
                </Text>


                <View style={Object.assign({}, styles.fRow,
                            {marginTop:height*0.05})}>

                    <LocationIcon style={{width:18,height:18}}/>


                    <View style={Object.assign({}, styles.fColumn, {marginLeft: 5})}>
                        <Text style={Object.assign({}, {color: 'black'})}>
                            {attractions[1].cityCountry}
                        </Text>
                        <Text>
                            {attractions[1].address}
                        </Text>
                    </View>

                </View>


                <MapView
                    style={{width: '100%', height: '30%', marginTop: 10}}
                    region={{
                        latitude: attractions[1].latitude,
                        longitude: attractions[1].longitude,
                        latitudeDelta: 0.0,
                        longitudeDelta: 0.0421,
                    }}
                >

                    <Marker
                        coordinate={{
                            latitude: attractions[1].latitude,
                            longitude: attractions[1].longitude
                        }}
                        title={attractions[1].name}
                        description={attractions[1].about}
                        pinColor={"#5508D2"}
                    />

                </MapView>


                <View style={Object.assign({}, styles.fRow,
                            {marginTop:height*0.05, justifyContent: 'space-between'})}>
                    <LinearGradient style={Object.assign({}, {width: '75%'}, styles.button, styles.txtWhite, styles.txtCenter)}
                                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                    colors={['#07CDF9','#5508D2']}>
                        <TouchableOpacity
                                        // onPress={onPressButton}
                                        style={{backgroundColor: 'transparent'}}
                                        type="submit">

                            <Text style={Object.assign({}, styles.txtWhite, styles.txtCenter)}>
                                Start journey
                            </Text>

                        </TouchableOpacity>
                    </LinearGradient>

                    {!saved && (
                        <TouchableOpacity style={Object.assign({}, styles.button, styles.buttonTransp,
                                                {width: '20%', borderColor: '#5508D2',}, styles.jccAic)}
                                            activeOpacity={1}
                                            onPress={()=>saveAttraction(false)}
                                            type="click">
                            <InactiveSaved style={{width:18,height:18}}/>
                        </TouchableOpacity>
                    )}

                    {saved && (
                        <TouchableOpacity style={Object.assign({}, styles.button, styles.buttonTransp,
                                                {width: '20%', borderColor: '#5508D2',}, styles.jccAic)}
                                            activeOpacity={1}
                                            onPress={()=>saveAttraction(true)}
                                            type="click">
                            <ActiveSaved style={{width:18,height:18}}/>
                        </TouchableOpacity>
                    )}
                </View>

            </View>
        </>
    )
}