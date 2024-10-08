import { promises } from "fs";
import path from "path";
import { __currentDir } from "../index.js";

async function isExists(path) {
  try {
    await promises.access(path);
    return true;
  } catch (error) {
    return false;
  }
}
async function isExistsFolder(path) {
  try {
    (await promises.lstat(path)).isDirectory();
    return true;
  } catch (error) {
    return false;
  }
}

const pathFull = (arg) => path.join(__currentDir, arg);

const sort = (args) => args.sort((a, b) => a.localeCompare(b));

const map = (args, type) => args.map((a) => ({ Name: a, Type: type }));

export { isExists, pathFull, isExistsFolder, sort, map };
