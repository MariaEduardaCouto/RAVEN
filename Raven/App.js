import 'react-native-gesture-handler'
import React from 'react';
import {View, StyleSheet, Text, ScrollView, KeyboardAvoidingView, TextInput, } from 'react-native';
// import locations from './data/locations.json'
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import Svg, { G, Path } from 'react-native-svg';
const Tab = createBottomTabNavigator(); 
// import { OnboardingScreen } from './src/screens/OnboardingScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/assets/img/homeButton.svg';
import Saved from './src/assets/img/savedButton.svg';
import Nearby from './src/assets/img/nearbyButton.svg';
import Badges from './src/assets/img/badgesButton.svg';
import Search from './src/assets/img/searchIcon.svg'


// const Stack = createNativeStackNavigator();

// export default function App() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator screenOptions = {{headerShown: false}}>
//           <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
//           {/* <Stack.Screen name="LoginScreen" component={LoginScreen}/> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
// }
export default function HomepageScreen() {
    return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
            tabBarActiveTintColor: '#A63A50',
            tabBarInactiveTintColor: '#AB9B96',
            headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Home/>
                )
                }}
            />
            <Tab.Screen
                name="Saved"
                component={SavedScreen} 
                options={{
                tabBarLabel: 'Saved',
                tabBarIcon: ({ color, size }) => (
                    <Saved />
                )
                }}
            />
            <Tab.Screen
                name="Nearby"
                component={NearbyScreen}
                options={{
                tabBarLabel: 'Nearby',
                tabBarIcon: ({ color, size }) => (
                    <Nearby />
                )
                }}
            />
            <Tab.Screen
                name="Badges"
                component={BadgesScreen}
                options={{
                tabBarLabel: 'Badges',
                tabBarIcon: ({ color, size }) => (
                    <Badges />
                )
                }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

const HomeScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        // button: {
        //     padding: 20,
        //     borderRadius: 5,
        // },
        // buttonText: {
        //     fontSize: 20,
        //     color: '#fff',
        // }
        searchInput: {
            flex: 0.6,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: '#fff',
            color: '#424242',
        },
        searchIcon: {
            padding: 10
        },
        searchSection: {
            marginLeft:0.7,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        }
    })

    return(
        <ScrollView>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.searchInput}
                    autoCorrect={false}
                    secureTextEntry
                    placeholder="Search"
                    onChangeText={this.onPasswordEntry}
                    />
                <Search style={styles.searchIcon} />
            </View>
        </ScrollView>
        // <LinearGradient
        // start={{x: 0, y: 0}}
        // end={{x: 1, y: 0}}
        // colors={['#07CDF9', '#5508D2']}
        // style={styles.button}
        // >
        // <Text style={styles.buttonText}>Get started</Text>
        // </LinearGradient>
    )
}

const SavedScreen = () => {
  return(
        <View>
        </View>
  )
}

const NearbyScreen = ({navigation}) => {
  const styles = StyleSheet.create({
      button: {
          padding: 20,
          borderRadius: 5,
      },
      buttonText: {
          fontSize: 20,
          color: '#fff',
      }
  })

  return(
      <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#07CDF9', '#5508D2']}
      style={styles.button}
      >
      <Text style={styles.buttonText}>Get started</Text>
      </LinearGradient>
  )
}

const BadgesScreen = ({navigation}) => {
  const styles = StyleSheet.create({
      button: {
          padding: 20,
          borderRadius: 5,
      },
      buttonText: {
          fontSize: 20,
          color: '#fff',
      }
  })

  return(
      <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#07CDF9', '#5508D2']}
      style={styles.button}
      >
      <Text style={styles.buttonText}>Get started</Text>
      </LinearGradient>
  )
}




// export default Homepage;