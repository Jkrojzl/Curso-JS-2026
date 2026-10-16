/*al presionar el botón repetir hasta que utilizamos 'BREAK'.*/

/* Tengo que apretar el botón repetir y que me de alerts infinitos
y después romper con el break. Lo primero lo hago cambiando el 2do argumento por uno infinito */

function Mostrar () {

    for (let i=1; i>0; i++) {
        alert (i)
        let Resp = confirm("¿Querés seguir? Seguro que ya te cansaste"); // acá uso el confirm
      if (Resp === false) 
        { break; 
        } 
    }
}

