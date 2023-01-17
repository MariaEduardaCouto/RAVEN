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

import ActiveHome from './src/assets/img/activeHome.svg';
import ActiveSaved from './src/assets/img/activeSaved.svg';
import ActiveNearby from './src/assets/img/activeNearby.svg';
import ActiveBadges from './src/assets/img/activeBadges.svg';
import InactiveHome from './src/assets/img/inactiveHome.svg';
import InactiveSaved from './src/assets/img/inactiveSaved.svg';
import InactiveNearby from './src/assets/img/inactiveNearby.svg';
import InactiveBadges from './src/assets/img/inactiveBadges.svg';

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
      </NavigationContainer>
    );
  };
