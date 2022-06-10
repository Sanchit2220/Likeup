import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAimU9zu8_i8atBNrIRRK3aybi6KbXvsDg",
    authDomain: "rockit-1fc0b.firebaseapp.com",
    projectId: "rockit-1fc0b",
    storageBucket: "rockit-1fc0b.appspot.com",
    messagingSenderId: "143018859566",
    appId: "1:143018859566:web:e89ed8c2b7b5b24c6fd3bf"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()