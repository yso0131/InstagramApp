import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Mypage() {
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <Text style={styles.accountName}>
          souchenmin
        </Text>
        <Text style={styles.accountPic}>
          ●
        </Text>
        <View style={styles.accountDesc}>
          <Text style={styles.accountDescText}>
            26 years old
            from japan
          </Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.pic}>
            picture
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contentAccount}>
            <Text style={styles.contentAccountText}>
              souchenmin
            </Text>
          </View>
          <View style={styles.post}>
            <Text style={styles.postText}>
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </Text>
          </View>
          <Text style={styles.dateText}>
            2021年3月14日
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    margin: 100,
    width: '100%',
  },
  account: {
    margin: 24,
    alignItems: 'flex-start',
  },
  accountPic: {
    fontSize: 70.0,
  },
  accountName: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  accountDescText: {
    marginTop: 5,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 'auto',
  },
  contentAccountText: {
    fontWeight: 'bold',
  },
  post: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  dateText: {
    fontSize: 12,
  },
  pic: {
    height: 400,
    backgroundColor: 'black',
  },
});
