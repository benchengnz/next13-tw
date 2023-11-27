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

  const { roomId, userName, estimateValue } = req.body;

  try {
    const db = firebaseAdmin().database();
    const participantRef = db.ref(
      `rooms/${roomId}/participants/${userName.toLowerCase()}`
    );

    console.log("eastimate: ", estimateValue);
    await participantRef.update({
      estimate: estimateValue,
      name: userName,
    });

    res.status(200).json({ message: "Estimate updated successfully" });
  } catch (error) {
    console.error("Error updating participant estimate: ", error);
    res.status(500).json({ error: "Error updating estimate" });
  }
}
