import { rmSync, existsSync } from "fs";
import path from "path";
import { __currentDir } from "../index.js";
import { ridFoldersAndFiles } from "../files/dirname.js";

function rmFile(argFirst) {
  const filePath = path.join(__currentDir, argFirst);
  try {
    if (!existsSync(filePath)) {
      throw new Error("file does not exist");
    }
    rmSync(filePath);
    ridFoldersAndFiles();
  } catch (error) {
    console.error(error.message);
  }
}
export { rmFile };
