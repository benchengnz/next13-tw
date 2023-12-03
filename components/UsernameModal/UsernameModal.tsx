// components/UsernameModal.tsx

import { useUsername } from "@/contexts/UsernameContext";
import { useState } from "react";
import CarouselSelector from "../CarouselSelector/CarouselSelector";

type UsernameModalProps = {
  onClose: () => void;
  imagePaths?: string[] | null; // Optional prop for image paths
};

const UsernameModal: React.FC<UsernameModalProps> = ({
  onClose,
  imagePaths,
}) => {
  const { setUsername } = useUsername();
  const [tempName, setTempName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit..");
    setUsername(tempName);
    onClose();
  };

  if (!imagePaths)
    imagePaths = [
      "/images/avatars/dog-avatar-1.png",
      "/images/avatars/dog-avatar-4.png",
      "/images/avatars/dog-avatar-6.png",
      "/images/avatars/dog-avatar-15.png",
    ];

  const onImageChangeHandler = (currentIndex: number) => {
    console.log(currentIndex);
    if (imagePaths) {
      console.log(imagePaths[currentIndex]);
    }
  };
  console.log(imagePaths[0]);
  return (
    <div className="modal flex items-center justify-center ">
      <form
        className="border border-gray-300 shadow-md mt-4
        rounded-lg p-6 w-80 bg-gray-100 space-y-2"
        onSubmit={handleSubmit}
      >
        <CarouselSelector
          imagePaths={imagePaths}
          //onImageChange={onImageChangeHandler}
        />
        <label>
          Enter your display name:
          <input
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            value={tempName}
            //required
            onChange={(e) => setTempName(e.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={!tempName.trim()}
          className={`p-2 rounded-md w-full 
                  focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:ring-opacity-50 
              ${
                tempName.trim()
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-300 cursor-not-allowed text-gray-500"
              }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UsernameModal;
