// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIXSWlmQ-w9LcU0RD1R93asKUPvzaa13o",
  authDomain: "csc131g5-532db.firebaseapp.com",
  projectId: "csc131g5-532db",
  storageBucket: "csc131g5-532db.appspot.com",
  messagingSenderId: "310504293759",
  appId: "1:310504293759:web:ccf76eaf96e5a65bd0464a",
  measurementId: "G-W1XW8P73N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app