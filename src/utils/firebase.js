// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkK5kFFsP4o6PTit7Xkspcvbd_fKacKt4",
  authDomain: "netflixgpt-b3142.firebaseapp.com",
  projectId: "netflixgpt-b3142",
  storageBucket: "netflixgpt-b3142.appspot.com",
  messagingSenderId: "39170580472",
  appId: "1:39170580472:web:ea80f55a8356b3b6d4000d",
  measurementId: "G-EM47J4R71B"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();