/*Enunciado:
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %. en el cuadro de texto "RESULTADO"*/

function MostrarAumento () {

let Sueldo;
Sueldo = parseInt (document.getElementById ("sueldo").value);
let Resultado;
Resultado = Sueldo * 1.10;
/* Tmb podría calcularse con regla de tres: "(Sueldo*10)/100"*/
document.getElementById ("resultado").value=Resultado;
    
}