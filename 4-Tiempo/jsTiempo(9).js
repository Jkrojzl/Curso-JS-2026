var tiempoInicial;

function inicio(){

    const delay = Math.floor(Math.random() * (12000 - 2000 + 1)) + 2000;

    setTimeout(SegundosEnElAire, delay);
}

function SegundosEnElAire(){

    document.getElementById("secreto").style.visibility = "visible";
    tiempoInicial = new Date();

}

function ContarMilisegundos(){

    let tiempoFinal = new Date();
    let tiempoTranscurrido = tiempoFinal - tiempoInicial;

    alert("Han transcurrido " +tiempoTranscurrido +" milisegundos");
}