/*Al presionar el botón pedir números hasta que el usuario quiera e informar la suma acumulada y el promedio. */

/*Aquí más que un contador necesitaría crear una condición booleana; cuando se declare verdadera, finaliza el proceso y se muestran los números.
Después de haber hecho el ejercicio me di cuenta que SÍ necesito el contador igual. Porque de otra forma no puedo calcular el promedio
y divido siempre por 5. Hago que empiece por 1 y no por 0 porque el primer número está por fuera del while */

function Mostrar () {

let Usuario;
let Número;
let Suma = 0; 
let Contador = 1;

Número = parseInt (prompt ("Ingrese un número"));
Suma = Número + Suma;

 Usuario = prompt ("¿Desea sumar otro número? S / N").toUpperCase(); 
while (Usuario == "S") {

 Número = parseInt (prompt ("Ingrese un número"));
 Suma = Número + Suma;
 Contador = Contador + 1;
 Usuario = prompt ("¿Desea sumar otro número? S / N").toUpperCase();

}

 document.getElementById("suma").value = Suma;

 Promedio = Suma / Contador;
 document.getElementById("promedio").value = Promedio;

}