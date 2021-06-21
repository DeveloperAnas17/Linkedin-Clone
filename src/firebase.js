import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCP7F2tDVbTgvPVPt15ePnU4KaRP5bEu1U",
  authDomain: "linkedin-clone-4efcc.firebaseapp.com",
  projectId: "linkedin-clone-4efcc",
  storageBucket: "linkedin-clone-4efcc.appspot.com",
  messagingSenderId: "334625886971",
  appId: "1:334625886971:web:e058d41cbb2172826a565e",
  measurementId: "G-V04FRFVVP5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
