/*Enunciado:
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %. en el cuadro de texto "RESULTADO"*/

//Igual al anterior. Muestra que se usa el mismo multiplicador haya aumento o descuento.

function MostrarAumento () {

let Importe;
Importe = parseInt (document.getElementById ("importe").value);
let Resultado;
Resultado = Importe * 0.75;

document.getElementById ("resultado").value=Resultado;
}
