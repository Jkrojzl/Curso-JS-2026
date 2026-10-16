/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

/*Similar al ejercicio anterior. Aquí cambio solamente la comparación de una de las condiciones (la numérica), y el mensaje final */

function Mostrar () {

let edad;
edad = document.getElementById("edad").value;

let estado_civil;
estado_civil = document.getElementById ("estadoCivil").value;

if (edad >= 18 && estado_civil == "Soltero") {
    alert ("Es soltero y no es menor.");
}

}