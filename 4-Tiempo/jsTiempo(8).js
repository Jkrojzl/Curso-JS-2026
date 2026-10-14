let tiempoInicio;

function inicio(){

    tiempoInicio = new Date();

    setTimeout(function(){

        document.getElementById("secreto").style.visibility = "visible";
        

    }, 3000);



}

function ContarMilisegundos(){

    let horaFinal = new Date();
    let diferencia = (horaFinal - tiempoInicio) / 1000;
    alert("Pasaron " +diferencia +" segundos");


}