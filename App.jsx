import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';
import HomeScreen from './src/screens/HomeScreem';
import Account from './src/screens/Account';
import LoginScreen from './src/screens/LoginScreen';
import SigninScreen from './src/screens/SigninScreen';

const Stack = createStackNavigator();
const firebaseConfig = {
  apiKey: 'AIzaSyAtD4eByvMDUkyLrqb8RYltAsDZ1VC7MxY',
  authDomain: 'instagramapp-8a984.firebaseapp.com',
  projectId: 'instagramapp-8a984',
  storageBucket: 'instagramapp-8a984.appspot.com',
  messagingSenderId: '870360530155',
  appId: '1:870360530155:web:9658b3e3efc3c2412592ae',
};
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
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Instagram' }} />
        <Stack.Screen name="Signin" component={SigninScreen} options={{ title: 'Instagram' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
