import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "script.js";
const src = path.join(__dirname, "files", fileName);

const spawnChildProcess = async (args) => {
  const child = fork(src, args);

  child.on("error", (err) => {
    throw new Error(err);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3", "arg4"]);
