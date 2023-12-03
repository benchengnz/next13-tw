// pages/api/updateEstimate.ts
import type { NextApiRequest, NextApiResponse } from "next";
import firebaseAdmin from "../../lib/firebaseAdmin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { roomId, userName, estimateValue, avatar } = req.body;

  try {
    const db = firebaseAdmin().database();
    const participantRef = db.ref(
      `rooms/${roomId}/participants/${userName.toLowerCase()}`
    );

    const snapshot = await participantRef.once("value");
    if (snapshot.exists()) {
      // Participant exists, update estimate
      await participantRef.update({ estimate: estimateValue });
    } else {
      // Participant does not exist, add them
      await participantRef.set({
        name: userName,
        estimate: estimateValue || "",
        avatar: avatar,
      });
    }

    res.status(200).json({ message: "Participant updated successfully" });
  } catch (error) {
    console.error("Error updating participant: ", error);
    res.status(500).json({ error: "Error updating participant" });
  }
}
