import React, { useState, useEffect } from "react";
import RoomHeader from "../RoomHeader/RoomHeader";
import CardDisplay, { CardData } from "../CardDisplay/CardDisplay";
import ResultList, { Estimate } from "../ResultList/ResultList";
import { db } from "@/lib/firebase";
import { ref, onValue, set } from "firebase/database";

type RoomContainerProps = {
  roomId: string; // The ID of the room, could be from the URL or user input
  userName: string; // The name of the user in the room
};

type Participant = {
  estimate: string;
  name: string;
};

type RoomData = {
  isVisible: boolean;
  name: string;
  owner: string;
  participants: { [key: string]: Participant };
};

const RoomContainer: React.FC<RoomContainerProps> = ({ roomId, userName }) => {
  const [roomData, setRoomData] = useState<RoomData | null>(null); // Replace 'any' with your room data type

  const participantsArray = roomData
    ? Object.values(roomData.participants)
    : [];

  // Fetch room data and listen for changes
  useEffect(() => {
    const roomRef = ref(db, `rooms/${roomId}`);
    const unsubscribe = onValue(roomRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setRoomData(data);
      }
    });

    return () => unsubscribe();
  }, [roomId]);

  const handleCardSelect = (card: CardData) => {
    // Update the estimate for the user in Firebase
    // ...
    console.log(card);
  };

  const handleClearEstimates = () => {
    // Logic to clear estimates in Firebase
    // ...
  };

  const handleToggleVisibility = () => {
    // Toggle the visibility of the estimates in Firebase
    // ...
  };

  // If you need more handlers, define them here and pass them down as needed.
  if (!roomData) return <div>Loading room data...</div>;
  return (
    <div>
      <RoomHeader roomName={roomData?.name} userName={userName} currentUrl="" />
      <CardDisplay onSelect={handleCardSelect} />
      <ResultList
        estimates={participantsArray}
        onClearEstimates={handleClearEstimates}
        onToggleVisibility={handleToggleVisibility}
        isVisible={roomData?.isVisible}
      />
    </div>
  );
};

export default RoomContainer;
