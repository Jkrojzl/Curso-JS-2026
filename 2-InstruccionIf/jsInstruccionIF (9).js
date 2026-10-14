/*Enunciado:
Al presionar el Botón, mostar un número Random del 1 al 10 inclusive */

//Tengo que usar el math.random y el math.floor

function Mostrar () {
    
    let número ;

    número = Math.floor ( (Math.random () * 10)+1 );


    alert (número);
}