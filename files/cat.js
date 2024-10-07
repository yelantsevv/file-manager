import fs from "fs";
import path from "path";
import { __currentDir } from "../index.js";
import { dirname } from "./dirname.js";

function cat(path_to_file) {
  const filePath = path.join(__currentDir, `${path_to_file}`);

  const readableStream = fs.createReadStream(filePath, { encoding: "utf8" });

  readableStream.on("data", (chunk) => {
    console.log(chunk);
  });

  readableStream.on("end", dirname);

  readableStream.on("error", () => {
    console.error(`Error reading file: ${path_to_file}`);
    dirname();
  });
}
export { cat };
