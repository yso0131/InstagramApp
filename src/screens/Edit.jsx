import React, { useEffect } from 'react';
import {
    View,
    Text,
    Img,
    Alert,
} from 'react-native';
import firebase from 'firebase';
import 'firebase/storage';

export default function Edit() {
    useEffect(() => {
        const { currentUser } = firebase.auth();
        const starsRef = firebase.storage().ref().child(`images/${currentUser.uid}`);
        starsRef.getDownloadURL().then((url) => {
            Alert.alert(url);
            console.log(url);
            // Insert url into an <img> tag to "download"
        }).catch((error) => {
            console.log(error);
        });
    });
    return (
        <View>
            <Text>Test</Text>
        </View>
    );
}
