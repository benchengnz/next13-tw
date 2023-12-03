import Image from "next/image";
import React from "react";

type AvatarProps = {
  avatar?: string | null;
  userName: string;
};

const Avatar: React.FC<AvatarProps> = ({ avatar, userName }) => {
  return avatar ? (
    <Image
      alt="avatar"
      src={avatar}
      width={32}
      height={32}
      className="rounded-full"
    />
  ) : (
    <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full text-white">
      {userName.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
