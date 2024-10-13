import { createReadStream } from "fs";
import { stdout } from "process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "fileToRead.txt";
const src = path.join(__dirname, "files", fileName);

const read = async () => {
  const readable = createReadStream(src);
  readable.pipe(stdout);
};

await read();
