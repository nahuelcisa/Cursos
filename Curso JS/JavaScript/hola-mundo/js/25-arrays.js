'use strict'
// Arrays, Arreglos, Matrices, Vectores


var nombre = "Nahuel Cisa";
var nombres = ["Nahuel", "Giuliana", "Bibi", "Matilda", 54, true];

var lenguajes = new Array("PHP","JS","Go","Java","C#","C","Pascal"); //OBJETO
/*
var elemento = parseInt(prompt("Que elemento del array quieres?",0));

if(elemento >= nombres.length){
    alert("El indice puesto es mayor que el indice, introduce un numero menor que "+nombres.length);
}else{
    alert(nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programacion del 2018 </h1>");
document.write("<ul>");
/*
for(var i = 0; i< lenguajes.length;i++){ 
document.write("<li>"+lenguajes[i]+"</li>");
}
*/
/*
lenguajes.forEach((elemento)=>{
    document.write("<li>"+elemento+"</li>");
});
document.write("</ul>");
*/

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");


//BUSQUEDAS
//FIND BUSCA ALGO EXPLICITO
//FINDINDEX BUSCA INDICE DE ALGO EXPLICITO
//SOME BUSCA ALGO QUE CUMPLE UNA CONDICION CONCRETA

var precios = [10,20,50,80,12];

//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

var busqueda = precios.some(precio => precio >= 80);

console.log(busqueda);