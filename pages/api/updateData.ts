// pages/api/updateData.ts
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

// Type for the expected request body
interface UpdateDataRequestBody {
  dataToUpdate: any; // Replace 'any' with a more specific type based on your data structure
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { dataToUpdate } = req.body as UpdateDataRequestBody;

    try {
      const db = admin.database();
      // Example: update data at a specific path
      await admin.database().ref("rooms").set(dataToUpdate);
      res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
