import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUJ5kOs0BJhdgH6M8DGcd6QzVHkrmWDVY",
  authDomain: "letmeask-3a91b.firebaseapp.com",
  databaseURL: "https://letmeask-3a91b-default-rtdb.firebaseio.com",
  projectId: "letmeask-3a91b",
  storageBucket: "letmeask-3a91b.appspot.com",
  messagingSenderId: "466227364074",
  appId: "1:466227364074:web:e83ba6a3e91bb482df1793",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
