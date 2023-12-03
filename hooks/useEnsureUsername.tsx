import UsernameModal from "@/components/UsernameModal/UsernameModal";
import { useUsername } from "@/contexts/UsernameContext";
import { useState } from "react";

const useEnsureUsername = ({ imagePaths }: { imagePaths: string[] | null }) => {
  const { username } = useUsername();
  const [isModalOpen, setModalOpen] = useState<boolean>(!username);
  console.log("isModalOpen: ", isModalOpen);
  if (isModalOpen) {
    return (
      <UsernameModal
        imagePaths={imagePaths}
        onClose={() => setModalOpen(false)}
      />
    );
  }
  return null;
};

export default useEnsureUsername;
