import path from "path";
import { rm } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "fileToRemove.txt";
const src = path.join(__dirname, "files", fileName);

const remove = async () => {
  try {
    await rm(src);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
