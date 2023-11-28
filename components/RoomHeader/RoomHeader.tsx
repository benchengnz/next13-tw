// components/RoomHeader.tsx
import React, { useState } from "react";
import { copyToClipboard } from "@/lib/clipboard";
import Image from "next/image";

type RoomHeaderProps = {
  roomName: string;
  userName: string;
  currentUrl: string;
};

const RoomHeader: React.FC<RoomHeaderProps> = ({
  roomName,
  userName,
  currentUrl,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    const promise = copyToClipboard(currentUrl);
    if (promise) {
      promise
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1000); // Hide the message after 2 seconds
        })
        .catch((err) => console.error("Could not copy text: ", err));
    }
  };

  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center  space-x-4">
        <h1 className="text-2xl font-semibold">{roomName}</h1>
        <button
          onClick={handleCopyClick}
          className=" text-white font-bold py-2 px-4 rounded"
        >
          <Image
            src={`/icons/share-from-square-solid.svg`}
            width={27}
            height={24}
            alt={"share"}
          />
        </button>
        {isCopied && (
          <div
            className={`absolute left-72 ml-2 bg-white shadow-md p-4 rounded-md z-10 ${
              isCopied ? "popup-enter-active" : "popup-exit-active"
            }`}
          >
            URL copied to clipboard!
          </div>
        )}
      </div>
      <span className="text-2xl text-gray-500">Welcome, {userName}</span>
    </div>
  );
};

export default RoomHeader;
