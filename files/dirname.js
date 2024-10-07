import fs from "fs";
import path from "path";
import { __currentDir } from "../index.js";

let folders = [];
let files = [];

function ridFoldersAndFiles() {
  folders = [];
  files = [];
  const items = fs.readdirSync(__currentDir);
  items.forEach((item) => {
    const itemPath = path.join(__currentDir, item);
    const stat = fs.lstatSync(itemPath);
    if (stat.isDirectory()) {
      folders.push(item);
    } else if (stat.isFile()) {
      files.push(item);
    }
  });
}
function dirname() {
  ridFoldersAndFiles();
  console.log("\x1b[36m%s\x1b[0m", `You are currently in ${__currentDir}`);
}
export { dirname, folders, files };
