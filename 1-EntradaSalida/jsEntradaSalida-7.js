/* Enunciado:
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"  */

function sumar () {

    let num1;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt (num1);

    let num2;
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt (num2);

    let num;
    num = num1+num2;

    alert ("La suma es "+ num);
}

function restar () {

    let num1;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt (num1);

    let num2;
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt (num2);

    let num;
    num = num1-num2;

    alert ("La resta es "+ num);
}

function multiplicar () {

    let num1;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt (num1);

    let num2;
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt (num2);

    let num;
    num = num1*num2;

    alert ("La multiplicación es "+ num);
}

function dividir () {

    let num1;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt (num1);

    let num2;
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt (num2);

    let num;
    num = num1/num2;

    alert ("La división es "+ num);
}