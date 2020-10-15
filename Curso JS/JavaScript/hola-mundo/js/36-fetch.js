'use strict'

var divUsuarios = document.querySelector("#usuarios");
var divJanet = document.querySelector("#janet");
var divProfesor = document.querySelector("#profesor");
// Fetch (ajax) y peticiones a servicios / apis rest


    getUsuarios().then(data => data.json())
    .then(users =>{

    listadoUsuarios(users.data);


    return getInfo();
    })
    .then(data => {
        divProfesor.innerHTML = data;

        return getJanet();
    })
    .then(data => data.json())
    .then(janet =>{

        mostrarJanet(janet.data);
})
.catch(error =>{
    alert("Error en las peticiones");
});
    





function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2');
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    
    var profesor = {
    nombre : "Nahuel",
    email : "nahuelcisa@hotmail.com",
    web : "nahuelcisa.com.ar"
    }
    return new Promise((resolve,reject)=>{
        var profesorString = " ";
        setTimeout(() => {
           profesorString = JSON.stringify(profesor);

        if(typeof profesorString != "string" || profesorString == " ") return reject("error 1");

        return resolve(profesorString);

        }, 3000);
       

       
    });
    }

function listadoUsuarios(usuarios){

    usuarios.map((user,i)=>{

        let nombre = document.createElement('h3');

        nombre.innerHTML = i + " . " + user.first_name + " " + user.last_name;

        divUsuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";

    });
}

function mostrarJanet(user){

    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML =  user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = "100";

    divJanet.appendChild(nombre);
    divJanet.appendChild(avatar);

    document.querySelector("#janet .loading").style.display = "none";
}