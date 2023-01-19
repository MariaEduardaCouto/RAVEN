import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomepageScreen} from './src/screens/HomepageScreen';
import {RouteDetailsScreen} from './src/screens/RouteDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
          }}>
        {/* <Stack.Screen
          name="HomepageScreen"
          component={HomepageScreen}
          options={{title: 'Homepage'}}
        /> */}
        <Stack.Screen
        head
          name="RouteDetailsScreen"
          component={RouteDetailsScreen}
          options={{title: 'Route details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
