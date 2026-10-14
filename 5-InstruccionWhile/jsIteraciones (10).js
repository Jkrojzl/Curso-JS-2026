/* Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos. 5-Cantidad de ceros. 
6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos, (positvos-negativos).*/

/*Demasiadas porquerías. Creo que es lo mismo de siempre pero con más cosas y más aburrido */


function Mostrar () {

let SumaNeg = 0;
let SumaPos = 0;
let NumPos = 0;
let NumNeg = 0;
let NumCero = 0;
let NumPar = 0;
let Número;
let Usuario = "S"; // Lo pongo así porque sino tenía que duplicar el código para diferenciar el primer número de los siguientes

while (Usuario == "S") {    

Número = parseInt (prompt ("Ingrese un número"));

if (Número > 0) {
    SumaPos = SumaPos + Número;
    NumPos = NumPos + 1;
}

if (Número < 0) {
    SumaNeg = SumaNeg + Número;
    NumNeg = NumNeg + 1;
}

if (Número ==0) {
    NumCero = NumCero + 1;
}

if (Número%2==0) {
    NumPar = NumPar + 1;
}

Usuario = prompt ("¿Desea sumar otro número? S / N").toUpperCase(); 

 }

let Promedio_Pos;
Promedio_Pos = SumaPos/NumPos;
let Promedio_Neg;
Promedio_Neg = SumaNeg/NumNeg;

let Diferencia;
Diferencia = SumaPos-SumaNeg;

document.write("1. Suma de negativos: " + SumaNeg + "<br>");
document.write("2. Suma de positivos: " + SumaPos + "<br>");
document.write("3. Cantidad de positivos: " + NumPos + "<br>");
document.write("4. Cantidad de negativos: " + NumNeg + "<br>");
document.write("5. Cantida de ceros: " + NumCero + "<br>");
document.write("6. Cantidad de números pares: " + NumPar + "<br>");
document.write("7. Promedio de positivos: " + Promedio_Pos + "<br>");
document.write("8. Promedio de negativos: " + Promedio_Neg + "<br>");
document.write("9. Diferencia entre positivos y negativos: " + Diferencia + "<br>");

}