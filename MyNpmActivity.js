let cheerio=require("cheerio");
let request=require("request");
let fs=require("fs");
request("https://www.espncricinfo.com/series/south-africa-in-sri-lanka-2021-1271624/sri-lanka-vs-south-africa-1st-t20i-1271630/full-scorecard",cb);
console.log("Before");
function cb(error,response,html)
{
    if(error)
    {
        console.log("Error found",error);
    }
    else if(response==404)
    {
        console.log("Page Not Found");
    }
    else{
        //console.log("Html",html);
        dataExtractor(html);
    }
}
console.log("After");
function dataExtractor(html)
{
    let serchTool=cheerio.load(html);
    let reqdata=serchTool(".bowler.table");
    let data="";
    for(let i=0;i<reqdata.length;i++)
    {
        data+=serchTool(reqdata[i]).html();
    }
    fs.writeFileSync("table.html",data);

}