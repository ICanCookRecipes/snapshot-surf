
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXeZA_E4lO4UOBDEOMlPIMRpCFZcZIvTw",
  authDomain: "icancook-app.firebaseapp.com",
  projectId: "icancook-app",
  storageBucket: "icancook-app.appspot.com",
  messagingSenderId: "395929896312",
  appId: "1:395929896312:web:95e9f448581090d0c0d6b3",
  measurementId: "G-219DMP2SMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
