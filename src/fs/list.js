import path from "path";
import { readdir } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folder = path.join(__dirname, "files");

const list = async () => {
  try {
    const files = await readdir(folder);
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
