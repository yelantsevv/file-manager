import fs from "fs";
import path from "path";

let folders = [];
let files = [];

const dirname = (__currentDir) => {
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

  console.log(`You are currently in ${__currentDir}`);
};
export { dirname, folders, files };
