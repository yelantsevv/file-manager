import { promises } from "stream";
import fs from "fs";
import { createBrotliDecompress } from "zlib";
import path from "path";
import { __currentDir } from "../index.js";

const decompress = async (argFirst, argSecond) => {
  const archive = path.join(__currentDir, argFirst);
  const fileToDecompress = path.join(__currentDir, argSecond);

  await promises.pipeline(
    fs.createReadStream(archive),
    createBrotliDecompress(),
    fs.createWriteStream(fileToDecompress)
  );
};

export { decompress };
