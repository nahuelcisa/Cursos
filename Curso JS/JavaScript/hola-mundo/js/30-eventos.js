'use strict'

// Eventos del mouse

window.addEventListener('load',()=>{

    var boton = document.querySelector("#boton");

    function cambiarColor(){
        var bg = boton.style.background;
        console.log("Apretaste");

        if(bg == "green"){ 
            boton.style.background = "red";
            
        }else{
            boton.style.background = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        return true;
    }

    var boton = document.querySelector("#boton");


    boton.addEventListener('click',function(){
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });

    //Mouse over

    boton.addEventListener('mouseover',function(){
        boton.style.background = "yellow";
    });

    //mouseout
    boton.addEventListener('mouseout',function(){
        boton.style.background = "#ccc";
    });


    //FOCUS
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus',function(){
        console.log("[Focus]Estas dentro del input");
    });

    //BLUR
    input.addEventListener('blur',function(){
        console.log("[Blur]Estas fuera del input");
    });

    //KEYDOWN

    input.addEventListener('keydown',function(){
        console.log("[keydown]Estas pulsando la tecla", String.fromCharCode(event.keyCode));
    });

    //KEYPRESS

    input.addEventListener('keypress',()=>{
        console.log("[keypress] tecla presionada ", String.fromCharCode(event.keyCode));
    });

    //KEYUP

    input.addEventListener('keyup',function(){
        console.log("[keyup] tecla soltada ", String.fromCharCode(event.keyCode));
    });

});


