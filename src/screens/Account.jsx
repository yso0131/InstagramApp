import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

export default function Account() {
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <Text style={styles.accountPic}>
          ●
        </Text>
        <Text style={styles.accountName}>
          souchenmin
        </Text>
      </View>
      <View style={styles.accountDesc}>
        <Text style={styles.accountDescText}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua
        </Text>
      </View>
      <View>
        <View>
          <Image
            style={styles.pic}
            source={{ uri: 'https://picsum.photos/200/300' }}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentAccount}>
            <Text style={styles.contentAccountText}>
              souchenmin
            </Text>
          </View>
          <View style={styles.post}>
            <Text style={styles.postText}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
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
    width: '100%',
  },
  account: {
    zIndex: 1,
    margin: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  accountPic: {
    fontSize: 70,
  },
  accountName: {
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'flex-start',
  },
  accountDescText: {
    paddingBottom: 10,
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
  },
});
