import path from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "fileToRead.txt";
const src = path.join(__dirname, "files", fileName);

const read = async () => {
  try {
    const file = await readFile(src, { encoding: "utf8" });
    console.log(file);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
