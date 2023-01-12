import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {OnboardingScreen} from './src/screens/OnboardingScreen';
import {LoginScreen} from './src/screens/LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

