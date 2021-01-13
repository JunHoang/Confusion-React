import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA8jKLauNdLHyVHQfNajW-qQ_xCl1y2xc4",
    authDomain: "confusionserver-be10b.firebaseapp.com",
    databaseURL: "https://confusionserver-be10b.firebaseio.com",
    projectId: "confusionserver-be10b",
    storageBucket: "confusionserver-be10b.appspot.com",
    messagingSenderId: "146409356699",
    appId: "1:146409356699:web:451fb81f318b252e13b53e",
    measurementId: "G-ZCHW2NY0NV"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const fireauth = firebase.auth;

const settings = {timestampsInSnapshots: true};
firebase.firestore().settings(settings);
export const firestore = firebase.firestore();

export const firebasestore = firebase.firestore;