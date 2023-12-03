import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import RoomContainer from "@/components/RoomContainer/RoomContainer";
import Spinner from "@/components/Spinner/Spinner";
import Toast from "@/components/Toast/Toast";
import { useUsername } from "@/contexts/UsernameContext";
import useEnsureUsername from "@/hooks/useEnsureUsername";
import { scanAvatars } from "@/lib/scanAvatars";
import { GetStaticProps } from "next";

type RoomPageState = "loading" | "loaded";

const Rooms = ({ imagePaths }: { imagePaths: string[] | null }) => {
  const router = useRouter();
  const { roomid } = router.query;
  const roomIdValue = Array.isArray(roomid) ? roomid[0] : roomid;
  const { username, avatar } = useUsername();
  const usernamePrompt = useEnsureUsername({ imagePaths });
  const [state, setState] = useState<RoomPageState>("loading");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    const checkRoomExists = async () => {
      if (!roomIdValue) {
        return;
      }

      try {
        const response = await fetch(
          `/api/checkRoomExists?roomId=${roomIdValue}`
        );
        setState("loaded");
        if (!response.ok) {
          console.log("Room doesn't exist. ", roomIdValue);
          setToastMessage("Room doesn't exist.");
          setTimeout(() => router.push("/"), 2000);
        } else {
          setState("loaded");
          if (username) {
            addParticipant(roomIdValue, username);
          }
        }
      } catch (err) {
        setState("loaded");
        console.error("Network error: ", err);
        setToastMessage("An error occurred. Please try again later.");
        setTimeout(() => router.push("/"), 2000);
      }
    };

    checkRoomExists();
  }, [router, roomIdValue, username]);

  if (state === "loading" && !toastMessage) {
    return <Spinner caption="Loading" />;
  }
  if (usernamePrompt && !toastMessage) return usernamePrompt;

  return (
    <main>
      {toastMessage && (
        <Toast
          message={toastMessage}
          duration={2000}
          onClose={() => setToastMessage("")}
        />
      )}
      {state === "loaded" && !toastMessage && (
        <div className="max-w-3xl mx-auto mt-2">
          <RoomContainer
            roomId={roomIdValue as string}
            userName={username as string}
            avatar={avatar}
          />
        </div>
      )}
    </main>
  );
};

const addParticipant = async (roomId: string, userName: string) => {
  try {
    const response = await fetch("/api/updateEstimate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomId: roomId,
        userName: userName,
        estimateValue: "",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add participant");
    }

    // Handle successful addition of participant
    const data = await response.json();
  } catch (error) {
    console.error("Error adding participant:", error);
    // Handle error scenario
  }
};
export default Rooms;

export const getStaticProps: GetStaticProps = async () => {
  const imagePaths = scanAvatars("avatars");
  return { props: { imagePaths } };
};

export const getStaticPaths = async () => {
  // Return an empty paths array and enable fallback
  return { paths: [], fallback: "blocking" };
};
