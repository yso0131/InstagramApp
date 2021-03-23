import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';
import HomeScreen from './src/screens/HomeScreem';
import Account from './src/screens/Account';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { firebaseConfig } from './env';

const Stack = createStackNavigator();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signin"
        screenOptions={{
          headerStyle: { backgroundColor: 'papayawhip' },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Instagram' }} />
        <Stack.Screen name="Account" component={Account} options={{ title: 'Instagram' }} />
        <Stack.Screen name="Signin" component={SigninScreen} options={{ title: 'Instagram' }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Instagram' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
