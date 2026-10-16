/** Al ingresar una edad que sea igual a 15, 
 * mostrar el mensaje "niña bonita".
  */

//Ejercicio simple con una condición: si se cumple, se muestra un mensaje.

function Mostrar() {

let edad;
edad = document.getElementById("edad").value;
edad = parseInt (edad);

if (edad == 15) {
    alert ("niña bonita");
}

}