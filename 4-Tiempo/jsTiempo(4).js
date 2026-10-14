var intervaloID;
var contador = 0;

function inicio(){


    intervaloID = setInterval(function(){

        contador++;

        alert("bienvenidos a la UTN FRA. Contador: "+contador);

        if(contador == 5){
            clearInterval(intervaloID);
        }

    }, 1000);


}

function fin(){

    clearInterval(intervaloID);

}