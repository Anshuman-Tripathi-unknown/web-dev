function game_start() {
  $(document).on("click", function () {
    $(document).off();
    start();
  });
}
function start(){
    level = 0;
    var boxs = ["green", "red", "yellow", "blue"];
    var arr = [];
    cont(level,boxs,arr);
}
function clicked(somebtn){
    $("#"+somebtn).addClass("pressed");
    var show=new Audio("./sounds/" + somebtn + ".mp3");
    show.play();
    setTimeout(function(){$("#"+somebtn).removeClass("pressed");},100);
}
function cont(level,boxs,arr){
    level++;
    $("h1").text("Level "+level);
    var nextcolor=boxs[Math.floor(Math.random()*4)];
    arr.push(nextcolor);
    clicked(nextcolor);
    var i=0;
    checker(level,boxs,arr,i);
}
function checker(level,boxs,arr,i){
    if(i<level){
        $(".btn").on("click",function(event){
        clicked(event.target.id);
        $(".btn").off();
        
            if(event.target.id===arr[i])
            {
                i++;
                checker(level,boxs,arr,i);
            }
            else {game_over();}
        });}
    else {setTimeout(function(){cont(level,boxs,arr);},1000);}
}
function game_over(){
    $("h1").text("Game Over,Press click anywhere to Restart");
    $("body").addClass("game-over");
    var wrng=new Audio("./sounds/wrong.mp3");
    wrng.play();
    $(document).on("click",function(){
        $("body").removeClass("game-over");
        $(document).off();
        start();
    });
}
game_start();