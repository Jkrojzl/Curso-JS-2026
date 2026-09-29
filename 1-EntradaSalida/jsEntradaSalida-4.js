/* Debemos lograr tomar un dato por 'PROMPT'
y lo muestro por 'getElementById'
al presionar el botón 'MOSTRAR' */  

function Mostar () {
    let nombre; 
    nombre = prompt ("Escribí tu nombre, chaval: ");
    document.getElementById ("elNombre").value=nombre;
}

/*
     nombre = document.getElementById ("elNombre").value;
    
*/