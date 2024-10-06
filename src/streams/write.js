import { createWriteStream } from "fs";
import { stdin } from "process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "fileToWrite.txt";
const src = path.join(__dirname, "files", fileName);

const write = async () => {
  const writable = createWriteStream(src, { flags: "a" });
  stdin.pipe(writable);
};

await write();
