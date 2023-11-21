import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getEvent = async (userId) => {
    try {
        const docRef = doc(db, "items", userId);
        const docSnap = await getDoc(docRef);
    } catch (error) {
      console.error("Error in getEvent: ", error);
    }
  };