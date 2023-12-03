// pages/api/createRoom.ts
import type { NextApiRequest, NextApiResponse } from "next";
import firebaseAdmin from "@/lib/firebaseAdmin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { roomName, owner, avatar } = req.body;
    const admin = firebaseAdmin();
    try {
      const db = admin.database();
      const newRoomRef = db.ref("rooms").push();
      // Create the room and initialize the participants in one operation
      console.log("create room add particpant...");
      await newRoomRef.set({
        name: roomName,
        isVisible: false,
        owner,
        participants: {
          [owner.toLowerCase()]: {
            name: owner,
            estimate: "",
            avatar: avatar,
          },
        },
      });

      res.status(200).json({ roomId: newRoomRef.key });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
