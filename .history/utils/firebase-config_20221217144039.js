import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAWztZFFveMW9ffJufkqhhonBiNwUcsGxU",
  authDomain: "real-estate-bec31.firebaseapp.com",
  projectId: "real-estate-bec31",
  storageBucket: "real-estate-bec31.appspot.com",
  messagingSenderId: "963375097314",
  appId: "1:963375097314:web:7908b919f6bd6ce1d785bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore