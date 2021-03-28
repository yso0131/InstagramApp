import React, { useEffect } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, ScrollView, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignoutScreen from '../components/SignoutScreen';

export default function HomeScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SignoutScreen />,
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 16 }}
        >
          <Text
            style={styles.textButton}
            onPress={(() => navigation.navigate('AddPost'))}
          >
            +
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.accountContainer}>
        <View style={styles.account}>
          <View style={styles.accountIcon}>
            <Text style={styles.accountIconText}>
              ●
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Account')}
            style={styles.accountName}
          >
            <Text style={styles.accountNameText}>
              souchenmin
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountEdit}>
            <Text style={styles.accountEditName}>
              ・・・
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={styles.pic}
            source={{ uri: 'https://picsum.photos/200/300' }}
          />
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Account')}
            style={styles.contentAccount}
          >
            <Text style={styles.contentAccountText}>
              souchenmin
            </Text>
          </TouchableOpacity>
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
      <View style={styles.accountContainer}>
        <View style={styles.account}>
          <View style={styles.accountIcon}>
            <Text style={styles.accountIconText}>
              ●
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Account')}
            style={styles.accountName}
          >
            <Text style={styles.accountNameText}>
              ABCkun
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountEdit}>
            <Text style={styles.accountEditName}>
              ・・・
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={styles.pic}
            source={{ uri: 'https://picsum.photos/200/300' }}
          />
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Account')}
            style={styles.contentAccount}
          >
            <Text style={styles.contentAccountText}>
              ABCkun
            </Text>
          </TouchableOpacity>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 1,
    flex: 1,
    marginBottom: 40,
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
  textButton: {
    fontSize: 30,
  },
});
