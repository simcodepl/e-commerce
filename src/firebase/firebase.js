import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDdDDLRK2tG-Z7jZ8KrpvLq1z8rXN9Tj2o",
  authDomain: "e-commerce-14361.firebaseapp.com",
  databaseURL: "https://e-commerce-14361.firebaseio.com",
  projectId: "e-commerce-14361",
  storageBucket: "e-commerce-14361.appspot.com",
  messagingSenderId: "1078843845874",
  appId: "1:1078843845874:web:ac62a32ba48ec1523d746b",
  measurementId: "G-3ZC7SGTGGC",
};

firebase.initializeApp(config);

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
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
