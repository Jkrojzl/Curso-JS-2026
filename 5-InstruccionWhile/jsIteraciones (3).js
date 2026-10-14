/* al presionar el botón pedir la CLAVE (ayuda: es utn750) */

/* Te va a quedar incorrecto todo HASTA que pongas la clave correcta 
(no usamos contador, usamos booleanos true y false) */


function Mostrar(){

    let clave = prompt("Ingrese la clave: ");

    while(clave !== "utn750"){

        clave = prompt("Clave incorrecta. Ingrese nuevamente:");

    }

    alert("Clave ingresada correctamente!");

}