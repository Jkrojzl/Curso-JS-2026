/* al presionar el botón pedir la CLAVE (ayuda: es utn750) */

/* Te va a quedar incorrecto todo HASTA que pongas la clave correcta 
(no usamos contador, usamos booleanos true y false). El usuario puede tener mil intentos hasta que se canse y que se vaya
Me imagino que sí podemos usar un contador pero para decirle al usuario que "ya trataste de entrar varias veces, sos un impostor. Bloqueado" */


function Mostrar(){

    let clave = prompt("Ingrese la clave: ");

    while(clave !== "utn750"){

        clave = prompt("Clave incorrecta. Ingrese nuevamente:");

    }

    alert("Clave ingresada correctamente!");

}