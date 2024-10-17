const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.listen(3000,function(){
    console.log("server has started");
});
app.use(bodyParser.urlencoded({extended:true}))
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/bmicalculator",function(req,res){
    var weight=Number(req.body.weight);
    var height=Number(req.body.height);
    var bmi=weight/(height**2);
    res.send("your bmi is "+bmi);
});