import { initializeApp } from "firebase/app";
import "firebase/compat/database";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS3fsOyidsiaykDtpnNJ9huiYQAJ_K1Qc",
  authDomain: "nike-61c0b.firebaseapp.com",
  projectId: "nike-61c0b",
  storageBucket: "nike-61c0b.appspot.com",
  messagingSenderId: "601447425565",
  appId: "1:601447425565:web:96c9ba750b7bec0c4c08f4",
  measurementId: "G-VGK0M2W0G6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const dataRef = firebase.database()