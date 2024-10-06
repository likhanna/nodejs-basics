const { createHash } = await import("node:crypto");
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "fileToCalculateHashFor.txt";
const src = path.join(__dirname, "files", fileName);

const calculateHash = async () => {
  const file = await readFile(src);
  const hash = createHash("sha256").update(file).digest("hex");

  console.log(hash);
};

await calculateHash();
