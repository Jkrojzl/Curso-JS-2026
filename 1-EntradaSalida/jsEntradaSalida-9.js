/*Enunciado:
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %. en el cuadro de texto "RESULTADO"*/

/* También similar a los anteriores, sólo que con otro tipo de operación, calculando porcentajes. 
Además, para mostrar el importe en el campo hay que pasar el resultado al html al final (en vez de usar un alert) */

function MostrarAumento () {

let Sueldo;
Sueldo = parseInt (document.getElementById ("sueldo").value);
let Resultado;
Resultado = Sueldo * 1.10;
/* Tmb podría calcularse con regla de tres: "(Sueldo*10)/100"*/
document.getElementById ("resultado").value=Resultado;
    
}