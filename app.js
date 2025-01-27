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
}else {
listaDeAmigos.push(nombre);
console.log(listaDeAmigos);
}

}