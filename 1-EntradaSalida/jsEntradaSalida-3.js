/* al presionar el botón 'MOSTRAR',
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'ALERT' */

//Es una variación del primer ejercicio. Aquí no muestra un alert predefinido sino que toma un input de la página, pero no lo hace desde una función de javascript sino que toma lo que el usuario ingresa en la página html (del form). El getelementbyID("nombre").Value recupera ese valor

function Mostar () {
    let nombre = document.getElementById ("elNombre").value;
    alert (nombre);
}
