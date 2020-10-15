'use strict'

//--------------------let y var--------------------//


//--------------------PRUEBA CON VAR--------------------//
var numero = 40;

console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero);

//--------------------PRUEBA CON LET--------------------//

var texto = "Nahuel";
console.log(texto);

if(true){
    let texto = "Giuliana";
    console.log(texto);
}

console.log(texto);