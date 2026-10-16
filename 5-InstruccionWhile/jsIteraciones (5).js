/*Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino. */


/*Igual que el ejercicio anterior, pero te valida cadenas (por más que sean cortas son cadenas) y no números.
Hay que poner && y no || porque NECESITO que al menos una de las dos condiciones sea verdadera (==) para que se rompa el bucle */



function Mostrar(){

    let dato = prompt("Ingrese su género: F para femenino, M para masculino").toUpperCase(); /*Agregué acá y en futuros ejercicios el toUpperCase
                                                                                                porque me confundía f con F y debe ser preciso*/
    while(dato !== "F" && dato !== "M"){
        dato = prompt("Dato ingresado no valido. Tenés que poner F o M loco, no es tan difícil:").toUpperCase();
    }
    if(dato === "F"){

        document.getElementById("Sexo").value = "Femenino" ;

    }else{
        document.getElementById("Sexo").value = "Masculino" ;
    }

}