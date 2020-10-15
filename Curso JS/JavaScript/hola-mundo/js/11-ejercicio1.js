"use strict"

/*
programa que pidad os numeros y que nos diga cual es mayor, el menor y si son iguales
*/

var num1 = parseInt(prompt("Ingrese un numero",0));
var num2 = parseInt(prompt("Ingrese otro numero",0));

while(isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0){
    alert("Error. reingrese numeros.");
    num1 = parseInt(prompt("Ingrese un numero",0));
    num2 = parseInt(prompt("Ingrese otro numero",0));
}

if(num1 == num2){
    alert("Los numeros son iguales.");
}else if(num1>num2){
    alert(num1+" es mayor que "+num2);
}else{
    alert(num2+" es mayor que "+num1);
}