import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4EeJt8cgGfaPANQLtTDJxim82pnk3Uic",
  authDomain: "clone-d9ae9.firebaseapp.com",
  databaseURL: "https://clone-d9ae9.firebaseio.com",
  projectId: "clone-d9ae9",
  storageBucket: "clone-d9ae9.appspot.com",
  messagingSenderId: "136231502651",
  appId: "1:136231502651:web:468e3125f5cb1e4c046d1e",
  measurementId: "G-835CCZDP3R",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {  auth };
