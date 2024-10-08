import path from "path";
import fs from "fs";
import { promises } from "stream";
import { __currentDir } from "../index.js";
import { isExists, isExistsFolder } from "./helpers.js";

async function copyFileToDir(argFirst, argSecond, isMove = false) {
  if (!argFirst || !argSecond) {
    throw new Error("Please provide both arguments");
  }
  const source = path.join(__currentDir, argFirst);
  const destinationDir = path.join(__currentDir, argSecond);
  const destinationFilePath = path.join(__currentDir, argSecond, argFirst);

  if (!(await isExists(source))) {
    throw new Error(`file ${argFirst} does not exist`);
  }

  if (!(await isExistsFolder(destinationDir))) {
    throw new Error(`directory ${argSecond} does not exist`);
  }

  if (await isExists(destinationFilePath)) {
    throw new Error(`file ${argFirst} already exists in ${argSecond}`);
  }

  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destinationFilePath);

  await promises.pipeline(readStream, writeStream);

  if (isMove) {
    fs.promises.rm(source);
  }
}

export { copyFileToDir };
