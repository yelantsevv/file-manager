import { promises } from "stream";
import fs from "fs";
import zlib from "zlib";
import { pathFull } from "./helpers.js";

async function decompress(argFirst, argSecond) {
  if (!argFirst || !argSecond) {
    throw new Error("Please provide both arguments");
  }

  await promises.pipeline(
    fs.createReadStream(pathFull(argFirst)),
    zlib.createBrotliDecompress(),
    fs.createWriteStream(pathFull(argSecond))
  );
}

export { decompress };
