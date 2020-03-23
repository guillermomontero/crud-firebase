import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9ztEhnBQIa0xqlAOUOWp-coIXSmV1fhk",
  authDomain: "crud-firebase-2ab21.firebaseapp.com",
  databaseURL: "https://crud-firebase-2ab21.firebaseio.com",
  projectId: "crud-firebase-2ab21",
  storageBucket: "crud-firebase-2ab21.appspot.com",
  messagingSenderId: "823607992384",
  appId: "1:823607992384:web:720ef15cc4bb8021f1ffa5",
  measurementId: "G-0B4EL86ZH3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore()

export default firebaseApp.firestore()