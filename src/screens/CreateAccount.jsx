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
import { useDispatch } from 'react-redux';
import { createName } from '../../store/actions/user';

export default function CreateAccount() {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [accountName, setAccountName] = useState('');
  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/posts`);
    ref.add({
      noneed: accountName,
    })
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
        { dispatch(createName({ ownname: accountName })) }
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
        value={accountName}
        onChangeText={(text) => (
          setAccountName(text)
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
