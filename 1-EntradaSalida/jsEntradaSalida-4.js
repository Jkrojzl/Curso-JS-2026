/* Debemos lograr tomar un dato por 'PROMPT'
y lo muestro por 'getElementById'
al presionar el botón 'MOSTRAR' */  

//Parecido al anterior pero al revés. Acá el valor entra por el prompt y lo pasamos al html. Para hacer esto invertimos el orden de la atribución. En el ejercicio 3 la sintaxis era "Variable = getelement". Acá es "getelement = variable".

function Mostar () {
    let nombre; 
    nombre = prompt ("Escribí tu nombre, chaval: ");
    document.getElementById ("elNombre").value=nombre;
}
