import { collection, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const saveUserProfile = async (fname,
  lname,
  email,
  password,
  phoneNumber1,
  phoneNumber2,) => {
  try {
    // add this user to the users collection on the firestore database
    await setDoc(collection(db, "users"), {
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

export default saveUserProfile;
