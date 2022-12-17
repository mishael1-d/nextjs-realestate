import { auth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const register = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  return signIn(auth, email, password);
};