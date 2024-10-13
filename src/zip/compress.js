import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcFileName = "fileToCompress.txt";
const src = path.join(__dirname, "files", srcFileName);
const destFileName = "archive.gz";
const dest = path.join(__dirname, "files", destFileName);

const compress = async () => {
  const readable = createReadStream(src);
  const writable = createWriteStream(dest);

  const gzip = createGzip();
  pipeline(readable, gzip, writable, (err) => {
    if (err) console.error(err);
  });
};

await compress();
