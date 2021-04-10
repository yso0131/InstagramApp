import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ListItem,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import SignoutScreen from '../components/SignoutScreen';

export default function Account() {
  const navigation = useNavigation();
  const [names, setNames] = useState([]);
  console.log(names);
  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/posts`);
    ref.onSnapshot((snapshot) => {
      const userData = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        userData.push({
          id: doc.id,
          accountName: data.accountName,
          comment: data.comment,
          pictureUrl: data.pictureUrl,
        });
        setNames(userData);
      });
    });
  }, []);
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
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={names}
        renderItem={({ item }) => (
          <ListItem
            accountName={item.accountName}
            comment={item.comment}
            pictureUrl={item.pictureUrl}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {names.map((name) => (
        <View>
          <View
            key={name.id}
            style={styles.account}
          >
            <Text style={styles.accountPic}>
              ●
            </Text>
            <View style={styles.namePlace}>
              <Text style={styles.accountName}>
                {name.accountName}
              </Text>
            </View>
          </View>
          <View style={styles.pofile}>
            <Text style={styles.pofileText}>Profile</Text>
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
                  {name.accountName}
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
      ))}
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
    padding: 10,
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
  namePlace: {
    justifyContent: 'center',
    marginLeft: 30,
  },
  pofile: {
    marginLeft: 10,
  },
  pofileText: {
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 30,
  },
});
