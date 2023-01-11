import { auth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";

const provider = new GoogleAuthProvider();

export const register = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => console.log(result))
    .catch((err) => {
      if (err.code === "auth/popup-closed-by-user") {
        toast.error("Login cancelled by user");
      }
    });
};
