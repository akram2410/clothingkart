import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqiLyK6icJUWpfO9eLOc1oe4vPFpew88Y",
  authDomain: "shoppin-1058b.firebaseapp.com",
  databaseURL: "https://shoppin-1058b.firebaseio.com",
  projectId: "shoppin-1058b",
  storageBucket: "shoppin-1058b.appspot.com",
  messagingSenderId: "1087730439454",
  appId: "1:1087730439454:web:b94ce26de4f4d512ade50f",
  measurementId: "G-NH58RSNKKS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
