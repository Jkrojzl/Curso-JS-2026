/*Al ingresar una edad debemos informar si la persona es mayor de edad */

//igual al anterior. Solo cambia el operador

function Mostrar () {

let edad;
edad = document.getElementById("edad").value;
edad = parseInt (edad);

if (edad > 18) {
    alert ("Sos mayor de edad, gato");
}

}