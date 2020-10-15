var bicicleta = {
    color  : 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    cambiarColor: function(nuevoColor){ // Funcion o metodo
        //bicicleta.color = nuevoColor; // hace lo mismo que lo de abajo
        this.color = nuevoColor;
        console.log(this);
    }
};

bicicleta.cambiarColor("Azul");