/*Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/

/* Este ejercicio también es similar a los dos anteriores, pero necesito informar sobre una etapa intermedia que 
tiene dos condiciones que cumplir, para eso, debería usar el conector AND) */

function Mostrar () {

let edad;
edad = document.getElementById("edad").value;
edad = parseInt (edad);

if (edad <= 17 && edad >=13) {
    alert ("Tus hormonas están alborotadas");
}

}