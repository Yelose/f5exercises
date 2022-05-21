console.log ("lañsjdkfñalskdjfñalksjdf")
// Escribe un programa que escriba en la pantalla un texto que diga “Hello World”.

document.querySelector("body header p").innerHTML = "¡Hola Mundo!"
// Escribe un programa que escriba en la pantalla el resultado de sumar 3 + 5.

document.querySelector("body main section h1").innerHTML = 3+5

//Escribe un programa que pida el nombre del usuario con un prompt o 
//utilizando un input y escriba un texto que diga “Hola nombreUsuario"

let nombreUsuario = prompt("¿Cómo te llamas?")

if (nombreUsuario != "") {
    document.querySelector("body main section h2").innerHTML = `¡Hola ${nombreUsuario}!`
} else {
    document.querySelector("body main section h2").innerHTML = `¡Hola desconocido! Refresca la página y escribe tu nombre`
}

let a = 0
let b = 0

function suma () {
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    let c = a + b;
    document.querySelector(".resultado").innerHTML = `${c}`

}


