import os from "os";

export function osFunction(arg) {
  let rez = "";

  if (arg === "--EOL") {
    rez = os.EOL;
  } else if (arg === "--cpus") {
    rez = os.cpus();
  } else if (arg === "--homedir") {
    rez = os.homedir();
  } else if (arg === "--username") {
    rez = os.userInfo().username;
  } else if (arg === "--architecture") {
    rez = os.arch();
  } else {
    console.error("Invalid input");
  }

  console.log(rez);
}
