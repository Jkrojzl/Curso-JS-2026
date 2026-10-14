/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */

/* Lo hice dos veces porque lo primero que se me ocurrió fue hacerlo sin el while.
Con While es mucho más sencillo. Menos líneas. Y más complejo al mismo tiempo. Creo que necesito tres variables:
Una que funcione como el contador; otra que almacene temporalmente los números que va ingresando el usuario; 
y otra donde se vayan sumando los números. Y después una cuarta para el promedio */

function Mostrar () {

let Número;
let Suma = 0; //tuve que agregarle el 0 porque sino me decía NaN (Not a Number)
let Contador = 0;

while (Contador < 5) {

 Número = parseInt (prompt ("Ingrese un número"));
 Suma = Número + Suma;
 Contador = Contador + 1;
 
 }
 document.getElementById("suma").value = Suma;

 Promedio = Suma / 5;
 document.getElementById("promedio").value = Promedio;

}

/* Forma alternativa sin usar el while. La última parte del ejercicio es igual.
function Mostrar () {

    let Num1;
    Num1 = parseInt (prompt ("Ingrese un número"));

    let Num2;
    Num2 = parseInt (prompt ("Ingrese un número"));

    let Num3;
    Num3 = parseInt (prompt ("Ingrese un número"));

    let Num4;
    Num4 = parseInt (prompt ("Ingrese un número"));

    let Num5;
    Num5 = parseInt (prompt ("Ingrese un número"));
    
    Suma = Num1+Num2+Num3+Num4+Num5;
    document.getElementById("suma").value = Suma;

    Promedio = Suma / 5;
    document.getElementById("promedio").value = Promedio;

} */