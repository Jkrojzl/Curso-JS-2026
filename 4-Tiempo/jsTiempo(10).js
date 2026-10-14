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

    if(tiempoTranscurrido > 0 && tiempoTranscurrido < 500){
        
        alert("Tardo " +tiempoTranscurrido +" milisegundos, USTED ES FLASH");
    }else{
        if(tiempoTranscurrido > 500 && tiempoTranscurrido < 1000){
        
            alert("Tardo " +tiempoTranscurrido +" milisegundos, Bien ahi, segui practicando.");

        }else{
            if(tiempoTranscurrido > 1000 && tiempoTranscurrido < 3000){
                
                alert("Tardo " +tiempoTranscurrido +" milisegundos, tenemos los deditos duros?");

            }else{
                alert("Tardo " +tiempoTranscurrido +" milisegundos, te quedaste dormido?");
            }

        }

    }

}