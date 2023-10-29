import { useUsername } from "@/contexts/UsernameContext";
import useEnsureUsername from "@/hooks/useEnsureUsername";
import { useRouter } from "next/router";
import { FC } from "react";

const Rooms: FC = () => {
  const router = useRouter();
  const { roomid } = router.query;
  const { username } = useUsername();
  const usernamePrompt = useEnsureUsername();

  if (usernamePrompt) return usernamePrompt;

  return (
    <main>
      <div>
        {!roomid ? (
          <div>Loading...</div>
        ) : (
          <div>
            Welcome, {username} roomid {roomid}
          </div>
        )}
      </div>
    </main>
  );
};

export default Rooms;
