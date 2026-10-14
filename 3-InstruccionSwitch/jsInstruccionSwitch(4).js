/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */

/*Una mezcla de los ejercicios 2 y 3. Continuó donde se quedó el ejercicio anterior, 
pero agrupando a todos los meses */

function Mostrar(){

    let mes = document.getElementById("mes").value;
    switch(mes){
        case "Febrero":
            alert("Este mes tiene 28 días. Es chiquitito");
            break;

        case "Enero":
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Este mes tiene 30 días");
            break;
        
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Noviembre":
            alert("Este mes tiene 31 días");
            break;
    }


}