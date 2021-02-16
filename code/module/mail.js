
  const form=document.querySelector('#form');
  let model=document.querySelector('#model');
   
   form.addEventListener('submit',function(e){
    
    e.preventDefault();
    
    let datos=new FormData(form);
    
    
    fetch('../php/envio.php',{
   
    })
    .then(res=>res.json())
    .then(data=>{
   model.style.transform="translateX(0%)";
   alert('uwu')
   model.innerHTML=`
    <img src="image/true.png" width="200px">
      
      <p>${data}</p>
      
      <button id="btnclose">Cerrar</button>
        '
   setTimeout(function() {
     
   model.style.transform="translateX(-500%)";
   }, 3000);
   
    
  })
  
   })
 
  

