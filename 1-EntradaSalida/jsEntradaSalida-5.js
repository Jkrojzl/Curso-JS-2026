/* 
Debemos lograr tomar nombre y edad por ID.
Mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años"
*/

//Es similar al ejercicio 3, con la diferencia que acá tomamos DOS valores distintos y los concanetamos al final usando el conector +.

function Mostar () {
let nombre;
nombre = document.getElementById ("elNombre").value;

let edad;
edad = document.getElementById ("laEdad").value;

alert ("Usted se llama " + nombre + " y tiene " + edad + " años.");
}
