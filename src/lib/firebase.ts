
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABDvNF-vICO7eLon3BNQsPbmrp4O8bj5Q",
  authDomain: "icancookauth.firebaseapp.com",
  projectId: "icancookauth",
  storageBucket: "icancookauth.firebasestorage.app",
  messagingSenderId: "831651857823",
  appId: "1:831651857823:web:96e76943fab48eb1a969aa",
  measurementId: "G-M1KC8ZVEKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
