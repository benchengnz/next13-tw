import RoomContainer from "@/components/RoomContainer/RoomContainer";
import Spinner from "@/components/Spinner/Spinner";
import { useUsername } from "@/contexts/UsernameContext";
import useEnsureUsername from "@/hooks/useEnsureUsername";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const Rooms: FC = () => {
  const router = useRouter();
  const { roomid } = router.query;
  const roomIdValue = Array.isArray(roomid) ? roomid[0] : roomid;
  const { username } = useUsername();
  const usernamePrompt = useEnsureUsername();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkRoomExists = async () => {
      if (!roomIdValue) {
        router.push("/"); // Redirect to the home page
        return;
      }

      try {
        const response = await fetch(
          `/api/checkRoomExists?roomId=${roomIdValue}`
        );
        if (!response.ok) {
          router.push("/");
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Network error: ", err);
      }
    };

    checkRoomExists();
  }, [router, roomIdValue]);

  if (isLoading) {
    return <Spinner caption="Loading" />;
  }
  if (usernamePrompt) return usernamePrompt;

  return (
    <main>
      <div className="max-w-3xl mx-auto mt-2">
        <RoomContainer
          roomId={roomIdValue as string}
          userName={username as string}
        />
      </div>
    </main>
  );
};

export default Rooms;
