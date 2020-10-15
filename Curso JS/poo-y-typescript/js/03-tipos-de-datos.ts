type alfanumerico = string | number;

// string

let cadena: alfanumerico = "NahuelCisa";

cadena = 12;

// number

let numero: number = 12;

// boleano

let boleano: boolean = true;

// any

let cualquiera: any = "hola";

// Arrays
var lenguajes: Array<string> = ['PHP','JS','CSS'];

let years: number[] = [12,13,14];

// let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1,numero2);
}

console.log(numero1,numero2);

console.log(cadena,numero,boleano,cualquiera, lenguajes,years);