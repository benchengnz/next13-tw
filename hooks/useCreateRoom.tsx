import { useState, useEffect, useRef } from "react";
import { useUsername } from "@/contexts/UsernameContext";
import router from "next/router";

export type CreationStatus = "idle" | "creating" | "done" | "error";

const useCreateRoom = () => {
  const { username } = useUsername();
  const [creationStatus, setCreationStatus] = useState<CreationStatus>("idle");
  const creationStarted = useRef(false);

  useEffect(() => {
    if (!username || creationStatus !== "idle" || creationStarted.current) {
      return;
    }

    creationStarted.current = true;
    setCreationStatus("creating");

    const createRoom = async () => {
      try {
        const response = await fetch("/api/createRoom", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            roomName: `${username}'s room`,
            owner: username,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json(); // Assuming the response contains the roomId
        router.push(`/rooms/${data.roomId}`); // Navigate to the new room page

        setCreationStatus("done");
      } catch (error) {
        console.error("Failed to create room:", error);
        setCreationStatus("error");
      } finally {
        creationStarted.current = false;
      }
    };

    createRoom();
  }, [creationStatus, username]); // Only username is a dependency

  return { creationStatus };
};

export default useCreateRoom;
