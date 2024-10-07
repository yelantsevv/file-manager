import fs from "fs";
import path from "path";
import { createHash } from "crypto";
import { __currentDir } from "../index.js";

function hashFile(argFirst) {
  const filePath = path.join(__currentDir, argFirst);
  const hash = createHash("sha256");
  const stream = fs.createReadStream(filePath);

  stream.on("data", (data) => {
    hash.update(data);
  });

  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });

  stream.on("error", (err) => {
    console.error("Error reading file:", err.message);
  });
}

export { hashFile };
