

export function Loader(){

const player=document.getElementById('playerL'),
      left=document.getElementById('one'),
      right=document.getElementById('two');
 
 Load();
 setInterval(Loader,2000)
   
   
   function Load(){
   
setTimeout(function(){
  player.style.transform="rotate(360deg)";

  
}, 300);
setTimeout(function(){
  player.style.transform="rotate(-360deg) scale(2)";
  left.style.background="rgb(91,164,255)";
  right.style.background="rgb(91,164,255)";
},1000)
 }
}