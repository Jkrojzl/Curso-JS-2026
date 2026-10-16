/**Al ingresar una edad solo debemos informar si la persona NO es adolescente.
 */

/* Es exactamente igual que el anterior, pero inverso. Aquí sigo el mismo razonamiento pero excluyendo
a las edades contempladas en el ejercicio anterior. Para eso debo utilizar otro operador, el "o" */

function Mostrar () {

let edad;
edad = document.getElementById("edad").value;
edad = parseInt (edad);

if (edad > 17 || edad < 13) {
    alert ("Tus hormonas no están alborotadas. Estás bien");
}

}