/*Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" */

/* Parecido al primer ejercicio, solo que especificamos UN mes; el resto queda con el caso default
Me parece que sería más prolijo usar if que switch porque solo necesito dos opciones: 
If mes == "Febrero" ....; Else ....) */


function Mostrar(){

    let mes = document.getElementById("mes").value;
    switch(mes){
        case "Febrero":
            alert("Este mes no tiene mas de 29 días");
            break;

        default:
            alert("Este mes tiene 30 o mas días");
            break;
    }


}