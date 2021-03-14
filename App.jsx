import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import TopBar from './src/components/TopBar';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <Text>Open up App.js to start working on your app!!!!!!</Text>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
