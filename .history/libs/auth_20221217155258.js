import { auth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const register = async (email, password, confirmPassword) => {
  if (condition) {
    
  }
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};