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
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
// import Svg  from 'react-native-svg';

import GoBackYT from "../assets/img/goBackYT.svg"
import GoBackBL from "../assets/img/goBackBL.svg"
import GoBackBL_left from "../assets/img/goBackBL_left.svg"

export default function EditProfileScreen({navigation}) {
    
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
        if (toPage == 'EditProfileScreen') {
            setPage('editProf')
                                        // , {username: username, password: password}
        } else if (toPage == 'goBack') {
            navigation.navigate('ProfileScreen')
            
        }
    }

    function changeGender(sex) {
        setGender(sex)
    }


    if (page == 'initial') {
        return (
            <>
                <View style={Object.assign({}, styles.WH100, styles.jccAic,
                            {textAlign: 'left', backgroundColor: '#fdfdfd'})}>

                    <View style={Object.assign({}, styles.W100,
                                {paddingLeft: 40,} )}>
                        <GoBackBL_left
                            style={{resizeMode: 'contain', height: 30, width: 30}}
                            onPress={()=>changePage('goBack')}
                        />
                    </View>

                    <View style={Object.assign({}, styles.W100, styles.jccAic,)}>

                        <View style={{backgroundColor: '#cdcdcd',
                                    width: width*0.25, height: width*0.25,
                                    borderRadius: 70}}>

                        </View>

                        <Text style={{fontWeight: 'bold', fontSize: 20}}>
                            User
                        </Text>
                    </View>

                    {/* FORM DE EDIT PROFILE */}
                    <View style={{flexDirection: 'column', marginTop: 20, width: width*0.7,
                                    justifyContent: 'center', alignItems: 'center'}}>

                        <Text style={Object.assign({}, styles.txt,
                                    {width: '100%'})}>
                            What is date of birth?
                        </Text>

                        <View style={Object.assign({}, styles.fRow,
                                        {width: '100%', justifyContent: 'space-between'})}>
                            <TextInput
                            style={Object.assign({}, styles.inputN, styles.my10,
                                    {width: width*0.17})}
                            keyboardType='numeric'
                            maxLength={31}
                            value={day}
                            onChangeText={text => setDay(text)}
                            />

                            <TextInput
                            style={Object.assign({}, styles.inputN, styles.my10,
                                    {width: width*0.25}, {marginLeft: 8}, {marginRight: 8})}
                            value={month}
                            onChangeText={text => setMonth(text)}
                            />

                            <TextInput
                            style={Object.assign({}, styles.inputN, styles.my10,
                                    {width: width*0.17})}
                            keyboardType='numeric'
                            maxLength={2023}
                            value={year}
                            onChangeText={text => setYear(text)}
                            />
                        </View>

                        <View style={Object.assign({}, styles.mt10,
                                        {width: '100%',})}>
                            <Text style={styles.txt}>
                                What is your gender?
                            </Text>

                            <View style={Object.assign({}, styles.fRow,
                                        {width: '100%', justifyContent: 'space-between'})}>
                                <TouchableOpacity style={Object.assign({}, styles.inputN, styles.my10, 
                                            {padding: 15},
                                            {borderColor: gender == 'female' ? '#07CDF9' : '#ccc'})}
                                            onPress={()=>changeGender('female')}
                                    >
                                    <Text style={styles.txtCenter}>
                                        Female
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={Object.assign({}, styles.inputN, styles.my10, 
                                            {marginLeft: 8}, {marginRight: 8}, {padding: 15},
                                            {borderColor: gender == 'male' ? '#07CDF9' : '#ccc'})}
                                            onPress={()=>changeGender('male')}
                                    >
                                <Text style={styles.txtCenter}>
                                    Male
                                </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={Object.assign({}, styles.inputN, styles.my10, 
                                            {padding: 15},)}
                                            onPress={()=>changeGender('other')}
                                    >
                                <Text style={styles.txtCenter}>
                                    Other
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={Object.assign({}, styles.mt10,
                                        {width: '100%'})}>
                            <Text style={styles.txt}>
                                What would you like your username to be?
                            </Text>

                            <TextInput
                                style={Object.assign({}, styles.input, styles.my10,)}
                                placeholder="Username"
                                value={username}
                                onChangeText={text => setUsername(text)}
                            />
                        </View>
                        
                        <View style={Object.assign({}, styles.mt10,
                                        {width: '100%'})}>
                            <Text style={styles.txt}>
                                E-mail address:
                            </Text>

                            <TextInput
                                style={Object.assign({}, styles.input, styles.my10,
                                      {backgroundColor: '#ececec'})}
                                placeholder="MUDARPELADATABASE@gmail.com"
                                editable={false}
                            />
                        </View>
                    </View>

                    <View style={Object.assign({}, styles.fRow, styles.my10,
                                        {width: width*0.7, justifyContent: 'space-between'})}>
                        <LinearGradient
                                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                        colors={['#07CDF9','#5508D2']}
                                        style={Object.assign({}, styles.button, styles.txtWhite, styles.txtCenter,
                                              {width: '45%'})}>
                            <TouchableOpacity
                                // onPress={onPressButton}
                                style={{backgroundColor: 'transparent'}}
                                type="submit">
                                <Text style={Object.assign({}, styles.txtWhite, styles.txtCenter)}>
                                    Save changes
                                </Text>
                            </TouchableOpacity>

                        </LinearGradient>

                        <TouchableOpacity
                                // onPress={onPressButton}
                                style={Object.assign({}, styles.jccAic,
                                      {backgroundColor: 'transparent'}, {width: '45%'},
                                      {borderStyle: 'solid', borderWidth: 1, borderRadius: 18, borderColor: '#9f9f9f'})}
                                type="submit">
                                <Text style={Object.assign({}, styles.txtWhite, styles.txtCenter,
                                            {color: 'black'})}>
                                    Cancel
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
}