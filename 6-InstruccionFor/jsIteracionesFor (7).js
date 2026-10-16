/*al presionar el botón pedir un número. 
Mostar los numeros divisores desde el 1 al número ingresado, 
y mostar la cantidad de numeros divisores encontrados.*/

/* Solo cambia la operación matemática que tengo que hacer. Como tengo que encontrar los divisores, la operación que necesito hacer es que
x%y=0. Como el primero de los valores es el número que ingresa el usuario, esa va a ser la variable, mientras que y va a ser la i.
Otra vez un contador
*/

function Mostrar () {


let Cantidad;
let Contador = 0;

Cantidad = prompt ("Cuántos divisores quieres que calcule? Ninguno. Lo siento, debes contestar" );

for (let i=0; i<Cantidad; i++) {
    if (Cantidad%i==0 ){
        Contador = Contador +1;
        alert (i);
    }
}

alert ("Agarraste " + Contador + " divisores. Fe li ci ta ciones");


}
