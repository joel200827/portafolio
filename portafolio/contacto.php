<?php
require 'includes/header.php';
?>
<div class="h4">
    <h4>contacto</h4>
</div>

<main>

    <form class="formulario" method="post">
        <fieldset>
            <legend>digite sus datos</legend>

            <div>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" 
                placeholder="digite nombre completo" required autofocus>
            </div>

            <div>
                <label for="tel">Telefono</label>
                <input type="text" name="tel" id="tel" placeholder="+57 3xxxxxx">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="text" name="email" id="email" placeholder="correo@correo.com">
            </div>
            <div>
                <label for="men">Mensaje</label>
                <textarea type="" name="men" id="men" placeholder="mensaje"></textarea>
            </div>

            <input type="submit">

        </fieldset>
    </form>
</main>

<?php

$nombre = $_POST['nombre'];
$telefono = $_POST['tel'];
$correo = $_POST['email'];
$mensaje = $_POST['men'];
try {
    require __DIR__.('/includes/conexion_bd.php');
    $sql = "INSERT INTO formulario (nombre, telefono, correo, mensaje) VALUES ('$nombre',
    '$telefono','$correo','$mensaje');";
    $query = mysqli_query($coneccion, $sql);
    echo 'se ha resivido se mensaje';
} catch (\Throwable $th) {
    var_dump($th);
}




include __DIR__.'/includes/footer.php';
