<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>
<body>
</body>
</html>
<?php
$enlace = mysqli_connect("127.0.0.1", "root", "", "formulario");

if (!$enlace) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

echo "Exito: Se realizo una conexion apropiada a MySQL! La base de datos mi_bd es genial." . PHP_EOL;
echo "Informacion del host: " . mysqli_get_host_info($enlace) . PHP_EOL;
echo "</br>";


$name=$_REQUEST["name"];
$username=$_REQUEST["username"];
$email=$_REQUEST["email"];
$password=$_REQUEST["password"];
$tlf=$_REQUEST["tlf"];


echo $name."</br>";
echo $username."</br>";
echo $email."</br>";
echo $password."</br>";
echo $tlf."</br>";

$sql="INSERT INTO formulario (name,username,email,password,tlf) VALUES('$name','$username','$email','$password',$tlf)";

if (mysqli_query($enlace, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($enlace);
?>
