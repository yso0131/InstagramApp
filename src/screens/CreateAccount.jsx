import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import firebase from 'firebase';
import 'firebase/storage';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

export default function CreateAccount() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/posts`);
    ref.add({
      accountName: name,
    })
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>アカウントの名前を決めましょう</Text>
      <TextInput
        style={styles.accountInput}
        value={name}
        onChangeText={(text) => (
          setName(text)
        )}
        autoFocus
      />
      <Button
        onPress={handlePress}
        buttonName="決まり"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  containerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  accountInput: {
    marginTop: 32,
    fontSize: 20,
    width: 300,
  },
});
