// lib/scanAvatars.ts
import fs from "fs";
import path from "path";

export const scanAvatars = (folder: string) => {
  const avatarsDir = path.join(process.cwd(), "public", "images", folder);
  const filenames = fs.readdirSync(avatarsDir);
  const pngFiles = filenames.filter((file) => file.endsWith(".png"));

  // Make sure to use the folder variable in the returned path
  return pngFiles.map((file) => `/images/${folder}/${file}`);
};
