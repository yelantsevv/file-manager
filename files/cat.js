import fs from "fs";
import { dirname } from "./dirname.js";
import { pathFull } from "./helpers.js";
import { rl } from "../index.js";

async function cat(path_to_file) {
  if (!path_to_file) {
    throw new Error("Please provide file name");
  }
  const readableStream = fs.createReadStream(pathFull(path_to_file), {
    encoding: "utf8",
  });

  readableStream.on("data", (chunk) => {
    rl.output.write(chunk);
  });

  readableStream.on("end", () => {
    readableStream.close();
    console.log(dirname());
  });

  readableStream.on("error", () => {
    readableStream.close();
    console.error(`Error reading file: ${path_to_file}`);
  });
}
export { cat };
