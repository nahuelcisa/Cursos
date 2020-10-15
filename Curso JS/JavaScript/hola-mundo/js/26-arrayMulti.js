'use strict'

var categorias = ["accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele","La vida es bella","Gran torino"];

//peliculas.sort(); ORDENA DE FORMA ALFABETICA
//peliculas.reverse(); DA LA VUELTA AL ARRAY

console.log(peliculas);

var cine = [categorias,peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);
/*
var elemento;
do{ 
    elemento = prompt("Agrega pelicula");
    peliculas.push(elemento);
}while(elemento != 'ACABAR')

peliculas.pop();//ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
*/

var indice = peliculas.indexOf("Gran torino");

if(indice > -1){
    peliculas.splice(indice,1);//ELIMINA EL INDICE DETERMINADO
}

var peliculasStr = peliculas.join();//CONVIERTE ARRAY EN TEXTO SEPARADO POR COMAS

var cadena = "texto1, texto2, texto3";
var cadenaArray = cadena.split(", ");//CREA ARRAY Y LO QUE VA ENTRE PARENTESIS ES LO QUE SEPARA CADA ELEMENTO


console.log(cadenaArray);