/*Enunciado:
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %. en el cuadro de texto "RESULTADO"*/

//Ídem. Parece que en este ejercicio no aplicamos ninguna función nueva sino que tenemos que saber realizar el cálculo. Yo multipliqué por 1,1 pero tmb podría calcularse con regla de tres: "(Sueldo*10)/100"

function MostrarAumento () {

let Sueldo;
Sueldo = parseInt (document.getElementById ("sueldo").value);
let Resultado;
Resultado = Sueldo * 1.10;

document.getElementById ("resultado").value=Resultado;
    
}
