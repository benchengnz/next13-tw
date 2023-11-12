// lib/firebase.js
import { CardData } from "@/components/CardDisplay/CardDisplay";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, update, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const toggleRoomVisibility = async (
  roomId: string,
  currentVisibility: boolean
): Promise<boolean> => {
  const roomRef = ref(db, `rooms/${roomId}`);
  try {
    await update(roomRef, { isVisible: !currentVisibility });
    console.log("Room visibility toggled successfully!");
    return true;
  } catch (error) {
    console.error("Error toggling room visibility: ", error);
    return false;
  }
};

const updateParticipantEstimate = async (
  roomId: string,
  userName: string,
  cardData: CardData
): Promise<void> => {
  const estimateValue = cardData.value;
  const participantRef = ref(
    db,
    `rooms/${roomId}/participants/${userName.toLowerCase()}`
  );

  try {
    await update(participantRef, {
      estimate: estimateValue,
      name: userName,
    });
    console.log(`Estimate updated to ${estimateValue} for user ${userName}`);
  } catch (error) {
    console.error("Error updating participant estimate: ", error);
    throw error; // Re-throw the error so you can handle it in the component
  }
};

const clearEstimates = async (roomId: string): Promise<void> => {
  const participantsRef = ref(db, `rooms/${roomId}/participants`);

  try {
    // Get the current participants' estimates
    const snapshot = await get(participantsRef);
    if (snapshot.exists()) {
      const updates: { [key: string]: string | null } = {};
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        if (key) {
          updates[`${key}/estimate`] = "";
        } // Set estimate to an empty string
      });

      await update(participantsRef, updates);
      console.log(`Estimates cleared for room ${roomId}`);
    }
  } catch (error) {
    console.error("Error clearing estimates: ", error);
    throw error; // Re-throw the error so you can handle it in the component
  }
};

export { db, toggleRoomVisibility, updateParticipantEstimate, clearEstimates };
