// pages/api/removeParticipant.ts
import type { NextApiRequest, NextApiResponse } from "next";
import firebaseAdmin from "../../lib/firebaseAdmin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { roomId, userName } = req.body;

  try {
    const db = firebaseAdmin().database();
    const participantRef = db.ref(
      `rooms/${roomId}/participants/${userName.toLowerCase()}`
    );

    await participantRef.remove();

    res
      .status(200)
      .json({ message: `Participant "${userName}" removed successfully` });
  } catch (error) {
    console.error("Error removing participant: ", error);
    res.status(500).json({ error: "Error removing participant" });
  }
}
