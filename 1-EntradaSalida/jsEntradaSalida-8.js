/*Enunciado:
Debemos lograr tomar Los numeros por ID , transformarlos a enteros (parseInt),realizar la operación correcta y mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ." */

//Este ejercicio es igual que los dos anteriores. El profesor de la UTN lo puso para ver si los estudiantes sabían que era el resto (?)

function SacarResto () {

    let nDividendo;
    nDividendo = document.getElementById ("numeroDividendo").value;
    nDividendo = parseInt (nDividendo);

    let nDivisor;
    nDivisor = document.getElementById ("numeroDivisor").value;
    nDivisor = parseInt (nDivisor);

    let resto;
    resto = nDividendo%nDivisor;
    
    alert ("El resto es " + resto);
    }
