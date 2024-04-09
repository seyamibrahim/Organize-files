
// Node.js program to clear clutter inside of a directory and organize that content into different folders

import fs from "fs/promises"
import path from "path"
import fsn from "fs"
import { PassThrough } from "stream"

const basepath = "C:\\Users\\seyam\\Downloads\\arrange files"

let files = await fs.readdir(basepath)

for (const item of files) {
    let arr = item.split(".")
    let len = arr.length
    let ext = arr[len-1]
    console.log("running for ", item)

    if(ext != "js" && ext != "json" && len > 1){
        if(fsn.existsSync(path.join(basepath, ext))){

            // move file to this directory if its not a js and json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else{
            fs.mkdir(ext);
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}