/* Al presionar el botón 'MOSTRAR'
debemos lograr tomar un dato por 'PROMPT'
y luego mostrarlo por 'ALERT'.
*/

//La diferencia con el ejercicio anterior es que acá dejamos que el usuario introduzca el dato. Hacemos esto con el comando prompt. Antes tenemos que especificar la variable (por eso está el "let").

function Mostar () {
    let libro;
    libro = prompt ("¿Cuál es tu libro favorito");
    alert (libro);
}
