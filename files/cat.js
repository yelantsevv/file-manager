import fs from "fs";
import path from "path";
import { __currentDir } from "../index.js";

function cat(path_to_file) {
  const filePath = path.join(__currentDir, `${path_to_file}`);

  const readableStream = fs.createReadStream(filePath, { encoding: "utf8" });

  readableStream.on("data", (chunk) => {
    console.log(chunk);
  });

  readableStream.on("end", () => {
    console.log("File reading completed.");
  });

  readableStream.on("error", (err) => {
    console.error("Error reading file:", err.message);
  });
}
export { cat };
