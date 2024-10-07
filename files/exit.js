import { rl } from "../index.js";
import { username } from "./start.js";

function exit() {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
}

export { exit };
