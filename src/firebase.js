import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB1Hop4co-MpgN9XGDr8EtOqaQ8cM6eKrc",
    authDomain: "brewdogapi.firebaseapp.com",
    databaseURL: "https://brewdogapi.firebaseio.com",
    projectId: "brewdogapi",
    storageBucket: "brewdogapi.appspot.com",
    messagingSenderId: "198339541144",
    appId: "1:198339541144:web:def8f05cfd21ada78b78ed",
    measurementId: "G-KW0Y2BQ2V7"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = {
  google : new firebase.auth.GoogleAuthProvider(),
  github : new firebase.auth.GithubAuthProvider()
};


export default firebase;