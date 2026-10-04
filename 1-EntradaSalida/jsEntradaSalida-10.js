/*Enunciado:
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %. en el cuadro de texto "RESULTADO"*/

function MostrarAumento () {

let Importe;
Importe = parseInt (document.getElementById ("importe").value);
let Resultado;
Resultado = Importe * 0.75;
/* Tmb podría calcularse con regla de tres: "(Sueldo*10)/100"*/
document.getElementById ("resultado").value=Resultado;
}