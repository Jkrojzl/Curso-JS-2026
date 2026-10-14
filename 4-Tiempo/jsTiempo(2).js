var intervaloID;

function inicio(){

    intervaloID = setInterval(function(){

        alert("bienvenidos a la UTN FRA");

    }, 3000);


}

function fin(){

    clearInterval(intervaloID);

}