import { existsSync, writeFileSync } from "fs";
import path from "path";

function add(__currentDir, argFirst) {
  const filePath = path.join(__currentDir, argFirst);

  try {
    if (existsSync(filePath)) {
      throw new Error("file already exists");
    }
    writeFileSync(filePath, "");
  } catch (error) {
    console.error(error.message);
  }
}
export { add };
