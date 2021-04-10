import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firebase from 'firebase';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreem';
import Account from './src/screens/Account';
import AddPost from './src/screens/AddPost';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import CreateAccount from './src/screens/CreateAccount';
import 'firebase/storage';
import { firebaseConfig } from './env';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Signup"
    screenOptions={{
      // headerStyle: { backgroundColor: 'papayawhip' },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Instagram' }} />
    <Stack.Screen name="Signin" component={SigninScreen} options={{ title: 'Instagram' }} />
    <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Instagram' }} />
    <Stack.Screen name="AddPost" component={AddPost} options={{ title: 'Instagram' }} />
    <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: 'Instagram' }} />
    <Stack.Screen name="Account" component={Account} options={{ title: 'Instagram' }} />
  </Stack.Navigator>
);

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Account') {
      iconName = 'snowman';
    }

    // You can return any component that you like here!
    return <FontAwesome5 name={iconName} size={size} color={color} />;
  },
});

const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={Account} options={{ title: 'Instagram' }} />
  </Stack.Navigator>
);
require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Account" component={AccountStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
