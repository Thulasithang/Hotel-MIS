import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0NQRjT8r0feUxVYymSqgCYF8Trh-vTGw",
  authDomain: "whotels-6ecba.firebaseapp.com",
  projectId: "whotels-6ecba",
  storageBucket: "whotels-6ecba.appspot.com",
  messagingSenderId: "258795043170",
  appId: "1:258795043170:web:03ba57e646da5405fa943b",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
