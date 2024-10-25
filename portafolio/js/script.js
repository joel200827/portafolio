// document.getElementById("btnmenu").addEventListener("click",
//     function () {
//         let elemento = document.getElementById("navbar");
//         if (elemento.classList.contains("navbar")) {
//             elemento.classList.remove("navbar");
//             elemento.classList.add("no_navbar")
//         } else {
//             elemento.classList.remove("no_navbar");
//             elemento.classList.add("navbar")
//         }
//     })

    
const nombre = document.querySelector("#nombre");
const Telefono = document.querySelector("#tel");
const Email = document.querySelector("#email");
const Mensaje = document.querySelector("#men");
const formulario = document.querySelector(".formulario");
formulario.addEventListener('submit', validarformulario);


function validarformulario(e) {
    e.preventDefault();

    if (nombre.value ==="" || Telefono.value ==="" || Email.value ==="" || Mensaje.value ==="") {

        mostraError('todos los campos son obligatorios');
        

        return;
    }

    alert('hemos recibidos su datos, pronto nos pondremos en contacto')
    e.target.submit();

    
}


function mostraError(Mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = Mensaje;
    alerta.style.background= "red";

    formulario.appendChild(alerta);

    setInterval(() => {
        alerta.remove();
    },5000);

}