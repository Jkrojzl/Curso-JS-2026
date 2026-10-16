/* al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */

/*Ejercicio parecido al anterior, con switch. Acá tenemos tres tipos de meses. Invierno (definido
por julio y agosto); los meses anteriores; los meses posteriores. Hay que usar case con todas las
opciones porque los meses son strings, no numéricos.
Alternativamente se podría asignar un número a cada mes, pero creo que es una solución más larga */


function Mostrar(){

    let mes = document.getElementById("mes").value;

    switch(mes){
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("Falta para el invierno");
            break;


        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio");
            break;

        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frio, ahora calor!");
            break;
        
    }

}