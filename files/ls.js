import { folders, files } from "./dirname.js";
import { map, sort } from "./helpers.js";

const ls = () => {
  let folder = map(sort(folders), "Folder");
  let file = map(sort(files), "File");

  console.table([...folder, ...file]);
};

export { ls };
