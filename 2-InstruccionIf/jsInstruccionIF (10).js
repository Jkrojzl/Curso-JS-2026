/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostar: 
"EXCELENTE" para notas igual a 9 o 10, "APROBÓ" para notas mayores a 4, 
"Vamos, la proxima se puede" para notas menores a 4 */

/*Retomo el math.random del ejercicio anterior, pero le agrego un IF, un ELSE IF y un ELSE para que me
de las tres alertas requeridas */

function Mostrar () {
    
    let número ;

    número = Math.floor ( (Math.random () * 10)+1 );

    if (número > 8) {
        alert ("EXCELENTE");
        }
    else if (número <=8 && número >=4) {
        alert ("APROBÓ");
        }
    else alert ("Vamos, la próxima se puede");
        
}