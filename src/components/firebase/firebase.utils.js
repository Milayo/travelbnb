import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getDoc } from "firebase/firestore";


const config = {
  apiKey: "AIzaSyC6Sfx4Ex_gCZpaWOR3cAEjOjoJy3wUwBI",
  authDomain: "travelbnb-7f013.firebaseapp.com",
  projectId: "travelbnb-7f013",
  storageBucket: "travelbnb-7f013.appspot.com",
  messagingSenderId: "108383422887",
  appId: "1:108383422887:web:e310ef9146f717cd658e82",
  measurementId: "G-PBBN1K7HLS",
};

export const createUserProfileDocument = async (userAuth, displayName) => {
  if (!userAuth) return;

  const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exist) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        displayName
      })
    } catch (error) {
      console.log("error creating a new user", error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
