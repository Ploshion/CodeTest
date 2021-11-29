<?php
if(!empty($_POST['usuario']) && !empty($_POST['password']))
{
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];
   

    if($usuario == "user" && $password == "123"){
        header("location: index.html");
    } else {
       header("location: index.php");
    }

}else{
    header("location: index.php");
    
}





