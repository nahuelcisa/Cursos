'use strict'

//DOM - DOCUMENT OBJECT MODE

function cambiaColor(color){
    caja.style.color = color;
}

//CONSEGUIR ELEMENTOS CON UN ID CONCRETO

//# SE ELIJEN LOS DIV
//var caja =  document.getElementById("micaja");

var caja = document.querySelector("#micaja");


caja.innerHTML = "Texto en la caja desde js"
caja.style.background = "black";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola2";

cambiaColor("red");

//console.log(caja);


//CONSEGUIR ELEMENTOS POR SU ETIQUETA

var todosLosDivs = document.getElementsByTagName("div");

//var contenidoEnTexto = todosLosDivs[2];

//contenidoEnTexto.innerHTML = "otro texto para el segundo elemento";

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");




for(var valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == "string"){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.prepend(texto);
        seccion.append(parrafo);
    }
}

seccion.append(hr);


//console.log(todosLosDivs);
//console.log(contenidoEnTexto);

//CONSEGUIR ELEMENTO POR SU CLASE CSS

var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background = "yellow";


for(var div in divsRojos){
    if( divsRojos[div].className == "rojo"){ 
    divsRojos[div].style.background = "red";
    }
}


// QUERY SELECTOR

var id = document.querySelector("#encabezado");
console.log(id);

var clase = document.querySelectorAll(".rojo");
console.log(clase);

var etiqueta = document.querySelector("div");
console.log(etiqueta);