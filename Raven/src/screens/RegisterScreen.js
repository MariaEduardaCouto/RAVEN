import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

export function Register({navigation}) {
  const [username, setUsername] = useState('vivi4na27l');
  const [password, setPassword] = useState('password');
  const [confirmPassword, setConfirmPassword] = useState('password');
  let height = Dimensions.get('window').height;
  let width = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: width,
      height: height,
      backgroundColor: '#93e9ff',
      // backgroundImage: 'linear-gradient(black, #93e9ff)',
    },
    div: {
      backgroundColor: '#f2f2f2',
      padding: 27,
      borderRadius: 30,
    },
    txt: {
      fontSize: 20,
      color: 'darkGrey',
    },
    txtTitle: {
      fontSize: 25,
      color: '#232323',
    },
    txtInput: {
      fontSize: 20,
      color: '#f4f4f4',
    },
  });

  let onPressButton = event => {
    event.preventDefault();
    if (password === confirmPassword) {
      alert(`User ${username} created with success!`);
      navigation.navigate('Login', {username: username, password: password});
    } else {
      alert(`None of the passwords match`)
    }
  };

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.div}>
          <View>
            <Text style={styles.txt}>Choose your display name:</Text>
            <TextInput
              style={styles.txt}
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>

          <View>
            <Text style={styles.txt}>Choose your password:</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.txt}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>

          <View>
            <Text style={styles.txt}>Choose your display name:</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.txt}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>

          <View>
            <Button onPress={onPressButton} title="Submit" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}