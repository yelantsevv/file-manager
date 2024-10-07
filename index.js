import readline from "readline";
import os from "os";
import fs from "fs";
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

let __currentDir = os.homedir();

start();
dirname();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("SIGINT", exit);

rl.on("line", (input) => {
  const [command, argFirst, argSecond] = input.split(" ").filter(Boolean);

  if (command === ".exit" || command === "exit") {
    exit();
  } else if (command === "ls") {
    ls();
  } else if (command === "os") {
    osFunction(argFirst);
  } else if (command === "cat") {
    cat(argFirst);
  } else if (command === "add") {
    add(argFirst);
  } else if (command === "rn") {
    reNameFile(argFirst, argSecond);
  } else if (command === "cp") {
    copyFileToDir(argFirst, argSecond);
  } else if (command === "mv") {
    copyFileToDir(argFirst, argSecond);
    removeFile(argFirst);
  } else if (command === "rm") {
    removeFile(argFirst);
  } else if (command === "hash") {
    hashFile(argFirst);
  } else if (command === "compress") {
    compress(argFirst, argSecond);
  } else if (command === "decompress") {
    decompress(argFirst, argSecond);
  } else if (command === "up") {
    __currentDir = path.dirname(__currentDir);
  } else if (command === "cd") {
    const nextDir = path.resolve(__currentDir, argFirst);
    fs.existsSync(nextDir)
      ? (__currentDir = nextDir)
      : console.error(`Directory ${argFirst} does not exist`);
  } else {
    console.error(`Invalid input`);
  }
  dirname();
});

export { rl, __currentDir };
