import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDcogt5BtHDjNRfvrolpgkVSzinya5Maa4",
  authDomain: "clone-ac6d8.firebaseapp.com",
  databaseURL: "https://clone-ac6d8.firebaseio.com",
  projectId: "clone-ac6d8",
  storageBucket: "clone-ac6d8.appspot.com",
  messagingSenderId: "50957798549",
  appId: "1:50957798549:web:38e940a51a0f73ffd29f9c",
  measurementId: "G-55BYR14YBH"

});


const auth = firebase.auth();

export { auth };