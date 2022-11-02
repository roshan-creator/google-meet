import firebase from 'firebase/compat/app';
import database from 'firebase/compat/database';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBG5-SQGtEC2iL0QkOnbDJoxw2Wj3tow2U', // Add API Key
  databaseURL:'https://meet-clone1-default-rtdb.asia-southeast1.firebasedatabase.app/' // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

let firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;

