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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export default firebase;
