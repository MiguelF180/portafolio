export function Carga(){
  
  setTimeout(function(){
    document.getElementById('canvas').style.opacity="0";
  },2900)
setTimeout(function() {
  document.getElementsByTagName('body')[0].classList.remove('hidden');
  document.getElementById('canvas').style.display='none';
},3000);
  
}