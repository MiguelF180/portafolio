<?php


if(isset($_POST['btn'])&&isset($_POST['usuario'])&&isset($_POST['correo']) && isset($_POST['mensaje'])){

$destino="foliaco18@gmail.com";
$usuario=$_POST['usuario'];
$correo=$_POST['correo'];
$mensaje=$_POST['mensaje'];

  

$msj="Por parte de ".$usuario." cuyo correo es de contacto es ".$correo." te dice que ".$mensaje;

mail($destino,"Contacto",$msj);

}
header('Location:../index.html');

