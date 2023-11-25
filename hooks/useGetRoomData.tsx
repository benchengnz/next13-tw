import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { FirebaseError } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { RoomData } from "@/types/types";

const useGetRoomData = (
  roomId: string
): [RoomData | null, FirebaseError | null] => {
  const [roomData, setRoomData] = useState<RoomData | null>(null);
  const [error, setError] = useState<FirebaseError | null>(null);

  useEffect(() => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
        // Authenticated, now fetch room data
        const db = getDatabase();
        const roomRef = ref(db, `rooms/${roomId}`);
        return onValue(roomRef, (snapshot) => {
          const data = snapshot.val() as RoomData;
          setRoomData(data);
        });
      })
      .catch((error: FirebaseError) => {
        console.error("Authentication failed:", error.message);
        setError(error);
      });
  }, [roomId]);

  return [roomData, error];
};

export default useGetRoomData;
