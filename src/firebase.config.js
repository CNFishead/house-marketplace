// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBevzB2q9eg7t_XGfCLTb8m-6018pvEKZs",
  authDomain: "house-martetplace-app.firebaseapp.com",
  projectId: "house-martetplace-app",
  storageBucket: "house-martetplace-app.appspot.com",
  messagingSenderId: "1078125478333",
  appId: "1:1078125478333:web:22b5ca8f992ccd622b92d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
