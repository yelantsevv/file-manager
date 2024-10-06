import { username } from "./start.js";

const exit = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
};

export { exit };
