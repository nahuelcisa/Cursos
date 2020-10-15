'use strict'

// Localstorage 

// Comprobar si existe localstorage
if(typeof(Storage)!= 'undefined'){
    console.log("Localstorage Disponible");
}else{
    console.log("Localstorage no Disponible");
}

// Guardar datos 

localStorage.setItem("titulo","Curso de Symfony de Nahuel Cisa");

// Recuperar elemento

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos

var usuario = {
    nombre : "Nahuel",
    email : "nahuelcisa@hotmail.com",
    web : "nahuelcisa.com.ar"
};

// JSON.stringify ME CAMBIA UN OBJETO JSON A STRING PARA GUARDAR EN localStorage

localStorage.setItem("usuario",JSON.stringify(usuario));

// Recuperar objeto

var userjs = JSON.parse(localStorage.getItem("usuario"));
document.querySelector("#datos").append(userjs.web+ " - "+userjs.nombre);

localStorage.clear();