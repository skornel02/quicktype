#!/usr/bin/env ts-node

/*
    Original: https://stackoverflow.com/a/52526549
*/

import * as fs from "fs";

function deleteFolderRecursive(path: string) {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(function(file: string, index: number) {
      const curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });

    fs.rmdirSync(path);
  }
}

console.log("Tests...");

console.log("Deleting directory 'test/runs'");
deleteFolderRecursive("./test/runs");

if (!fs.existsSync("./test/runs") || fs.lstatSync("./test/runs").isDirectory())
  fs.mkdirSync("./test/runs");

console.log("Successfully cleaned tests!");