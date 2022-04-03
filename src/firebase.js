// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXm8hr29NBU4620zRgpuJjTWBYp-PNVG0",
  authDomain: "twitterclone-d2d78.firebaseapp.com",
  projectId: "twitterclone-d2d78",
  storageBucket: "twitterclone-d2d78.appspot.com",
  messagingSenderId: "796406078477",
  appId: "1:796406078477:web:0840a09c17bc511e658944",
  measurementId: "G-6MQGXGKBXT"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = firebaseApp.firestore();

export default db;