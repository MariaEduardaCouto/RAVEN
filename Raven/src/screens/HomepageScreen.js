// import React from 'react';
// import {View, StyleSheet, Text, ScrollView, KeyboardAvoidingView, TextInput, } from 'react-native';
// // import locations from './data/locations.json'

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// const Tab = createBottomTabNavigator(); 


// const HomeScreen = ({navigation}) => {
//     const styles = StyleSheet.create({
//         // button: {
//         //     padding: 20,
//         //     borderRadius: 5,
//         // },
//         // buttonText: {
//         //     fontSize: 20,
//         //     color: '#fff',
//         // }
//         searchInput: {
//             flex: 0.6,
//             paddingTop: 10,
//             paddingRight: 10,
//             paddingBottom: 10,
//             paddingLeft: 0,
//             backgroundColor: '#fff',
//             color: '#424242',
//         },
//         searchIcon: {
//             padding: 10
//         },
//         searchSection: {
//             marginLeft:0.7,
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#fff',
//         }
//     })

//     return(
//         <ScrollView>
//             <View style={styles.searchSection}>
//                 <TextInput
//                     style={styles.searchInput}
//                     autoCorrect={false}
//                     secureTextEntry
//                     placeholder="Search"
//                     onChangeText={this.onPasswordEntry}
//                     />
//                 <Search style={styles.searchIcon} />
//             </View>
//         </ScrollView>
//         // <LinearGradient
//         // start={{x: 0, y: 0}}
//         // end={{x: 1, y: 0}}
//         // colors={['#07CDF9', '#5508D2']}
//         // style={styles.button}
//         // >
//         // <Text style={styles.buttonText}>Get started</Text>
//         // </LinearGradient>
//     )
// }

// export default HomeScreen