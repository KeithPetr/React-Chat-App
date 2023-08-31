// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACzNG3n6d8yZ7mQXPu1SwICUlehheT3Mw",
  authDomain: "react-chat-app-c069c.firebaseapp.com",
  projectId: "react-chat-app-c069c",
  storageBucket: "react-chat-app-c069c.appspot.com",
  messagingSenderId: "36122232486",
  appId: "1:36122232486:web:07717d7e1ac197fe8ed667",
  measurementId: "G-ZXDWWL9G3N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
