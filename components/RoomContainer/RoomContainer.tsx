import React, { useEffect } from "react";
import "@/lib/firebase";
import RoomHeader from "../RoomHeader/RoomHeader";

import CardDisplay, { CardData } from "../CardDisplay/CardDisplay";
import ResultList from "../ResultList/ResultList";
import useGetRoomData from "@/hooks/useGetRoomData";
import Spinner from "../Spinner/Spinner";

type RoomContainerProps = {
  roomId: string; // The ID of the room, could be from the URL or user input
  userName: string; // The name of the user in the room
  avatar?: string | null;
};

const RoomContainer: React.FC<RoomContainerProps> = ({
  roomId,
  userName,
  avatar,
}) => {
  const [roomData, error] = useGetRoomData(roomId);
  const participantsArray = roomData
    ? Object.values(roomData.participants || {})
    : [];

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    const removeParticipant = () => {
      // Fire-and-forget fetch request
      fetch("/api/removeParticipant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomId, userName }),
      }).catch((error) => console.error("Error removing participant:", error));
    };

    const handleBeforeUnload = () => {
      // Synchronous logic here (async not reliable)
      removeParticipant(); // Fire-and-forget
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function for when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      removeParticipant(); // Fire-and-forget
    };
  }, [roomId, userName]);

  const handleCardSelect = async (card: CardData) => {
    try {
      await updateEstimate({
        roomId: roomId,
        userName: userName,
        cardValue: card.value,
      });
    } catch (error) {
      console.error("Failed to update estimate: ", error);
    }
  };

  const handleClearEstimates = async () => {
    await clearEstimates({ roomId });
  };

  const handleToggleVisibility = async () => {
    if (roomData) {
      try {
        await toggleRoomVisibility({
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
      <RoomHeader
        roomName={roomData?.name}
        userName={userName}
        currentUrl={currentUrl}
        avatar={avatar}
      />
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
  avatar?: string | null;
};

const updateEstimate = async ({
  roomId,
  userName,
  cardValue,
  avatar,
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
      avatar: avatar,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update estimate");
  }

  // Optionally handle and return the response data
  return response.json();
};

type clearEstimatesProps = {
  roomId: string;
};

const clearEstimates = async ({ roomId }: clearEstimatesProps) => {
  try {
    const response = await fetch("/api/clearEstimates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomId,
      }),
    });

    if (!response.ok) {
      console.error("Failed to clear estimates");
    }
  } catch (error) {
    console.error("Failed to clear estimates: ", error);
  }
};

type toggleRoomVisibilityProps = {
  roomId: string;
  currentVisibility: boolean;
};
const toggleRoomVisibility = async ({
  roomId,
  currentVisibility,
}: toggleRoomVisibilityProps) => {
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
