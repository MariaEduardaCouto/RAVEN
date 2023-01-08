import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export function Register({navigation}) {
  const [screen, setScreen] = useState(1);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [name, setName] = useState('');
  const [day, setDay] = useState('1');
  const [month, setMonth] = useState('january');
  const [year, setYear] = useState('1970');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('female')

  const [userWrong, setUserWrong] = useState(false);
  const [pwWrong, setPwWrong] = useState(false);
  const [cPwWrong, setCPwWrong] = useState(false);
  const [emailWrong, setEmailWrong] = useState(false);

  const [usernameWrong, setUsernameWrong] = useState(false);
  const [nameWrong, setNameWrong] = useState(false);
  // const [cbWrong, setCbWrong] = useState(false);

  const [isSelected, setSelection] = useState(false);

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
      alignItems: 'center'
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
      paddingLeft: 30,
    },
    inputN: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 22,
      backgroundColor: '#fff',
      flex: 1,
      textAlign: 'center',
      borderColor: '#ccc'
    },
    button: {
      backgroundColor: '#07CDF9',
      padding: 15,
      borderRadius: 18,
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
      borderStyle: 'solid',
      borderBottomWidth: 1,
    }
  });

  let onPressButton = event => {
    event.preventDefault();

    if (screen == 1) {

      if (isSelected &&
          email != '' && password != '' && confirmPassword != '') {

        if (password === confirmPassword) {
          // navigation.navigate('Login', {username: username, password: password});

          setScreen(screen+1);
        } else {
          Alert.alert(
            "",
            "The passwords don't match"
          )

          setPwWrong(true)
          setCPwWrong(true)
        }
      } else {
        email == '' ? setEmailWrong(true) : setEmailWrong(false)
        password == '' ? setPwWrong(true) : setPwWrong(false)
        confirmPassword == '' ? setCPwWrong(true) : setCPwWrong(false)
      }

    } else if (screen == 2) {

      if (name != '' && username != '') {

        setScreen(screen+1);
      } else {
        name == '' ? setNameWrong(true) : setNameWrong(false)
        username == '' ? setUsernameWrong(true) : setUsernameWrong(false)
      }

    }
  };

  function changeGender(sex) {
    setGender(sex)
  }

  if (screen == 1) {
    return (
      <ScrollView>
        <View style={Object.assign({}, styles.WH100, styles.fColumn, styles.jccAic, styles.bgWhite)}>
          <View style={styles.W70}>
            <Text style={Object.assign({}, styles.txtTitle, styles.txtCenter,
                        {fontWeight: 'bold'})}>
              Sign up to discover Raven's AR experience.
            </Text>
  
            <View>
              <TextInput
                style={Object.assign({}, styles.input, styles.my10,
                        {borderColor: emailWrong ? 'red' : '#ccc'})}
                placeholder="E-mail address"
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
  
            <View>
              <TextInput
                secureTextEntry={true}
                style={Object.assign({}, styles.input, styles.my10,
                  {borderColor: cPwWrong ? 'red' : '#ccc'})}
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
              />
            </View>
  
            <View style={Object.assign({}, styles.my10, styles.fRow, styles.W70)}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                // style={styles.checkbox}
              />
              <Text>I agree and consent to Raven's
                <Text style={{fontWeight: 'bold'}}> Terms of Service </Text> 
                and 
                <Text style={{fontWeight: 'bold'}}> Privacy Policy.</Text> 
                </Text>
            </View>
  
            <View style={styles.my10}>
              <TouchableOpacity
                onPress={onPressButton}
                style={styles.button}
                type="submit">
                  <Text style={Object.assign({}, styles.txtWhite, styles.txtCenter)}>
                    Continue
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }

  if (screen == 2) {
    return (
      <ScrollView>
        <View style={Object.assign({}, styles.WH100, styles.fColumn, styles.jccAic, styles.bgWhite)}>
          <View style={styles.W70}>
            <Text style={Object.assign({}, styles.txtTitle, styles.txtCenter,
                        {fontWeight: 'bold'})}>
              It's almost done.
            </Text>
  
            <View style={Object.assign({}, styles.mt10, {marginTop: 30})}>
              <Text style={styles.txt}>
                What is your first and last name?
              </Text>
              <TextInput
                style={Object.assign({}, styles.input, styles.my10,
                        {borderColor: nameWrong ? 'red' : '#ccc'})}
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
  
            <View style={styles.mt10}>
              <Text style={styles.txt}>
                What is date of birth?
              </Text>

              <View style={styles.fRow}>
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
            </View>

            <View style={styles.mt10}>
              <Text style={styles.txt}>
                What is your gender?
              </Text>

              <View style={styles.fRow}>
                <TouchableOpacity style={Object.assign({}, styles.inputN, styles.my10, 
                            {width: width*0.17}, {padding: 15},
                            {borderColor: gender == 'female' ? '#07CDF9' : '#ccc'})}
                      onPress={()=>changeGender('female')}>
                  <Text style={styles.txtCenter}>
                    Female
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={Object.assign({}, styles.inputN, styles.my10, 
                            {width: width*0.17}, {marginLeft: 8}, {marginRight: 8}, {padding: 15},
                            {borderColor: gender == 'male' ? '#07CDF9' : '#ccc'})}
                      onPress={()=>changeGender('male')}>
                  <Text style={styles.txtCenter}>
                    Male
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={Object.assign({}, styles.inputN, styles.my10, 
                            {width: width*0.17}, {padding: 15},
                            {borderColor: gender == 'other' ? '#07CDF9' : '#ccc'})}
                      onPress={()=>changeGender('other')}>
                  <Text style={styles.txtCenter}>
                    Other
                  </Text>
                </TouchableOpacity>

              </View>
            </View>
  
            <View style={styles.mt10}>
              <Text style={styles.txt}>
                What would you like your username to be?
              </Text>

              <TextInput
                style={Object.assign({}, styles.input, styles.my10,
                  {borderColor: usernameWrong ? 'red' : '#ccc'})}
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
              />
            </View>
  
            <View style={styles.my10}>
              <TouchableOpacity
                onPress={onPressButton}
                style={styles.button}
                type="submit">
                  <Text style={Object.assign({}, styles.txtWhite, styles.txtCenter)}>
                    Join Raven
                  </Text>
              </TouchableOpacity>

              <Text style={Object.assign({}, styles.txt, styles.txtCenter, styles.txtUnderlined,
                          {fontWeight: 'bold'}, {marginTop: 30})}>
                Go back
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}