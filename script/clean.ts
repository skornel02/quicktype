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

console.log("Cleaning working tree...");

console.log("Deleting directory 'dist'");
deleteFolderRecursive("./dist");

console.log("Deleting directory 'node_modules'");
deleteFolderRecursive("./node_modules");

console.log("Successfully cleaned workspace!");