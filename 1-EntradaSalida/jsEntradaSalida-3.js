/* al presionar el botón 'MOSTRAR',
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'ALERT' */

/*Como el anterior, pero esta vez el usuario no pone el nombre mediante un prompt sino que lo inserta en el html con el forms.
Nosotros simplemente tomamos el dato ingresado con el getElementbyID*/

function Mostar () {
    let nombre = document.getElementById ("elNombre").value;
    alert (nombre);
}