import UsernameModal from "@/components/UsernameModal/UsernameModal";
import { useUsername } from "@/contexts/UsernameContext";
import { useRouter } from "next/router";
import { FC, useState } from "react";

const Rooms: FC = () => {
  const router = useRouter();
  const { roomid } = router.query;

  const { username } = useUsername();
  const [isModalOpen, setModalOpen] = useState<boolean>(!username);

  return (
    <main>
      <div>
        {!roomid ? (
          <div>Loading...</div>
        ) : isModalOpen ? (
          <UsernameModal onClose={() => setModalOpen(false)} />
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
