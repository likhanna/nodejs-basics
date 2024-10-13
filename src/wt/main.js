import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerDest = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  let increment = 10;
  const cpus = os.cpus().length;
  const result = [];

  const createWorker = () => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerDest, {
        workerData: { n: increment++ },
      });

      worker.on("message", (value) => {
        result.push({ status: "resolved", value: value });
        resolve(result);
      });

      worker.on("error", () => {
        result.push({ status: "error", value: null });
        resolve(result);
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  };

  for (let i = 0; i < cpus; i++) {
    createWorker().then(() => {
      if (result.length === cpus) {
        console.log(result);
      }
    });
  }
};

await performCalculations();
