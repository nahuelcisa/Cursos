'use strict'

window.addEventListener('load',()=>{

    //timers

    function intervalo(){

        var tiempo = setInterval(()=>{
        
            console.log("Set interval ejecutado");
            var encabezado = document.querySelector("h1")
            if(encabezado.style.fontSize == "50px"){ 
    
                encabezado.style.fontSize = "20px"
            }else{
    
                encabezado.style.fontSize = "50px"
    
            }
        },1000);

        return tiempo;
    }
    
    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener('click',()=>{
        alert("Paraste el bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener('click',()=>{
        alert("Iniciaste el bucle");
        intervalo();
    })
});


/*

window.addEventListener('load',()=>{

    //timers
    var tiempo = setInterval(()=>{
        
        console.log("Set interval ejecutado");
        var encabezado = document.querySelector("h1")
        if(encabezado.style.fontSize == "50px"){ 

            encabezado.style.fontSize = "20px"
        }else{

            encabezado.style.fontSize = "50px"

        }
    },500);
});

SE EJECUTA EN BLOQUE


*/
