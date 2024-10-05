import { promises as fs } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = `${__dirname}/files/fresh.txt`;
  const data = "I am fresh and young";

  try {
    await fs.writeFile(filePath, data, { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
