/*Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/

/*Con un while sería fácil. Bueno, el profesor me dijo que use while.
El programa me pregunta un número constantemente, hasta que le pongo 9 y se cancela el programa. 
Es un While clásico: mientras la variable no sea igual al número, el programa sigue. Es como el ejercicio de la contraseña.  */

function Mostrar () {

    let Número;

    Número = prompt ("ESTOY PENSANDO EN UN NÚMERO. SI ELIGES BIEN TENDRÁS RECOMPENSAS. SI NO, LO PAGARÁS MUAJAJAJA")

    while (Número !=9) {
        Número = prompt ("ELEGISTE MAL, PON EL NÚMERO OTRA VEZ")

    }

    alert ("Terminó el show. A mimir")
}