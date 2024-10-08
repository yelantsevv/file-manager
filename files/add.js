import { promises } from "fs";
import { isExists, pathFull } from "./helpers.js";

async function add(argFirst) {
  if (!argFirst) {
    throw new Error("Please provide file name");
  }
  if (await isExists(pathFull(argFirst))) {
    throw new Error(`file ${argFirst} already exists`);
  }
  await promises.writeFile(pathFull(argFirst), "");
}
export { add };
