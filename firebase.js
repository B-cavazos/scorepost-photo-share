// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2f-QO9MGj1jHlNchZ5qwrfRMusLwl7VU",
  authDomain: "scorepost.firebaseapp.com",
  projectId: "scorepost",
  storageBucket: "scorepost.appspot.com",
  messagingSenderId: "597618732374",
  appId: "1:597618732374:web:b73666342c087264a13af7",
  measurementId: "G-S8XCFE9L2N"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};