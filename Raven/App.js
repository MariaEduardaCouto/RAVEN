import {React} from 'react';
import {View, StyleSheet, Text, ScrollView, KeyboardAvoidingView, TextInput, } from 'react-native';
// import locations from './data/locations.json'
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import Svg, { G, Path } from 'react-native-svg';
const Tab = createBottomTabNavigator(); 
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import {LoginScreen} from './src/screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomepageScreen from './src/screens/HomepageScreen'
import SavedScreen from './src/screens/SavedScreen'
import NearbyScreen from './src/screens/NearbyScreen'
import BadgesScreen from './src/screens/BadgesScreen'

import HomeIcon from './src/assets/img/homeButton.svg';
import SavedIcon from './src/assets/img/savedButton.svg';
import NearbyIcon from './src/assets/img/nearbyButton.svg';
import BadgesIcon from './src/assets/img/badgesButton.svg';

//codigo Duda
// const Stack = createNativeStackNavigator();

// export default function App() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator screenOptions = {{headerShown: false}}>
//           {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/> */}
//           <Stack.Screen name="LoginScreen" component={LoginScreen}/>

//         </Stack.Navigator>
//       </NavigationContainer>
//     )
// }


export default function App() {
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
                component={HomepageScreen}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <HomeIcon/>
                )
                }}
            />
            <Tab.Screen
                name="Saved"
                component={SavedScreen} 
                options={{
                tabBarLabel: 'Saved',
                tabBarIcon: ({ color, size }) => (
                    <SavedIcon />
                )
                }}
            />
            <Tab.Screen
                name="Nearby"
                component={NearbyScreen}
                options={{
                tabBarLabel: 'Nearby',
                tabBarIcon: ({ color, size }) => (
                    <NearbyIcon />
                )
                }}
            />
            <Tab.Screen
                name="Badges"
                component={BadgesScreen}
                options={{
                tabBarLabel: 'Badges',
                tabBarIcon: ({ color, size }) => (
                    <BadgesIcon />
                )
                }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };