<?php
try {
    $servidor = 'localhost';
    $usuario = 'root';
    $password = '1115726301';
    $bd = 'portafolia';

    $coneccion = mysqli_connect($servidor, $usuario, $password, $bd);
    echo ('coneccion a la base de datos exitosa');
} catch (\Throwable $th) {
    var_dump($th);
}
