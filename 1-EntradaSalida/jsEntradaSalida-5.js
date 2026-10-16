/* 
Debemos lograr tomar nombre y edad por ID.
Mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años"
*/

//Es el ejercicio tres pero usando dos variables distintas, que necesitamos concanetar al final

function Mostar () {
let nombre;
nombre = document.getElementById ("elNombre").value;

let edad;
edad = document.getElementById ("laEdad").value;

alert ("Usted se llama " + nombre + " y tiene " + edad + " años.");
}