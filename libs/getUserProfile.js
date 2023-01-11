import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase-config";

const getUserProfile = async (email) => {
  const docRef = doc(db, "users", `${email}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export default getUserProfile;
