/*al presionar el botón pedir un número entre 0 y 9 inclusive. */

/*Mientras lo que ingrese el usuario no sea un número de los que te pide la consigna te va a pedir.
El programa te valida el dato primero. Después simplemente lo muestra */

function Mostrar(){

    let dato = prompt("Ingrese un numero entre 0 y 9:");

    while(dato <0 || dato >9){
        alert ("Dato ingresado no valido. Ingrese nuevamente:");
    }

    document.getElementById("Numero").value = dato ;

}