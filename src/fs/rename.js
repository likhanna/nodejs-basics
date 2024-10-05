import path from "path";
import { rename as fsRename, access } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcFileName = "wrongFilename.txt";
const destFileName = "properFilename.md";
const src = path.join(__dirname, "files", srcFileName);
const dest = path.join(__dirname, "files", destFileName);

const rename = async () => {
  try {
    const isExist = await exists(dest);

    if (isExist) {
      throw isExist;
    }

    await fsRename(src, dest);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

const exists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

await rename();
