import { promises } from "stream";
import fs from "fs";
import zlib from "zlib";
import path from "path";
import { __currentDir } from "../index.js";

const compress = async (argFirst, argSecond) => {
  const fileToCompress = path.join(__currentDir, argFirst);
  const archive = path.join(__currentDir, argSecond);

  await promises.pipeline(
    fs.createReadStream(fileToCompress),
    zlib.createBrotliCompress(),
    fs.createWriteStream(archive)
  );
};

export { compress };
