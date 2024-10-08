import fs from "fs";
import { createHash } from "crypto";
import { pathFull } from "./helpers.js";

async function hashFile(argFirst) {
  if (!argFirst) {
    throw new Error("Please provide file name");
  }
  const hash = createHash("sha256");
  const stream = fs.createReadStream(pathFull(argFirst));

  stream.on("data", (data) => {
    hash.update(data);
  });

  stream.on("end", () => {
    console.log(hash.digest("hex"));
    stream.close(1);
  });

  stream.on("error", (err) => {
    console.error("Error reading file:", err.message);
  });
}

export { hashFile };
