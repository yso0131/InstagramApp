import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function SignoutScreen() {
  const navigation = useNavigation();
  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Signin' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(200, 200, 200, 0.9)',
  },
});
