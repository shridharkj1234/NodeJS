const fs=require("fs");

console.log("Started using Fs module");
fs.writeFile("read.txt","This flie created asynchronously",()=>{
    console.log("Successfully created!!!!!!!!!!!!!");
})

//challenge

fs.mkdir("Thapa",()=>{
    console.log("Folder created !!");
});
fs.writeFile("./Thapa/bio.txt","File created Asynchronously",()=>{
    console.log("file created done !!!!!");
})

setTimeout(()=>{
    console.log("time out ......");
},0);
console.log("Ended using Fs module");
