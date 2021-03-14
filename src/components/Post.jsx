import React from 'react';
import {
  StyleSheet, Text, View, TouchableHighlight, ScrollView,
} from 'react-native';

export default function Post() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.accountContainer}>
        <View style={styles.account}>
          <View style={styles.accountIcon}>
            <Text style={styles.accountIconText}>
              ●
            </Text>
          </View>
          <TouchableHighlight style={styles.accountName}>
            <Text style={styles.accountNameText}>
              souchenmin
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.accountEdit}>
            <Text style={styles.accountEditName}>
              ・・・
            </Text>
          </TouchableHighlight>
        </View>
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
      <View style={styles.accountContainer}>
        <View style={styles.account}>
          <View style={styles.accountIcon}>
            <Text style={styles.accountIconText}>
              ●
            </Text>
          </View>
          <TouchableHighlight style={styles.accountName}>
            <Text style={styles.accountNameText}>
              souchenmin
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.accountEdit}>
            <Text style={styles.accountEditName}>
              ・・・
            </Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text style={styles.pic}>
            picture
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contentAccount}>
            <Text style={styles.contentAccountText}>
              ABCkun
            </Text>
          </View>
          <View style={styles.post}>
            <Text style={styles.postText}>
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBB
              BBBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
            </Text>
          </View>
          <Text style={styles.dateText}>
            2021年3月14日
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    width: '100%',
    flexGrow: 1,
    flex: 1,
  },
  account: {
    flexDirection: 'row',
    marginRight: 5,
  },
  accountIcon: {
    marginRight: 5,
  },
  accountIconText: {
    fontSize: 48,
  },
  accountNameText: {
    fontWeight: 'bold',
  },
  accountName: {
    justifyContent: 'center',
    marginRight: 200,
  },
  accountEdit: {
    justifyContent: 'center',
    padding: 10,
  },
  accountEditName: {
    alignSelf: 'flex-end',
  },
  pic: {
    height: 400,
    backgroundColor: 'black',
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
});
