import { auth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

export const register = async (email, password, confirmPassword) => {
  if (password !== confirmPassword) {
    return toast.error("Passwords do not match");
  } else {
    return createUserWithEmailAndPassword(auth, email, password);
  }
};

export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
