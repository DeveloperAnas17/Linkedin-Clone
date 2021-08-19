import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNjocGfFkZSanEPGCR8srmbla_9GkiiQs",
  authDomain: "linkedin-clone-5f366.firebaseapp.com",
  projectId: "linkedin-clone-5f366",
  storageBucket: "linkedin-clone-5f366.appspot.com",
  messagingSenderId: "594875779631",
  appId: "1:594875779631:web:63edf66c7b2aca74e114da",
  measurementId: "G-7KXDVN7WKP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
