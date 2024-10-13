var random1=Math.floor(Math.random()*6)+1;
if(random1===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(random1===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(random1===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(random1===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(random1===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}
var random2=Math.floor(Math.random()*6)+1;
if(random2===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(random2===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if(random2===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(random2===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(random2===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}
if(random1>random2)
{
    document.querySelector(".container>h1").textContent=" Player1 wins";
}
else if(random1<random2)
    {
        document.querySelector(".container>h1").textContent="Player2 wins ";
    }
else
    {
        document.querySelector(".container>h1").textContent="Draw";
    }