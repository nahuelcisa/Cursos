'use strict'

// Parametros REST y SPREAD

function listadoFrutas(fruta1,fruta2, ...RestoDeFrutas){
    console.log("Fruta 1: "+ fruta1);
    console.log("Fruta 2: "+ fruta2);
    console.log(RestoDeFrutas);
}

listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");


var frutas = ['Naranja','Manzana'];
listadoFrutas(...frutas,"Sandia","Pera","Melon","Coco");