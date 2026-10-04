/*Debemos lograr tomar Los numeros por ID , transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"
ej.: "la suma es 750" */

function sumar () {

    let num1;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt (num1);

    let num2;
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt (num2);

    let num;
    num = num1 + num2;

    alert ("La suma es "+ num);
}