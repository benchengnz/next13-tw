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
import Spinner from "../Spinner/Spinner";

type RoomContainerProps = {
  roomId: string; // The ID of the room, could be from the URL or user input
  userName: string; // The name of the user in the room
};

const RoomContainer: React.FC<RoomContainerProps> = ({ roomId, userName }) => {
  const [roomData, error] = useGetRoomData(roomId);
  const participantsArray = roomData
    ? Object.values(roomData.participants || {})
    : [];

  const handleCardSelect = async (card: CardData) => {
    try {
      await updateEstimate({
        roomId: roomId,
        userName: userName,
        cardValue: card.value,
      });
      // Handle success if necessary
    } catch (error) {
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
      try {
        await toggleRoomVisibilityAPI({
          roomId,
          currentVisibility: roomData.isVisible,
        });
      } catch (err) {
        console.error(err);
      }
    }
  };
  if (error) return <div>Error loading room data..</div>;

  if (!roomData) return <Spinner size={100} caption="loading..." />;
  return (
    <>
      <RoomHeader roomName={roomData?.name} userName={userName} currentUrl="" />
      <CardDisplay onSelect={handleCardSelect} />
      <ResultList
        estimates={participantsArray}
        onClearEstimates={handleClearEstimates}
        onToggleVisibility={handleToggleVisibility}
        isVisible={roomData?.isVisible}
      />
    </>
  );
};

type UpdateEstimateProps = {
  roomId: string;
  userName: string;
  cardValue: string;
};

const updateEstimate = async ({
  roomId,
  userName,
  cardValue,
}: UpdateEstimateProps) => {
  const response = await fetch("/api/updateEstimate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      roomId: roomId,
      userName: userName,
      estimateValue: cardValue,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update estimate");
  }

  // Optionally handle and return the response data
  return response.json();
};

type toggleRoomVisibilityAPIProps = {
  roomId: string;
  currentVisibility: boolean;
};
const toggleRoomVisibilityAPI = async ({
  roomId,
  currentVisibility,
}: toggleRoomVisibilityAPIProps) => {
  const response = await fetch("/api/toggleRoomVisibility", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      roomId,
      currentVisibility,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to toggle room visibility");
  }

  const result = await response.json();
  return result;
};

export default RoomContainer;
