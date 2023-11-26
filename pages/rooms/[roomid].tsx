import RoomContainer from "@/components/RoomContainer/RoomContainer";
import { useUsername } from "@/contexts/UsernameContext";
import useEnsureUsername from "@/hooks/useEnsureUsername";
import { useRouter } from "next/router";
import { FC } from "react";

const Rooms: FC = () => {
  const router = useRouter();
  const { roomid } = router.query;
  const roomIdValue = Array.isArray(roomid) ? roomid[0] : roomid;
  const { username } = useUsername();
  const usernamePrompt = useEnsureUsername();

  if (!roomid) {
    console.log("no roomid yet.");
  } else console.log(`room id is ${roomid}`);

  if (usernamePrompt) return usernamePrompt;

  return (
    <main>
      <div className="max-w-3xl mx-auto">
        {!roomid ? (
          <div>Loading...</div>
        ) : (
          <div>
            <RoomContainer
              roomId={roomIdValue as string}
              userName={username as string}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Rooms;
