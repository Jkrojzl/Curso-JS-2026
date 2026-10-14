/* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */

 /* Este ejercicio es una especie de mezcla de los anteriores, pero acá tengo tres estados finales,
 por eso debería usar aquí el else if para poder dar cuenta de eso */

 function Mostrar () {

let edad;
edad = document.getElementById("edad").value;
edad = parseInt (edad);

if (edad > 17) {
    alert ("Sos un adulto. Ahora tenés que trabajar hasta fenecer.");
} else if (edad <= 17 && edad >=13) {
    alert ("Sos un adolescente. No estás bien.");
}
else alert ("Sos un niño. Disfrutalo porque se termina.");
}