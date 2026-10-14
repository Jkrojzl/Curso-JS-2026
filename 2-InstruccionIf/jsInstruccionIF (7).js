/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

/*Parecido a un ejercicio anterior. Aquí voy a utilizar el IF porque necesito
que se cumplan con dos condiciones. La diferencia respecto al otro ejercicio es que aquí
una de las condiciones es un número; la otra es una selección que el usuario tiene que hacer
entre tres opciones, ahí debería utilizar un valor booleano */


function Mostrar () {

let edad;
edad = document.getElementById("edad").value;

let estado_civil;
estado_civil = document.getElementById ("estadoCivil").value;

if (edad < 18 && estado_civil == "Soltero") {
    alert ("Es muy pequeño para NO ser soltero.");
}

}