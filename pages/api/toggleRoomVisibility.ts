// pages/api/toggleRoomVisibility.ts
import type { NextApiRequest, NextApiResponse } from "next";
import firebaseAdmin from "../../lib/firebaseAdmin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { roomId, currentVisibility } = req.body;

  try {
    const db = firebaseAdmin().database();
    const roomRef = db.ref(`rooms/${roomId}`);
    await roomRef.update({ isVisible: !currentVisibility });

    res.status(200).json({ message: "Room visibility toggled successfully" });
  } catch (error) {
    console.error("Error toggling room visibility: ", error);
    res.status(500).json({ error: "Error toggling room visibility" });
  }
}
