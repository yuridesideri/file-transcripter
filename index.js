const fs = require("fs");
const {v4: uuid} = require("uuid");


const inputDir = __dirname + "/input/";
const outputDir = __dirname + "/output/";

getCurrentFilenames(inputDir);
renameFiles(inputDir, outputDir);
console.log('Renamed:\n');
getCurrentFilenames(outputDir);

function getCurrentFilenames(dir) {
    console.log("Current Filenames:");
    fs.readdirSync(dir).forEach(file => {
        console.log(file);
    });
}

function renameFiles(inp, out) {
    const files = fs.readdirSync(inp);
    for (let i = 0; i < files.length; i++){
        fs.rename(inp + files[i], out + uuid() + ".png", () => {})
    }
}