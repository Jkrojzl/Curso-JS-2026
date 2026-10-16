/*Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */

/*En este ejercicio uso el switch emparejando los cuatro mensajes con los cuatro meses
que te pide la consigna. No tiene más ciencia que eso (Switch -> Case (alert) -> Break) */



function Mostrar(){

    let mes = document.getElementById("mes").value;

    switch(mes){
        case "Enero":
            alert("Que comiences bien el año!!!");
            break;

        case "Marzo":
            alert("a clases!!!");
            break;

        case "Julio":
            alert("se vienen las vacaciones!!!");
            break;

        case "Diciembre":
            alert("felices fiestas!!!");
            break;
    }

}