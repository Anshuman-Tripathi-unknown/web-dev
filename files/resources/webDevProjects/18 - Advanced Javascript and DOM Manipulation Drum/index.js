var arr = document.querySelectorAll(".drum");
function checker(arg){
  switch (arg) {
    case "w":
      var a=new Audio("./sounds/crash.mp3");
      a.play();
      break;
    case "a":
      var a=new Audio("./sounds/kick-bass.mp3");
      a.play();
      break;
    case "s":
      var a=new Audio("./sounds/snare.mp3");
      a.play();
      break;
    case "d":
      var a=new Audio("./sounds/tom-1.mp3");
      a.play();
      break;
    case "j":
      var a=new Audio("./sounds/tom-2.mp3");
      a.play();
      break;
    case "k":
      var a=new Audio("./sounds/tom-3.mp3");
      a.play();
      break;
    case "l":
      var a=new Audio("./sounds/tom-4.mp3");
      a.play();
      break;
    default:
      break;
  }
}
for (i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click",function(){
    checker(this.innerHTML);
    activebutton(this.innerHTML);
  });
}
document.addEventListener("keypress",function(event){
checker(event.key);
activebutton(event.key);
});
function activebutton(para)
{
  var current =document.querySelector("."+para)
  current.classList.add("pressed");
  setTimeout(function(){
    current.classList.remove("pressed");
  },100);
}