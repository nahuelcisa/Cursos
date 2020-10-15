// Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

// Decorador

function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de : "+logo);
        } 
    }
}

// Clase (Molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{

    // Propiedades(caracteristicas del objeto)
    // pueden ser public private o protected

    private color: string;
    private modelo: string;
    private marca: string;
    private talle: string;
    private precio: number;

    // Metodos(funciones o acciones del objeto)

    constructor(color,modelo,marca,talle,precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talle = talle;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

}

// Clase hija

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("rojo","manga larga","nike","1",14);
//camiseta.setColor("Rojo");
console.log(camiseta);
camiseta.estampacion();

var sudadera = new Sudadera("Rojo","Manga larga","Nike","L",30);
sudadera.setCapucha(true);
sudadera.setColor("Azul");

console.log(sudadera);

/*
camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talle = "L";
camiseta.precio = 10;
*/

//var playera = new Camiseta();
//playera.setColor("Azul");


/*
playera.color = "Azul";
playera.modelo = "Manga corta";
playera.marca = "Adidas";
playera.talle = "L";
playera.precio = 15;
*/




