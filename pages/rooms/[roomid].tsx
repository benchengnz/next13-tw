import { useRouter } from "next/router";
import { FC } from "react";

const Rooms: FC = () => {
  const router = useRouter();
  const { roomid } = router.query;

  return (
    <main>
      {!roomid ? <div>Loading...</div> : <div>my roomid {roomid}</div>}
    </main>
  );
};

export default Rooms;
