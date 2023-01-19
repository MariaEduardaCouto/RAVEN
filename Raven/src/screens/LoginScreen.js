import React, {useState} from 'react';
import { SafeAreaView, Text, View, Dimensions, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import RavenIcon from '../assets/img/ravenIcon-05.svg';




let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

// await Font.loadAsync({
//     'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
//   });

export function LoginScreen({navigation, route}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    // VARIÁVEIS QUE FAZEM OS INPUTS FICAREM, ou não, COM BORDA VERMELHA
  const [pwWrong, setPwWrong] = useState(false);
  const [cPwWrong, setCPwWrong] = useState(false);
  const [emailWrong, setEmailWrong] = useState(false);

  const handleSubmit = () => {
    email == '' ? setEmailWrong(true) : setEmailWrong(false)
    password == '' ? setPwWrong(true) : setPwWrong(false)
    
    //alert(JSON.stringify(route))

    if (email == route.params.user.email && password == route.params.user.password) {
        alert('wohoo')
    } else {
        alert('The e-mail and/or password are incorrects!')
    }
  }

  function goBack() {
    //setScreen(screen-1)
  }

    return (
        <>
            <View style={Object.assign({}, styles.WH100, styles.fColumn, styles.jccAic, styles.bgWhite)}>
                <View>
                    <View style={Object.assign({}, styles.W70, styles.jccAic)}>
                        <RavenIcon style={styles.RavenIconStyle}/>
                    </View>
                    
                    <Text style={Object.assign({}, styles.txtTitle, styles.txtCenter,{fontWeight: 'bold',marginBottom:50})}>
                        Log in to continue
                    </Text>

                    <View>
                        <TextInput
                            style={Object.assign({}, styles.input, styles.my10,
                                    {borderColor: emailWrong ? 'red' : '#ccc'})}
                            placeholder="E-mail address or username"
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>

                    <View>
                        <TextInput
                            secureTextEntry={true}
                            style={Object.assign({}, styles.input, styles.my10,
                            {borderColor: pwWrong ? 'red' : '#ccc'})}
                            placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                    </View>

                    <LinearGradient
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        colors={['#07CDF9','#5508D2']} style={Object.assign({}, styles.button, styles.txtWhite, styles.txtCenter, styles.my10)}>
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={{backgroundColor: 'transparent'}}
                            type="submit">
                            <Text style={Object.assign({}, styles.txtWhite, styles.txtCenter)}>
                                Log in
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <View style={{flexDirection: 'row', marginTop:40, marginBottom:140}}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        colors={['#07CDF9','#5508D2']} style={{flex: 1, height: 1}}></LinearGradient>

                        <Text style={{textAlign: 'center', color:'black',fontWeight:'bold', marginVertical: -10}}>      OR      </Text>

                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        colors={['#5508D2','#07CDF9']} style={{flex: 1, height: 1}}></LinearGradient> 
                    </View>

                    <TouchableOpacity style={Object.assign({}, styles.button, styles.buttonTransp, styles.txtCenter)}
                        // onPress={onPressButton}
                        type="click">
                        <View style={{flexDirection:'row', flexWrap:'nowrap'}}>
                            <Image style={{width:25, height:25, marginLeft:10}}source={require('../assets/img/googleIcon.png')} />
                            <Text style={styles.txtCenter}
                                    onPress={()=>goBack()}>          Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={Object.assign({}, styles.txtRegister, styles.txtCenter,{marginBottom:20})}>
                        No account yet? <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('RegisterScreen')}>Sign up now
                        </Text>
                    </Text>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    WH100:{
        width: width,
        height: height,
    },
    fColumn:{
        flexDirection: 'column',
    },
    jccAic:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgWhite:{
        backgroundColor: '#fdfdfd'
    },
    W70:{
        width: width*0.7,
    },
    txtTitle: {
        fontSize: 30,
        color: '#232323',
        fontFamily:'Quicksand-Bold'
      },
    txtCenter: {
        textAlign: 'center',
      },
    my10: {
        marginTop: 10,
        marginBottom: 10,
      },
    input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 18,
        backgroundColor: '#fff',
        color: 'black',
        paddingLeft: 30,
      },
    button: {
        backgroundColor: '#07CDF9',
        padding: 15,
        borderRadius: 18,
      },
    txtWhite: {
        color: '#f4f4f4',
      },
    txtCenter: {
        textAlign: 'center',
      },
      RavenIconStyle:{
        height:120,
        width: 120,
        resizeMode:'contain',
        marginBottom:30

      },
      txtRegister:{
        color:"#454545",
        
      },
      buttonTransp: {
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        padding: 15,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#07CDF9',
        backfaceVisibility:'',
        marginBottom:50,
        marginTop:-70,
        color:'black'
      },
})

