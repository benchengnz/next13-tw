import { Inter } from "next/font/google";
import useEnsureUsername from "@/hooks/useEnsureUsername";
import useCreateRoom from "@/hooks/useCreateRoom";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("landing on home page");
  const usernamePrompt = useEnsureUsername();
  const { creationStatus } = useCreateRoom();
  if (usernamePrompt) return usernamePrompt;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        {creationStatus === "idle" && <p>Waiting to create room...</p>}
        {creationStatus === "creating" && <p>Creating room...</p>}
        {creationStatus === "done" && <p>Room created successfully!</p>}
        {creationStatus === "error" && (
          <p>Error creating room. Please try again.</p>
        )}
      </div>
    </main>
  );
}
