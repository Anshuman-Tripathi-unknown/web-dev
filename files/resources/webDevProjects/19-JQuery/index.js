$("input").keypress(function(event){
    $("h1").text(event.key);
});
function color(){
    setTimeout(function(){
    $("h1").css("color","red");
},1000);
setTimeout(function(){
    $("h1").css("color","yellow");
},2000);
setTimeout(function(){
    $("h1").css("color","green");
},3000);
setTimeout(function(){
    color();
},4000)
}
color();