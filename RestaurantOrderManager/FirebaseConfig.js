// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6zdI_bsfKR7MHtO0iiM1CvBF12EJPlFg",
  authDomain: "hotelmis-70df6.firebaseapp.com",
  projectId: "hotelmis-70df6",
  storageBucket: "hotelmis-70df6.appspot.com",
  messagingSenderId: "820555574403",
  appId: "1:820555574403:web:22ef3d185d10a750f03fb6",
  measurementId: "G-BSL1MB2N8K"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// const analytics = getAnalytics(app);