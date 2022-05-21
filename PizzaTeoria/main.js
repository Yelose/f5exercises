
let ingredientesMasa = "harina, agua, aceite de oliva, levadura fresca y sal"
let ingredientesSalsa = "tomate triturado, cebolla, ajo, aceite de oliva, vinagre, sal, azúcar, pimienta"
let ingredientesPizza = ["mozzarella", "aceitunas negras", "pepperoni", "jamón", "bacon", "champiñones"]
let formasDeMasa = ["cuadrada", "de corazón", "circular"]
function prepararMasa () {
    console.log ("PREPARACIÓN DE LA MASA:")
    console.log ("Se mezcla en un bol " + ingredientesMasa+ ".") ;
    console.log ("Se amasa, se hace bola, y se deja fermentar hasta que duplica el volumen.")
}
function prepararSalsa () {
    console.log ("Se mezcla " + ingredientesSalsa + " en un recipiente, y se bate bien."); 
}
function formaMasa () {
    console.log ("Se estira la masa de forma " + formasDeMasa[2] + " se hacen los bordes" ) 
}
function prepararPizza () {
    formaMasa ();
}
function app () {
     prepararMasa();
     prepararSalsa ();
     formaMasa ();
}

app ();