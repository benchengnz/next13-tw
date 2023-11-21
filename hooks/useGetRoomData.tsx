import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RoomData } from "@/types/types";

const useFirebaseRoomData = (roomId: string) => {
  const [roomData, setRoomData] = useState<RoomData | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const firebaseEmail = process.env.FIREBASE_EMAIL;
    const firebasePassword = process.env.FIREBASE_PASSWORD;
    if (!firebaseEmail || !firebasePassword) {
      console.error(
        "Firebase credentials are not set in environment variables"
      );
      return;
    }
    // Authenticate
    const auth = getAuth();
    signInWithEmailAndPassword(auth, firebaseEmail, firebasePassword)
      .then(() => {
        // Authenticated, now fetch room data
        const db = getDatabase();
        const roomRef = ref(db, `rooms/${roomId}`);
        return onValue(roomRef, (snapshot) => {
          const data = snapshot.val() as RoomData;
          setRoomData(data);
        });
      })
      .catch((error) => {
        console.error("Authentication failed:", error);
        setError(error);
      });
  }, [roomId]);

  return [roomData, error];
};

export default useFirebaseRoomData;
