// jshint esversion 6
const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "3439c3509babf4cb099e87390adb33c3-us12",
  server: "us12",
});

const express=require("express");
const request=require("request");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.listen(process.env.PORT||3000,function()
{
    console.log("server is running at 3000");
});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});
app.use(express.static("public")); 
app.post("/",function(request,respond){
    const first=request.body.first;
    const last=request.body.last;
    const mail=request.body.email;    
    const run = async () => {
        const response = await client.lists.batchListMembers("66be75bc59", {
          members: [{
            email_address:mail,
            status:"subscribed",
            merge_fields: {
	            FNAME: first,
	            LNAME: last,}
          }],
        });
        if(response.error_count===0){
            respond.sendFile(__dirname+"/success.html");
        }
        else {
            respond.sendFile(__dirname+"/failure.html");
        }
      };
      
      run();
});
app.post("/failure",function(rq,rs){
    rs.redirect("/");
});



//3439c3509babf4cb099e87390adb33c3-us12
//66be75bc59
