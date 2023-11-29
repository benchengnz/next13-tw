// pages/api/checkRoomExists.js
import firebaseAdmin from "../../lib/firebaseAdmin";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { roomId } = req.query;
  const db = firebaseAdmin().database();
  const roomRef = db.ref(`rooms/${roomId}`);

  const snapshot = await roomRef.once("value");
  if (snapshot.exists()) {
    res.status(200).send("Room exists");
  } else {
    res.status(404).send("Room does not exist");
  }
}
