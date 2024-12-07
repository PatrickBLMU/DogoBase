import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1HUIAboBUnn_HNRCJZrABf1en4OkPqWQ",
  authDomain: "doggo-fb5ed.firebaseapp.com",
  projectId: "doggo-fb5ed",
  storageBucket: "doggo-fb5ed.firebasestorage.app",
  messagingSenderId: "209512549933",
  appId: "1:209512549933:web:e0e4d4002a8bb314ad72a4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);