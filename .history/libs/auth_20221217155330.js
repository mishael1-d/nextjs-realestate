import { auth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {toast} from ""

export const register = async (email, password, confirmPassword) => {
  if (password !== confirmPassword) {
    return toast
  }
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};