"use strict"

// IF

var edad = 18;
var nombre = "Nahuel Cisa";

if(edad>=18){
    console.log(nombre + " es mayor de edad y su edad es "+ edad);

    if(edad<=33){
        console.log("Todavia eres millenial");
    }else if(edad>= 70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres millenial");
    }
}else{
    console.log(nombre + " es menor de edad, tiene "+ edad + " años de edad");
}