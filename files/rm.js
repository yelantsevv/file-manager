import fs from "fs";
import path from "path";
import { __currentDir } from "../index.js";

function removeFile(argFirst) {
  const filePath = path.join(__currentDir, argFirst);
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`file ${argFirst} does not exist`);
    }
    fs.rmSync(filePath);
  } catch (error) {
    console.error(error.message);
  }
}
export { removeFile };
