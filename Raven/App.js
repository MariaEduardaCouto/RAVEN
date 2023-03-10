import {React} from 'react';
import {View, StyleSheet, Text, ScrollView, KeyboardAvoidingView, TextInput, Dimensions } from 'react-native';
// import locations from './data/locations.json'
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import Svg, { G, Path } from 'react-native-svg';
const Tab = createBottomTabNavigator(); 
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import {LoginScreen} from './src/screens/LoginScreen';
import {RegisterScreen} from './src/screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const height = Dimensions.get('window').height
import HomepageScreen from './src/screens/HomepageScreen'
import SavedScreen from './src/screens/SavedScreen'
import NearbyScreen from './src/screens/NearbyScreen'
import BadgesScreen from './src/screens/BadgesScreen'

import ActiveHome from './src/assets/img/activeHome.svg';
import ActiveSaved from './src/assets/img/activeSaved.svg';
import ActiveNearby from './src/assets/img/activeNearby.svg';
import ActiveBadges from './src/assets/img/activeBadges.svg';
import InactiveHome from './src/assets/img/inactiveHome.svg';
import InactiveSaved from './src/assets/img/inactiveSaved.svg';
import InactiveNearby from './src/assets/img/inactiveNearby.svg';
import InactiveBadges from './src/assets/img/inactiveBadges.svg';

// codigo Duda
const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="Main" component={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarStyle: { height: height *0.075, padding:10, backgroundColor:'white'},
            marginTop: 100,
            headerShown: false
            }}

        >
            <Tab.Screen
                name="Home"
                component={HomepageScreen}
                options={{
                tabBarLabel: ({focused, color, size}) => {
                    if (focused) {
                        return <Text>Home</Text>
                    } else {
                        return <Text></Text>
                    } 
                },
                tabBarIcon: ({ focused, color, size }) => {
                    if (focused) {
                        return <ActiveHome/>
                    } else {
                        return <InactiveHome/>
                    }
                }

                    
                
                }}
            />
            <Tab.Screen
                name="Saved"
                component={SavedScreen} 
                options={{
                    tabBarLabel: ({focused, color, size}) => {
                        if (focused) {
                            return <Text>Saved</Text>
                        } else {
                            return <Text></Text>
                        } 
                    },
                tabBarIcon: ({ focused, color, size,}) => {
                    if (focused) {
                        return <ActiveSaved/>
                    } else {
                        return <InactiveSaved/>
                    }
                }
                }}
            />
            <Tab.Screen
                name="Nearby"
                component={NearbyScreen}
                options={{
                    tabBarLabel: ({focused, color, size}) => {
                        if (focused) {
                            return <Text>Nearby</Text>
                        } else {
                            return <Text></Text>
                        } 
                    },
                tabBarIcon: ({ focused, color, size }) => {
                    if (focused) {
                        return <ActiveNearby/>
                    } else {
                        return <InactiveNearby/>
                    }
                }
                }}
            />
            <Tab.Screen
                name="Badges"
                component={BadgesScreen}
                options={{
                    tabBarLabel: ({focused, color, size}) => {
                        if (focused) {
                            return <Text>Badges</Text>
                        } else {
                            return <Text></Text>
                        } 
                    },
                tabBarIcon: ({ focused, color, size }) => {
                    if (focused) {
                        return <ActiveBadges/>
                    } else {
                        return <InactiveBadges/>
                    }
                }
                }}
            />
        </Tab.Navigator>
    );
  };
