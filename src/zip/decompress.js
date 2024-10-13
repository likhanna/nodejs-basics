import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcFileName = "archive.gz";
const src = path.join(__dirname, "files", srcFileName);
const destFileName = "fileToCompress.txt";
const dest = path.join(__dirname, "files", destFileName);

const decompress = async () => {
  const readable = createReadStream(src);
  const writable = createWriteStream(dest);

  const unzip = createUnzip();
  pipeline(readable, unzip, writable, (err) => {
    if (err) console.error(err);
  });
};

await decompress();
