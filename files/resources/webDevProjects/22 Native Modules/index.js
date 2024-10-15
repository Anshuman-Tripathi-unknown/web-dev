const fs=require("fs");
fs.writeFile("text.txt","anshuman is great",(err)=>{
    if (err) throw err;
    console.log("done");
});
fs.readFile("message.txt","utf8",(err,data)=>
{
    if(err) throw err;
    console.log(data);
});