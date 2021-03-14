import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <View style={styles.flametext}>
        <Text style={styles.text}>
          Instagram
        </Text>
      </View>
      <View style={styles.addPost}>
        <Text style={styles.addPostText}>
          +
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 30,
    width: '100%',
    height: 80,
    zIndex: 1,
  },
  flametext: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  addPost: {
    position: 'absolute',
    right: 30,
    bottom: 20,
  },
  addPostText: {
    fontSize: 32,
  },
});
