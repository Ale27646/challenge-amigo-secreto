// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Este array almacenará el nombre de todos los amigos
let amigos = [];

function agregarAmigo() {
    //Guarda nombre de casilla de texto
    let amigoNuevo = document.getElementById('amigo').value;
    console.log(amigoNuevo);
    //Condición si la casilla de texto esta vacia genera un alert
    if (amigoNuevo == '') {
        alert('Por favor, inserte un nombre.');

    } //Si la casilla no está vacia, ingresa el nombre en el arreglo y limpia la caja
        else {
        amigos.push(amigoNuevo);
        limpiarCaja();
        console.log(amigos);
    }
    }

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}