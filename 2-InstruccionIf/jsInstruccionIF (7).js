/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

/*Parecido a un ejercicio anterior. Aquí voy a utilizar el IF porque necesito
que se cumplan con dos condiciones. La diferencia respecto al otro ejercicio es que aquí
una de las condiciones sigue siendo un número pero la otra es una cadena (string) que debe corresponderse al valor que estoy asignando.
En los hechos la única diferencia es que tengo que poner el string entre comillas */


function Mostrar () {

let edad;
edad = document.getElementById("edad").value;

let estado_civil;
estado_civil = document.getElementById ("estadoCivil").value;

if (edad < 18 && estado_civil == "Soltero") {
    alert ("Es muy pequeño para NO ser soltero.");
}

}