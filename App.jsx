import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TopBar from './src/components/TopBar';
import Post from './src/screens/Post';
import Mypage from './src/screens/Mypage';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <Mypage />
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    marginBottom: 24,
  },
});
