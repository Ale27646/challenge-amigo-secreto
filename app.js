// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Este array almacenará el nombre de todos los amigos
let amigos = [];

//Esta función agrega los nombres en el arreglo
function agregarAmigo() {
    //Guarda nombre de casilla de texto
    let amigoNuevo = document.getElementById('amigo').value;
    //Condición si la casilla de texto esta vacia genera un alert
    if (amigoNuevo == '') {
        alert('Por favor, inserte un nombre válido');

    } //Si la casilla no está vacia, ingresa el nombre en el arreglo y limpia la caja
        else {
        amigos.push(amigoNuevo);
        limpiarCaja();
        visualizaLista(amigos);
    }
    }

    //Limpia el cuadro de texto
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

//Funcion que agrega cada elemento a la lista
function visualizaLista(arreglo) {
    //Elimina resultado de sorteo anterior
    document.getElementById('resultado').innerHTML= '';
    
    //Agrega elementos a la lista
    let lista = document.createElement('li');
    for (let index = 0; index < arreglo.length; index++) {
        lista.textContent = arreglo[index];
        document.getElementById('listaAmigos').appendChild(lista);
    }
    return;
}

//Función de sorteo
function sortearAmigo() {
    // Se valida que haya amigos disponibles y limpia el resultado anterior
    if (amigos == "") {
        document.getElementById('resultado').innerHTML= '';
        alert('Antes de hacer el sorteo debes ingresar el nombre de tus amigos');
    } // Limpia la lista de amigos y sortea al ganador
    else {
        document.getElementById('listaAmigos').innerHTML = '';
        let numeroGanador = Math.floor(Math.random()*(amigos.length));
        let ganador = amigos[numeroGanador];
        let textoGanador = document.getElementById('resultado');
        textoGanador.innerHTML = `El amigo secreto sorteado es: ${ganador}`
        amigos = [];
    }
}