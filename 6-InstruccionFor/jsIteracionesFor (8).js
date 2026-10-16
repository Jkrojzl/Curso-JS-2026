/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no. */

/* Parecido a los anteriores en el sentido de que necesito sí o sí un for que vaya desde 1 al número buscado (aunque el usuario no lo sepa),
y que debo realizar una operación matemática. No sólo eso, sino que necesito el %.
Para resolver este ejercicio necesitamos saber que los números primos son números que son solo divisibles por 1 y por sí mismos.
Por lo tanto el resto NUNCA SERÁ CERO cuando el divisor sea mayor a UNO y menor al NÚMERO MISMO. 
Si hay divisores el número no va a ser primo (false, necesito booleanos)
Por eso, la condición de origen va a ser DOS. Y el alcance del for va a ser menor al número que ingrese el usuario.
La alerta va al final del bucle para que aparezca solo una vez.

*/

function Mostrar () {

let primo = true;
let número;

número= prompt ("Poné un número y te diré si es primo o no");

for (let i = 2; i < número; i++) { 
    if (número % i == 0) {
        primo = false;
}

}

if (primo === true) {
    alert ("Tenés un número primo. Cuidado (!)");}
    else { 
        alert ("El número no es primo. La sociedad no te juzgará") }

}











