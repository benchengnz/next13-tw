// contexts/UsernameContext.tsx

import { createContext, useContext, ReactNode, useState } from "react";

interface UsernameContextType {
  username: string | null;
  setUsername: (username: string | null) => void;
}

const UsernameContext = createContext<UsernameContextType | undefined>(
  undefined
);

export const UsernameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string | null>(null);

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};

export const useUsername = () => {
  const context = useContext(UsernameContext);
  if (context === undefined) {
    throw new Error("useUsername must be used within a UsernameProvider");
  }
  return context;
};
