import { doc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebase-config";

const saveUserProfile = async (
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  role
) => {
  try {
    // add this user to the users doc on the firestore database
    await setDoc(doc(db, "users", `${email}`), {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      role,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default saveUserProfile;
