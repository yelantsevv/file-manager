import { promises } from "fs";
import { pathFull } from "./helpers.js";
import { __currentDir } from "../index.js";

let folders = [];
let files = [];

async function ridFoldersAndFiles() {
  folders = [];
  files = [];
  const items = await promises.readdir(__currentDir);
  items.forEach(async (item) => {
    const stat = await promises.lstat(pathFull(item));
    if (stat.isDirectory()) {
      folders.push(item);
    } else if (stat.isFile()) {
      files.push(item);
    }
  });
}
function dirname() {
  ridFoldersAndFiles();
  return `You are currently in ${__currentDir}`;
}
export { dirname, folders, files };
