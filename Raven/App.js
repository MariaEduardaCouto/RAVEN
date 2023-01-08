/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Register} from './src/screens/RegisterScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Create an account'}}
        />
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Log in'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Teste modelo'}}
        />
        <Stack.Screen name="Map" component={Map} options={{title: 'Mapa'}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}