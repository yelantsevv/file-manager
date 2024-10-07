import fs from "fs";
import path from "path";
import { __currentDir } from "../index.js";

function add(argFirst) {
  const filePath = path.join(__currentDir, argFirst);

  try {
    if (fs.existsSync(filePath)) {
      throw new Error(`file ${argFirst} already exists`);
    }
    fs.writeFileSync(filePath, "");
  } catch (error) {
    console.error(error.message);
  }
}
export { add };
