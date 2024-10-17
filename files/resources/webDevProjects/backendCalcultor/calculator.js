const express=require("express");
const app=express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.listen(2000,function(){
    console.log("server has started at 2000");
});
app.get("/",function(req,res){
    res.sendFile( __dirname+"/index.html");
});
app.post("/",function(req,res){
    console.log(req.body);
    res.send("your result is ="+(Number(req.body.num1)+Number(req.body.num2)));
});