import React, { useState, useEffect } from "react";
import RoomHeader from "../RoomHeader/RoomHeader";
import CardDisplay, { CardData } from "../CardDisplay/CardDisplay";
import ResultList, { Estimate } from "../ResultList/ResultList";
import {
  clearEstimates,
  db,
  toggleRoomVisibility,
  updateParticipantEstimate,
} from "@/lib/firebase";
import { ref, onValue, set } from "firebase/database";
import { RoomData } from "@/types/types";
import useGetRoomData from "@/hooks/useGetRoomData";

type RoomContainerProps = {
  roomId: string; // The ID of the room, could be from the URL or user input
  userName: string; // The name of the user in the room
};

const RoomContainer: React.FC<RoomContainerProps> = ({ roomId, userName }) => {
  // const [roomData, setRoomData] = useState<RoomData | null>(null); // Replace 'any' with your room data type

  const [roomData, error] = useGetRoomData(roomId);
  const participantsArray = roomData
    ? Object.values(roomData.participants)
    : [];

  // // Fetch room data and listen for changes
  // useEffect(() => {
  //   const roomRef = ref(db, `rooms/${roomId}`);
  //   const unsubscribe = onValue(roomRef, (snapshot) => {
  //     const data = snapshot.val();
  //     if (data) {
  //       setRoomData(data);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [roomId]);

  const handleCardSelect = async (card: CardData) => {
    // Update the estimate for the user in Firebase
    // ...
    try {
      await updateParticipantEstimate(roomId, userName, card);
      // No need to update local state since Firebase's onValue will handle it
    } catch (error) {
      // Handle error (e.g., show an error message to the user)
      console.error("Failed to update estimate: ", error);
    }
  };

  const handleClearEstimates = async () => {
    try {
      await clearEstimates(roomId);
    } catch (error) {
      console.error("Failed to clear estimates: ", error);
    }
  };

  const handleToggleVisibility = async () => {
    if (roomData) {
      await toggleRoomVisibility(roomId, roomData.isVisible);
    }
  };

  // If you need more handlers, define them here and pass them down as needed.
  if (!roomData) return <div>Loading room data...</div>;
  console.log(roomData);
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
