import { promises } from "stream";
import fs from "fs";
import zlib from "zlib";
import path from "path";
import { __currentDir } from "../index.js";

 async function decompress (argFirst, argSecond) {
  const archive = path.join(__currentDir, argFirst);
  const fileToDecompress = path.join(__currentDir, argSecond);

  await promises.pipeline(
    fs.createReadStream(archive),
    zlib.createBrotliDecompress(),
    fs.createWriteStream(fileToDecompress)
  );
};

export { decompress };
