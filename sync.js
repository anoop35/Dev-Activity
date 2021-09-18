let fs=require("fs");
console.log("Before");
let content=fs.readFileSync("t1.txt");
console.log("content: "+content);
content=fs.readFileSync("t2.txt");
console.log("content: "+content);
content=fs.readFileSync("t3.txt");
console.log("content: "+content);
console.log("After");