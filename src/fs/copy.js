import path from "path";
import { cp } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const srcFolder = path.join(__dirname, "files");
  const destFolder = path.join(__dirname, "files_copy");

  try {
    await cp(srcFolder, destFolder, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
