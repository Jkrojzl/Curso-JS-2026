var intervaloID;
var contador = 0;

function inicio(){


    intervaloID = setInterval(function(){

        contador++;

        alert("bienvenidos a la UTN FRA. Contador: "+contador);

    }, 3000);


}

function fin(){

    clearInterval(intervaloID);

}