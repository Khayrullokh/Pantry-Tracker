// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO8olpP2ItVginlCQMsdhD0hnKlA8EnSM",
  authDomain: "inventory-management-app-a630d.firebaseapp.com",
  projectId: "inventory-management-app-a630d",
  storageBucket: "inventory-management-app-a630d.appspot.com",
  messagingSenderId: "84036398071",
  appId: "1:84036398071:web:692393ce0859e879fe9cf2",
  measurementId: "G-Z54B84Y3LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {app, firestore};