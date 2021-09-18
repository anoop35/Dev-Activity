let fs=require("fs");
fs.readFile("t1.txt",cb);
console.log("Before");
function cb(err,data)
{
    console.log(""+data);
    fs.readFile("t2.txt",cb1);
}
function cb1(error,data)
{
    console.log(""+data);
    fs.readFile("t3.txt",cb2);
}
function cb2(err,data)
{
        console.log(""+data);
}
console.log("After");