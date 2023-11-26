import UsernameModal from "@/components/UsernameModal/UsernameModal";
import { useUsername } from "@/contexts/UsernameContext";
import { useState } from "react";

const useEnsureUsername = () => {
  const { username } = useUsername();
  const [isModalOpen, setModalOpen] = useState<boolean>(!username);

  if (isModalOpen) {
    return <UsernameModal onClose={() => setModalOpen(false)} />;
  }
  return null;
};

export default useEnsureUsername;
