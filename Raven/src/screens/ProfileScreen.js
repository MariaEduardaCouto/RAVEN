/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
// import Svg  from 'react-native-svg';

import GoBackYT from "../assets/img/goBackYT.svg"
import GoBackYTLeft from "../assets/img/goBackYT_left.svg"
import GoBackBL from "../assets/img/goBackBL.svg"
import ProfileIcon from '../assets/img/profileIcon.svg'
import Lock from "../assets/img/lock.svg"
import Security from "../assets/img/security.svg"
import Logout from "../assets/img/logout.svg"
import Config from "../assets/img/config.svg"
import EditPreferencesScreen from "./EditPreferencesScreen.js"
import EditProfileScreen from "./EditProfileScreen.js"
import ChangePasswordScreen from "./ChangePasswordScreen.js"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function MyStack({navigation, route}) {
    return (
      <Stack.Navigator screenOptions = {{headerShown: false}} initialRouteName="ProfileScreen">
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="EditPreferencesScreen" component={EditPreferencesScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
      </Stack.Navigator>
    );
}

function ProfileScreen({navigation, route}) {
    useEffect(() => {
        navigation.getParent().getParent().setOptions({ tabBarStyle: {display:'none'}})
    })

    const [page, setPage] = useState('initial');

    const preferencesArray = ['Nature','Museums','Monuments','Movie theaters','Restaurants','Shoppings','Libraries/Bookshops','Hiking','Beach','Sunset'];
    // const [preferences, setPreferences] = useState(preferencesArray);
    // const [chosenPref, setChosenPref] = useState([])

    // const [isSelected, setSelection] = useState(false);

    const [chosenPref, setChosenPref] = useState([])

    const [name, setName] = useState('');
    const [day, setDay] = useState('1');
    const [month, setMonth] = useState('january');
    const [year, setYear] = useState('1970');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('female')

    const [currPass, setCurrPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [cNewPass, setCNewPass] = useState('');

    let height = Dimensions.get('window').height;
    let width = Dimensions.get('window').width;

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


    function changePage(toPage) {
        if (toPage == 'goBack') {
            navigation.navigate('Homepage')
            
        } else {
            navigation.navigate(toPage); //{username: usernameLogin}
            // setPage(toPage)
        }
    }

    function changeGender(sex) {
        setGender(sex)
    }

    return (
        <>
            <LinearGradient
                            start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                            colors={['#07CDF9','#5508D2']}
                            style={{height: height*0.55, width: width, padding: 15, paddingTop: 50,
                                    alignItems: 'center'}}>

                <View style={Object.assign({}, styles.W100,
                            {textAlign: 'left', paddingLeft: 40})}>

                    <GoBackYTLeft
                        style={{resizeMode: 'contain', height: 30, width: 30}}
                        onPress={() => {
                            navigation.getParent().getParent().setOptions({ tabBarStyle: {height: height *0.075, padding:10, backgroundColor:'white'}});
                            navigation.goBack()}
                        }
                    />
                </View>

                <View style={Object.assign({}, styles.W100, styles.aic,
                            {paddingLeft: 40, paddingRight: 40,})}>

                    <View style={{backgroundColor: '#cdcdcd',
                                width: width*0.25, height: width*0.25,
                                borderRadius: 70, justifyContent: 'center', alignItems: 'center'}}>
                        <ProfileIcon style={{width:'80%', height: '80%'}}/>
                    </View>

                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        User
                    </Text>

                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, borderBottomColor: '#fff',
                                width: '100%', marginTop: 20 }} />

                    <View style={{flexDirection: 'column', marginTop: 20, paddingLeft: 80}}>

                        <TouchableOpacity   activeOpacity={1}
                                            style={Object.assign({}, styles.fRow, styles.W100, {alignItems: 'center'})}
                                            onPress={()=>navigation.navigate('EditPreferencesScreen')}>
                            <Text style={Object.assign({}, styles.txtWhite,
                                        {fontWeight: 'bold', fontSize:15})}>
                                Edit preferences
                            </Text>

                            <GoBackYT
                                style={{resizeMode: 'contain', height: '90%', width: 30}}
                            />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                                horizontal={true}
                                style={Object.assign({}, styles.fRow, styles.W100,)}>
                        {preferencesArray.map((preference, index) => (
                            <View key={index} style={Object.assign({}, styles.inputPref, styles.my10, 
                                                    {padding: 10, marginRight: 10},)}
                                                >
                                                {/* onPress={()=>addPref(preference)} */}
                                <Text numberOfLines={1} style={styles.txtCenter}> 
                                    {/* onLayout={(e)=>getWidth(e)} */}
                                    {preference}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </LinearGradient>

            <View
                style={Object.assign({}, styles.bgWhite,
                        {position: 'absolute', top: height*0.45,
                        width: width, height: height*0.55,
                        borderRadius: 30, padding: 30})}>

                <Text style={{fontSize: 20}}>
                    Account
                </Text>


                <View style={Object.assign({}, styles.fColumn,)}>
                    {/* EDIT PROFILE */}
                    <TouchableOpacity   activeOpacity={1}
                                        style={Object.assign({}, styles.fRow,
                                {marginTop: 30},
                                {justifyContent: 'space-between', alignItems: 'center'})}>

                        <View style={Object.assign({}, styles.fRow, styles.jccAic)}>
                        <View style={{backgroundColor: '#cdcdcd', borderRadius: 50,
                                        width: width*0.12, height: width*0.12,
                                        justifyContent: 'center', alignItems: 'center'}}>
                                <Config style={{width:'60%', height:'60%'}} />
                            </View>

                            <Text style={Object.assign({}, 
                                        {marginLeft: 20},
                                        {display: 'flex', alignItems: 'center'})}
                                  onPress={()=>changePage('EditProfileScreen')}>
                                Edit your profile
                            </Text>
                        </View>

                        <GoBackBL
                            style={{resizeMode: 'contain', height: 30, width: 30}}
                        />

                        {/* <Image source={require('../assets/img/goBackBL')} style={{width: 10, height: 10}}/> */}
                    </TouchableOpacity>

                    {/* CHANGE PASSWORD */}
                    <TouchableOpacity   activeOpacity={1}
                                        style={Object.assign({}, styles.fRow,
                                                {marginTop: 20},
                                                {justifyContent: 'space-between', alignItems: 'center'})}
                                        onPress={()=>changePage('ChangePasswordScreen')}>
                        <View style={Object.assign({}, styles.fRow, styles.jccAic)}>
                            <View style={{backgroundColor: '#cdcdcd', borderRadius: 50,
                                        width: width*0.12, height: width*0.12,
                                        justifyContent: 'center', alignItems: 'center'}}>
                                <Lock style={{width:'100%', height:'100%'}} />
                            </View>

                            <Text style={Object.assign({}, 
                                        {marginLeft: 20},
                                        {display: 'flex', alignItems: 'center'})}>
                                Change password
                            </Text>
                        </View>

                        <GoBackBL
                            style={{resizeMode: 'contain', height: 30, width: 30}}
                        />
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={{flex: 1, height: 2, backgroundColor: '#cdcdcd'}} />
                    </View>

                    {/* TERMS OF SERVICE */}
                    <TouchableOpacity   activeOpacity={1}
                                        style={Object.assign({}, styles.fRow,
                                {marginTop: 20},
                                {justifyContent: 'space-between', alignItems: 'center'})}>
                        <View style={Object.assign({}, styles.fRow, styles.jccAic)}>
                        <View style={{backgroundColor: '#cdcdcd', borderRadius: 50,
                                        width: width*0.12, height: width*0.12,
                                        justifyContent: 'center', alignItems: 'center'}}>
                                <Security style={{width:'60%', height:'60%'}} />
                            </View>

                            <Text style={Object.assign({}, 
                                        {marginLeft: 20},
                                        {display: 'flex', alignItems: 'center'})}>
                                Terms of Service
                            </Text>
                        </View>

                        <GoBackBL
                            style={{resizeMode: 'contain', height: 30, width: 30}}
                        />
                    </TouchableOpacity>

                    {/* LOG OUT */}
                    <TouchableOpacity   activeOpacity={1}
                                        style={Object.assign({}, styles.fRow,
                                {marginTop: 20},
                                {justifyContent: 'space-between', alignItems: 'center'})}>
                        <View style={Object.assign({}, styles.fRow, styles.jccAic)}>
                        <View style={{backgroundColor: '#cdcdcd', borderRadius: 50,
                                        width: width*0.12, height: width*0.12,
                                        justifyContent: 'center', alignItems: 'center'}}>
                                <Logout style={{width:'60%', height:'60%'}} />
                            </View>

                            <Text style={Object.assign({}, 
                                        {marginLeft: 20},
                                        {display: 'flex', alignItems: 'center'})}>
                                Log out
                            </Text>
                        </View>

                        <GoBackBL
                            style={{resizeMode: 'contain', height: 30, width: 30}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}