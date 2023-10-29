import { useUsername } from "@/contexts/UsernameContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useCreateRoom = () => {
  const { username } = useUsername();
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [creationStatus, setCreationStatus] = useState("idle"); // idle | creating | done | error

  useEffect(() => {
    if (username && !isCreating) {
      setIsCreating(true);
      setCreationStatus("creating");
      // ... (room creation logic)
      // On success:
      // setCreationStatus('done');
      // On error:
      // setCreationStatus('error');
    }
  }, [isCreating, username]);

  return { creationStatus };
};

export default useCreateRoom;
