import { useUsername } from "@/contexts/UsernameContext";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { ref, set, push, child } from "firebase/database";
import { db } from "@/lib/firebase";

export type CreationStatus = "idle" | "creating" | "done" | "error";

const useCreateRoom = () => {
  const { username } = useUsername();
  const router = useRouter();
  const [creationStatus, setCreationStatus] = useState<CreationStatus>("idle"); // idle | creating | done | error
  const hasStartedCreation = useRef(false);

  console.log("usecreateroom rendering ");
  useEffect(() => {
    if (username && !hasStartedCreation.current) {
      hasStartedCreation.current = true;
      setCreationStatus("creating");

      // Define the new room object
      const newRoom = {
        name: `${username}'s room`,
        isVisible: false,
        owner: `${username}`,
      };

      // Push the new room to Firebase to get a unique room ID
      const roomRef = push(ref(db, "rooms"));
      set(roomRef, newRoom)
        .then(() => {
          // Use the username as the key for the participant in the participants collection
          return set(child(roomRef, `participants/${username}`), {
            estimate: "",
            name: `${username}`,
          });
        })
        .then(() => {
          setCreationStatus("done");
          router.push(`/rooms/${roomRef.key}`);
        })
        .catch((error) => {
          setCreationStatus("error");
        })
        .finally(() => {
          hasStartedCreation.current = false;
        });
    }
  }, [router, username]);

  return { creationStatus };
};

export default useCreateRoom;
