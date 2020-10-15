"use strict"

//  SWITCH

var edad = 25;
var imprime = "";

switch(edad){
    case 18 :
        imprime = "Acabas de cumplir la mayoria de edad";
    break;

    case 25 :
        imprime = "Sos un adulto";
    break;

    case 40 :
        imprime = "Crisis de los cuarenta";
    break;

    case 75 :
        imprime = "sos un anciano";
    break;
    default:
        imprime = "tu edad es neutra";
}

console.log(imprime);