import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const saveUserProfile = async (user) => {
  try {
    // add this user to the users collection on the firestore database
    await addDoc(collection(db, "users"), {
      fname,
      lname,
      email,
      password,
      phoneNumber1,
      phoneNumber2,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
