import { promises } from "stream";
import fs from "fs";
import zlib from "zlib";
import { pathFull } from "./helpers.js";

async function compress(argFirst, argSecond) {
  if (!argFirst || !argSecond) {
    throw new Error("Please provide both arguments");
  }

  await promises.pipeline(
    fs.createReadStream(pathFull(argFirst)),
    zlib.createBrotliCompress(),
    fs.createWriteStream(argFirst(argSecond))
  );
}

export { compress };
