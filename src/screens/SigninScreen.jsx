import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Alert,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import Button from '../components/Button';

export default function SigninScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
    });
    return unsubscribe;
  }, []);

  function handlePress() {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch((error) => {
        Alert.alert(error.code);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          value={email}
          placeholder="Email       "
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.inputText}
          value={password}
          placeholder="Password"
          secureTextEntry
          keyboardType="default"
          textContentType="password"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <View style={styles.tapbar}>
        <Button
          buttonName="Login"
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    position: 'absolute',
    top: 90,
    left: 100,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
  },
  inputText: {
    width: '100%',
    fontSize: 24,
    marginBottom: 5,
  },
  tapbar: {
    marginTop: 10,
  },
});
