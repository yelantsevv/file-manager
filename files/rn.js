import { promises } from "fs";
import { isExists, pathFull } from "./helpers.js";

async function reNameFile(argFirst = "", argSecond = "") {
  const filePath = pathFull(argFirst);
  const filePathNew = pathFull(argSecond);
  if (!(await isExists(filePath))) {
    throw new Error(`file ${argFirst} does not exist`);
  }
  if (await isExists(filePathNew)) {
    throw new Error(`file ${argSecond} already exists`);
  }
  promises.rename(filePath, filePathNew);
}
export { reNameFile };
