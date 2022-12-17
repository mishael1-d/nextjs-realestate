import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const saveUserProfile = (user) =>