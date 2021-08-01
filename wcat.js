let path=require("path");
let fs=require("fs");
const { exit } = require("process");
let inputArr=process.argv.slice(2);
let fileArr=[];
let optionArr=[];
let content=" ";
for(let i=0;i<inputArr.length;i++)
{
    let str=inputArr[i].charAt(0);
    if(str=="-")
    {
        optionArr.push(inputArr[i]);
    }
    else
    {
        fileArr.push(inputArr[i]);
    }
}

for(let i=0;i<fileArr.length;i++)
{
    let file=fileArr[i];
    let ans=fs.existsSync(file);
    if(ans)
    {
      content=content+fs.readFileSync(file)+"\r\n";
    }
    else{
        console.log(file+" file not found");
        return;
    }
    
}
let contArr=content.split("\r\n");
let flag=false;
for(let i=0;i<=optionArr.length;i++)
{

    if((optionArr[i]=="-b" ||optionArr[i]=="-n") && flag==true)
    {
        continue;
    }
    else if(optionArr[i]=="-s")
    {
      
      for(let j=0;j<contArr.length;j++) 
      {
        if(contArr[j]!="")
        {
         console.log(contArr[j]+"\n");
        }
     }
   }
   else if(optionArr[i]=="-b" ||optionArr[i]=="-n")
   {
       if(optionArr[i]=="-b")
       {
          let a=0;
          for(let j=0;j<contArr.length;j++)
           {
            if(contArr[j]!="")
            console.log(++a+":" +" "+contArr[j]);
            else 
            console.log(" "+contArr[j]);
          }
          flag=true;
         }
           else
          {
           let a=0;
           for(let j=0;j<contArr.length;j++)
          {
            console.log(++a+":" +" "+contArr[j]);
          }
          flag=true;
        }
    }
   else if(optionArr.length==0) {
       console.log(content);
   }
  
}