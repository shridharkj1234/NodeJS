const fs = require("fs"); 
const path = require("path");

const dir = __dirname + "/Thapa";
if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
fs.writeFileSync(path.join(dir,"bio.txt"),"This is Node file")
fs.appendFileSync(path.join(dir,"bio.txt"),"Added after existing data")
const data = fs.readFileSync(path.join(dir,"bio.txt"), 'utf-8');
console.log(data);
fs.renameSync(path.join(dir,"bio.txt"),path.join(dir,"bio2.txt"));
fs.rmSync(path.join(dir,"bio2.txt"));
fs.rmdirSync(dir)

console.log("Helo from node");
