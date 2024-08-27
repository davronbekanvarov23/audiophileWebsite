// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANSFWmY-w6RAV8us_tmj2oL7f-baLOrfE",
  authDomain: "myaudio-b62d3.firebaseapp.com",
  projectId: "myaudio-b62d3",
  storageBucket: "myaudio-b62d3.appspot.com",
  messagingSenderId: "1090884083468",
  appId: "1:1090884083468:web:c5f01b44ea49b0402d7329",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);
