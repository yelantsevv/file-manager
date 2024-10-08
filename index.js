import readline from "readline";
import os from "os";
import path from "path";

import { start } from "./files/start.js";
import { exit } from "./files/exit.js";
import { dirname } from "./files/dirname.js";
import { ls } from "./files/ls.js";
import { osFunction } from "./files/os.js";
import { cat } from "./files/cat.js";
import { add } from "./files/add.js";
import { removeFile } from "./files/rm.js";
import { hashFile } from "./files/hash.js";
import { compress } from "./files/compress.js";
import { decompress } from "./files/decompress.js";
import { reNameFile } from "./files/rn.js";
import { copyFileToDir } from "./files/cp.js";
import { isExistsFolder } from "./files/helpers.js";

import url from "url";
let __dirname = null;
__dirname = path.dirname(url.fileURLToPath(import.meta.url));

let __currentDir = __dirname || os.homedir();

start();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.output.write(dirname() + "\n");
rl.on("SIGINT", exit);

rl.on("line", async (input) => {
  const [command, argFirst, argSecond] = input.split(" ").filter(Boolean);
  try {
    if (command === ".exit" || command === "exit") {
      exit();
    } else if (command === "ls") {
      ls();
    } else if (command === "os") {
      osFunction(argFirst);
    } else if (command === "cat") {
      await cat(argFirst);
    } else if (command === "add") {
      await add(argFirst);
    } else if (command === "rn") {
      await reNameFile(argFirst, argSecond);
    } else if (command === "cp") {
      await copyFileToDir(argFirst, argSecond);
    } else if (command === "mv") {
      await copyFileToDir(argFirst, argSecond, true);
    } else if (command === "rm") {
      await removeFile(argFirst);
    } else if (command === "hash") {
      await hashFile(argFirst);
    } else if (command === "compress") {
      await compress(argFirst, argSecond);
    } else if (command === "decompress") {
      await decompress(argFirst, argSecond);
    } else if (command === "up") {
      __currentDir = path.dirname(__currentDir);
    } else if (command === "cd") {
      if (!argFirst) {
        throw new Error("Invalid input");
      }
      const nextDir = path.resolve(__currentDir, argFirst);
      if (await isExistsFolder(nextDir)) {
        __currentDir = nextDir;
      } else {
        throw new Error(`Directory ${argFirst} does not exist`);
      }
    } else {
      throw new Error("Invalid input");
    }
  } catch (error) {
    console.error(error.message);
  }
  rl.output.write(dirname() + "\n");
});

export { rl, __currentDir };
