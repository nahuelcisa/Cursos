'use strict'

var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
La suma es: ${numero1+numero2}
La resta es: ${numero1-numero2}
La multiplicacion: ${numero1*numero2}
La division: ${numero1/numero2}
`;


//console.log(numero1);
//console.log(numero2);
//console.log(params);

console.log(plantilla);
console.log("hola mundo con NodeJS");