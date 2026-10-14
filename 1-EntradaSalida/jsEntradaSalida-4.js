/* Debemos lograr tomar un dato por 'PROMPT'
y lo muestro por 'getElementById'
al presionar el botón 'MOSTRAR' */  

/*Inverso al ejercicio anterior. El usuario pone el dato usando el prompt y lo "pasamos" al html. La clave para eso es poner la variable al otro lado */

function Mostar () {
    let nombre; 
    nombre = prompt ("Escribí tu nombre, chaval: ");
    document.getElementById ("elNombre").value=nombre;
}

