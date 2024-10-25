const imagenes = [
    './imagenes/img1.png','./imagenes/img2.png','./imagenes/img3.png','./imagenes/img4.png','./imagenes/img5.png',
    './imagenes/img6.png'];
    /*const imagenes: Declara una constante llamada imagenes que contiene un array con las rutas de varias imágenes. Estas imágenes se usarán para crear las cartas del juego.*/

let valores = [];
/*let valores = []: Inicializa un array vacío llamado valores que almacenará las imágenes duplicadas y mezcladas.*/
let cartasDestapadas = [];
/*let cartasDestapadas = []: Inicializa un array vacío llamado cartasDestapadas que almacenará los índices de las cartas que han sido destapadas*/
let aciertos = 0;
/*let aciertos = 0: Declara una variable aciertos para llevar el conteo de pares encontrados.*/
let movimientos = 0;
/*let movimientos = 0: Declara una variable movimientos para llevar el conteo de  pares encontrados*/
let tiempoRestante = 40;
/*let tiempoRestante = 40: Declara una variable tiempoRestante para llevar el conteo de los intentos realizados.*/
let intervalo;
/*let intervalo: Declara una variable intervalo que se usará para almacenar el ID del intervalo del temporizador.*/

    function inicializarJuego() { /*Define una función que inicializa el juego.*/
    valores = generarValores(); /*Llama a la función generarValores para llenar el array valores con las imágenes duplicadas y mezcladas.*/
    crearTablero(); /*Llama a la función crearTablero para generar las cartas en el tablero.*/
    actualizarEstadisticas(); /*Llama a la función actualizarEstadisticas para mostrar las estadísticas iniciales.*/
    intervalo = setInterval(actualizarTiempo, 1000); /*nicia un temporizador que llama a la función actualizarTiempo cada segund*/

}


    function generarValores() {/* Define una función que genera los valores para las cartas.*/
    const pares = [];/*nicializa un array vacío pares para almacenar las imágenes duplicadas.*/
    for (let i = 0; i < imagenes.length; i++) { /*Itera sobre cada imagen en el array imagenes*/
            pares.push(imagenes[i]); /*Agrega cada imagen dos veces al array pares.*/
        pares.push(imagenes[i]); 
    }
    return pares.sort(() => 0.5 - Math.random()); /* Mezcla los valores de pares de forma aleatoria y los retorna.*/
}

    function crearTablero() { /*Define una función que crea las cartas en el tablero.*/
    const grid = document.querySelector('.grid'); /*Selecciona el elemento HTML con la clase grid.*/
    valores.forEach((valor, index) => { /*Itera sobre cada valor en el array valores.*/
        const button = document.createElement('button'); /*Crea un nuevo botón para cada carta.*/
        button.id = index; /*Asigna un ID único a cada botón basado en su índice*/
        button.classList.add('carta'); /*Añade la clase carta a cada botón*/
        button.onclick = () => destapar(index); /*Asigna un evento onclick a cada botón para que llame a la función destapar cuando se haga clic en él.*/
        grid.appendChild(button); /*Añade el botón al contenedor grid*/
    });
}

function actualizarEstadisticas() { /*Define una función que actualiza las estadísticas mostradas al jugador.*/
    document.getElementById('puntaje').innerText = `Aciertos: ${aciertos}`; /*Actualiza el texto del elemento con el ID puntaje para mostrar el número de aciertos.*/
    document.getElementById('movimientos').innerText = `Movimientos: ${movimientos}`; /*Actualiza el texto del elemento con el ID movimientos para mostrar el número de movimientos.*/
    document.getElementById('restante').innerText = `Tiempo: ${tiempoRestante} segundos`; /* Actualiza el texto del elemento con el ID restante para mostrar el tiempo restante.*/
}

    function actualizarTiempo() { /*Define una función que actualiza el tiempo restante.*/
    if (tiempoRestante > 0) { /*Verifica si aún queda tiempo.*/
        tiempoRestante--;
        actualizarEstadisticas();/*Actualiza las estadísticas mostradas.*/
    } else { /*Si no queda tiempo, detiene el temporizador y muestra una alerta indicando que el tiempo se ha agotado.*/
        clearInterval(intervalo);
        alert("¡Tiempo agotado! El Juego termino.");
    }
}

    function destapar(id) { /*Define una función que destapa una carta.*/
    if (cartasDestapadas.length < 2 && !document.getElementById(id).classList.contains('destapada')) {/*Verifica que no haya más de dos cartas destapadas y que la carta seleccionada no haya sido ya destapada.*/
        document.getElementById(id).style.backgroundImage = `url(${valores[id]})`;/*Muestra la imagen correspondiente en la carta seleccionada.*/
        document.getElementById(id).classList.add('destapada');/*Añade la clase destapada a la carta seleccionada.*/
        cartasDestapadas.push(id); /*Añade el ID de la carta seleccionada al array cartasDestapadas.*/

        if (cartasDestapadas.length === 2) {/*Si hay dos cartas destapadas, incrementa el número de movimientos y verifica si las cartas coinciden.*/
            movimientos++;
            if (valores[cartasDestapadas[0]] === valores[cartasDestapadas[1]]) {/*Si las cartas coinciden, incrementa el número de aciertos y vacía el array cartasDestapadas.*/
                aciertos++;
                cartasDestapadas = [];
            } else {/*i las cartas no coinciden, esconde las imágenes después de un segundo y vacía el array cartasDestapadas*/
                setTimeout(() => {
                    document.getElementById(cartasDestapadas[0]).style.backgroundImage = '';
                    document.getElementById(cartasDestapadas[1]).style.backgroundImage = '';
                    document.getElementById(cartasDestapadas[0]).classList.remove('destapada');
                    document.getElementById(cartasDestapadas[1]).classList.remove('destapada');
                    cartasDestapadas = [];
                }, 1000);
            }
            actualizarEstadisticas();/*Actualiza las estadísticas mostradas*/
            if (aciertos === imagenes.length) {/*Si se han encontrado todos los pares, detiene el temporizador y muestra una alerta de felicitación.*/
                clearInterval(intervalo);
                alert("¡Felicidades! Has ganado.");
            }
        }
    }
}

window.onload = inicializarJuego;