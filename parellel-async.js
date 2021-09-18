let fs=require("fs");
fs.readFile("t1.txt",cb);
fs.readFile("t2.txt",cb);
fs.readFile("t3.txt",cb);
console.log("Before");
function cb(err,data)
{
    console.log(""+data);
}
console.log("After");