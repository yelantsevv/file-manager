import { rm, existsSync } from "fs";
import path from "path";

function rmFile(__currentDir, argFirst) {
  const filePath = path.join(__currentDir, argFirst);

  try {
    if (!existsSync(filePath)) {
      throw new Error("file does not exist");
    }

    rm(filePath);
  } catch (error) {
    console.error(error.massage);
  }
}
export { rmFile };
