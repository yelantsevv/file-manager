import { promises } from "fs";
import { isExists, pathFull } from "./helpers.js";

async function removeFile(argFirst = "") {
  const filePath = pathFull(argFirst);
  if (!(await isExists(filePath))) {
    throw new Error(`file ${argFirst} does not exist`);
  }

  await promises.rm(filePath);
}
export { removeFile };
