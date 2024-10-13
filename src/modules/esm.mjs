import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { readFile } from "fs/promises";
import path from "path";
import "./files/c.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

const getUnknownObject = async () => {
  let json;

  if (random > 0.5) {
    const path = path.join(__dirname, "files", "a.json");
    json = JSON.parse(await readFile(path));
  } else {
    const path = path.join(__dirname, "files", "b.json");
    json = JSON.parse(await readFile(path));
  }

  return json;
};

export const unknownObject = await getUnknownObject();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
