const args = process.argv.slice(2);

let username = "Anonymous";

for (let arg of args) {
  if (arg.startsWith("--username=")) {
    username = arg.split("=")[1];
  }
}

function start() {
  console.log(`Welcome to the File Manager, ${username}!`);
}

export { start, username };
