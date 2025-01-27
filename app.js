// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function asignarTexto(elemento, texto){
let elementoHTML= document.querySelector(elemento);
elementoHTML.innerHTML= texto;
return;//buena practica
}

function agregarAmigo() {
let nombre = document.getElementById('amigo').value; //caja de texto
if(nombre ===""){ //validamos que no este vacio
alert("Por favor, ingrese un nombre")   

}   else {
listaDeAmigos.push(nombre);//agrega al array
console.log(listaDeAmigos);
document.getElementById('amigo').value = "";//limpia la caja
}

mostrarListaAmigos();//para el html
}

function mostrarListaAmigos(){
let listaHTML = document.getElementById('listaAmigos')

// Limpiamos el contenido de la lista para evitar duplicados
listaHTML.innerHTML = "";

//recorrer el array `listaDeAmigos`
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li'); //crea el li para hacer esto <li>juan<li>
        li.textContent = listaDeAmigos[i]; // Asignamos el nombre del amigo
        listaHTML.appendChild(li); // Agregamos el <li> al <ul>
    }

}

function sortearAmigo(){
    if(listaDeAmigos.length === 0){
        alert("No hay amigos en la lista para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    //console.log(indiceAleatorio); //muestra del array cual es el elido
    let amigoElegido = listaDeAmigos[indiceAleatorio];
    console.log(amigoElegido);

    let resultadoHTML=  document.getElementById('resultado')
    resultadoHTML.innerHTML = `Amigo secreto sorteado: ${amigoElegido} 🎉`

}