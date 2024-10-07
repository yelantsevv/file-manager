import path from "path";
import fs from "fs";
import { promises } from "stream";
import { __currentDir } from "../index.js";

async function copyFileToDir(argFirst, argSecond) {
  const source = path.join(__currentDir, argFirst);
  const destinationDir = path.join(__currentDir, argSecond);
  const destinationFilePath = path.join(__currentDir, argSecond, argFirst);
  try {
    if (!fs.existsSync(source)) {
      throw new Error(`file ${argFirst} does not exist`);
    }

    if (!fs.existsSync(destinationDir)) {
      throw new Error(`directory ${argSecond} does not exist`);
    }

    if (fs.existsSync(destinationFilePath)) {
      throw new Error(`file ${argFirst} already exists in ${argSecond}`);
    }

    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(destinationFilePath);

    await promises.pipeline(readStream, writeStream);
  } catch (error) {
    console.error(error.message);
  }
}

export { copyFileToDir };
