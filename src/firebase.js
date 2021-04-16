import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAJyLPAbaViRPgF-QSzuwPvyXNrm1v76T0",
  authDomain: "healdevs-59f06.firebaseapp.com",
  projectId: "healdevs-59f06",
  storageBucket: "healdevs-59f06.appspot.com",
  messagingSenderId: "410920463533",
  appId: "1:410920463533:web:3be923d063ff5d20b26a24"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();