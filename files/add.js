import { existsSync, writeFileSync } from "fs";
import path from "path";
import { ridFoldersAndFiles } from "../files/dirname.js";
import { __currentDir } from "../index.js";

function add(argFirst) {
  const filePath = path.join(__currentDir, argFirst);

  try {
    if (existsSync(filePath)) {
      throw new Error("file already exists");
    }
    writeFileSync(filePath, "");
    ridFoldersAndFiles();
  } catch (error) {
    console.error(error.message);
  }
}
export { add };
