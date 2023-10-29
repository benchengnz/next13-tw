// components/UsernameModal.tsx

import { useUsername } from "@/contexts/UsernameContext";
import { useState } from "react";

const UsernameModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { setUsername } = useUsername();
  const [tempName, setTempName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsername(tempName);
    onClose();
  };

  return (
    <div className="modal flex items-center justify-center ">
      <form
        className="border border-gray-300 shadow-md 
        rounded-lg p-6 w-80 bg-gray-100 space-y-2"
        onSubmit={handleSubmit}
      >
        <label>
          Enter your display name:
          <input
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            value={tempName}
            required
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
