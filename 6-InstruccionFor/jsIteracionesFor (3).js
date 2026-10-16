/*al presionar el botón pedir la cantidad de veces 
que quiero repetir el mensaje "Hola UTN FRA"*/

//Acá necesitamos una variable (no i) tipo CANTIDAD que pedimos con un prompt

function Mostrar () {

let Cantidad;

Cantidad = prompt ("Cuántas veces querés recibir la bendición?" );

for (let i=0; i<Cantidad; i++) {
alert ("Hola UTN FRA");
}
}
