import { Inter } from "next/font/google";
import { useUsername } from "@/contexts/UsernameContext";
import { useEffect, useState } from "react";
import UsernameModal from "@/components/UsernameModal/UsernameModal";
import router from "next/router";
import useEnsureUsername from "@/hooks/useEnsureUsername";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { username } = useUsername();
  //const [isModalOpen, setModalOpen] = useState<boolean>(!username);
  const usernamePrompt = useEnsureUsername();

  useEffect(() => {
    console.log(`username ${username}`);
    if (username) {
      router.push(`/rooms/-Nhk-cn2V49nbtVlCNJz`);
    }
  }, [username]);
  if (usernamePrompt) return usernamePrompt;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        {/* {isModalOpen ? (
          <UsernameModal onClose={() => setModalOpen(false)} />
        ) : (
          <div>Welcome, {username}</div>
        )} */}
      </div>
    </main>
  );
}
