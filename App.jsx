import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TopBar from './src/components/TopBar';
import Post from './src/components/Post';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <Post />
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
