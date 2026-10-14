/*Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.*/

/*Uff. Creo que acá necesito tener dos contadores distintos. Uno para positivos, otro para negativos. 
La decisión de si va para un contador u otro tiene que depender de un if. 
No necesitaría la variable Contador porque no necesito calcular promedio.*/  



function Mostrar () {

let Usuario;
let Número;
let NumPos = 0; 
let NumNeg = 1; // Empezarlo con 1 porque es multiplicador
let ContNeg =0; //Agregué uno porque si no tenía números negativos me quedaba 1 en el campo

Número = parseInt (prompt ("Ingrese un número")); // UNO. Ingreso del primer número
if (Número > 0) {
    NumPos = Número + NumPos;
}
else {NumNeg = Número * NumNeg;
ContNeg = ContNeg + 1;
}
 Usuario = prompt ("¿Desea sumar otro número? S / N").toUpperCase(); // Esto es igual al ejercicio previo

 while (Usuario == "S") {    //DOS. While. Ingreso de sucesivos números

 Número = parseInt (prompt ("Ingrese un número"));
if (Número >= 0) {
    NumPos = Número + NumPos;
}
else { NumNeg = Número * NumNeg
    ContNeg = ContNeg + 1;
    }
 Usuario = prompt ("¿Desea sumar otro número? S / N").toUpperCase();

}

 document.getElementById("suma").value = NumPos; //TRES. Fin de ciclo. Se muestran los resultados

 if (ContNeg == 0) {
 document.getElementById("producto").value = "No se ingresaron números negativos";   
}
 else document.getElementById("producto").value = NumNeg;

 
}