import React, { useState } from "react";
import { copyToClipboard } from "@/lib/clipboard";
import Image from "next/image";
import Toast from "../Toast/Toast";
import Avatar from "../Avatar/Avatar";

type RoomHeaderProps = {
  roomName: string;
  userName: string;
  currentUrl: string;
  avatar?: string | null;
};

const RoomHeader: React.FC<RoomHeaderProps> = ({
  roomName,
  userName,
  currentUrl,
  avatar = "",
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
    <div className="bg-slate-100/70 shadow-md p-1 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <h4 className="text-1xl font-semibold">{roomName}</h4>
        <button
          onClick={handleCopyClick}
          className="text-white font-bold py-2 px-2 rounded"
        >
          <Image
            src={`/icons/share-from-square-solid.svg`}
            width={16}
            height={14}
            alt={"share"}
          />
        </button>
        {isCopied && (
          <Toast message="URL copied to clipboard!" duration={2000} />
        )}
      </div>
      <span className="text-1xl text-gray-500">Welcome, {userName}</span>
      <Avatar avatar={avatar} userName={userName} />
    </div>
  );
};

export default RoomHeader;
