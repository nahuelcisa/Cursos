"use strict"

var suma = 0;
var contador = 0;
var numero;
var resultado;

do{
    numero = parseInt(prompt("Ingrese numeros, introduciendo uno negativo se corta el bucle.",0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma += numero;
        contador++;
    }

}while(numero >= 0);

resultado = suma/contador;

alert("La suma es: "+ suma + " y la media es: "+resultado);