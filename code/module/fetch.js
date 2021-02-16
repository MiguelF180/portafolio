
export function Fetch(){
  
  const form=document.getElementById('form'),
        model=document.getElementById('model');
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    
  let datos=new FormData(form);
  
 console.log(datos.get('usuario'))
   
    fetch('php/envio.php',{
      method:'POST',
      body:datos
      
    })
    .then(res=>res.json())
    .then(data=>{
      model.innerHTML=`${data}`
      alert('uwu')
    })
    
    
    
    
    
    
  })
  
  
  
  
}