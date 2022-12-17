import { auth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const register = async()=>{
    return createUserWithEmailAndPassword(auth)
}