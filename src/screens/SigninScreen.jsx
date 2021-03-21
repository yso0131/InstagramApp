import React, { useState } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          value={email}
          placeholder="Email       "
          onChange={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          value={password}
          placeholder="Password"
          secureTextEntry
          keyboardType="default"
          textContentType="password"
          onChange={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <View style={styles.tapbar}>
        <Button
          buttonName="SignIn"
          onPress={() => navigation.navigate('Home')}
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
    top: 70,
    left: 150,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
});
