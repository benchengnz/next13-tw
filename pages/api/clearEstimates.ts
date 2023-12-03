import type { NextApiRequest, NextApiResponse } from "next";
import firebaseAdmin from "../../lib/firebaseAdmin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { roomId } = req.body;
  try {
    const db = firebaseAdmin().database();
    const roomRef = db.ref(`rooms/${roomId}`);
    const participantsRef = db.ref(`rooms/${roomId}/participants`);

    const snapshot = await participantsRef.once("value");
    const participants = snapshot.val();
    if (participants) {
      Object.keys(participants).forEach((userName) => {
        participants[userName].estimate = ""; // Clear the estimate
      });

      await roomRef.update({
        participants: participants,
        isVisible: false,
      });
      res.status(200).json({ message: "Estimates cleared successfully" });
    }
  } catch (error) {
    console.error("Error clearing estimate: ", error);
    res.status(500).json({ error: "Error clearing estimate" });
  }
}
