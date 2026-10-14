/* l ingresar una edad 
debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. */

/* Proceso = Este ejercicio es igual que el anterior, 
pero además nos pide informar al usuario cuando la condición no se cumple */

function Mostrar () {

let edad;
edad = document.getElementById("edad").value;
edad = parseInt (edad);

if (edad > 18) {
    alert ("Sos mayor de edad, gato");
}
else alert ("Sos un chiquilín");

}