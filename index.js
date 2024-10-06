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

import url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const homeDir = os.homedir();
let __currentDir = __dirname || homeDir;

start();
dirname(__currentDir);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("SIGINT", exit);

rl.on("line", (input) => {
  const [command, argFirst, argSecond] = input.split(" ").filter(Boolean);

  if (command === ".exit") {
    exit();
  } else if (command === "ls") {
    ls();
  } else if (command === "up") {
    const parentDir = path.dirname(__currentDir);
    __currentDir = parentDir;
    dirname(__currentDir);
  } else if (command === "cd") {
    const nextDir = path.resolve(__currentDir, argFirst);
    fs.existsSync(nextDir)
      ? (__currentDir = nextDir)
      : console.error("Directory does not exist");

    dirname(__currentDir);
  } else if (command === "os") {
    osFunction(argFirst);
  } else if (command === "cat") {
    cat(__currentDir, argFirst);
  } else if (command === "add") {
    add(__currentDir, argFirst);
  } else {
    console.error(`Invalid input`);
  }
});
