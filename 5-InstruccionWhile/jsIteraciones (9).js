/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo. */

/*Complicado. Lo de pedir números hasta que el usuario quiera ya lo sabemos de memoria.
Para lo otro creo que debo usar, como en el ejercicio anterior, dos contadores distintos, 
uno que vaya ELIGIENDO el número más alto y el otro el más bajo. Sin sumar ni hacer operaciones matemáticas */

function Mostrar () {

let Usuario;

let Número = parseInt (prompt ("Ingrese un número")); // puse esto ANTES de definir que Mínimo y Máximo son los números porque me daba error sino

let Mínimo = Número; 
let Máximo = Número; 

Usuario = prompt ("¿Desea sumar otro número? S / N").toUpperCase(); 

 while (Usuario == "S") {    

 Número = parseInt (prompt ("Ingrese un número"));
 if (Número > Máximo) {
    Máximo = Número;
 }

if (Número < Mínimo) {
    Mínimo = Número;
 }

 Usuario = prompt ("¿Desea sumar otro número? S / N").toUpperCase(); 

}

  document.getElementById("maximo").value = Máximo;

  document.getElementById("minimo").value = Mínimo;
 
}