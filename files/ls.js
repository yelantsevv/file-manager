import { folders, files } from "./dirname.js";

const ls = () => {
  let folder = map(sort(folders), "Folder");
  let file = map(sort(files), "File");

  console.table([...folder, ...file]);
};

function sort(args) {
  return args.sort((a, b) => a.localeCompare(b));
}

function map(args, type) {
  return args.map((a) => ({ Name: a, Type: type }));
}

export { ls };
