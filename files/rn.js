import fs from "fs";
import path from "path";
import { __currentDir } from "../index.js";

function reNameFile(argFirst, argSecond) {
  const filePath = path.join(__currentDir, argFirst);
  const filePathNew = path.join(__currentDir, argSecond);
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`file ${argFirst} does not exist`);
    }
    if (fs.existsSync(filePathNew)) {
      throw new Error(`file ${argSecond} already exists`);
    }
    fs.renameSync(filePath, filePathNew);
  } catch (error) {
    console.error(error.message);
  }
}
export { reNameFile };
