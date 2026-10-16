/*al presionar el botón pedir un número. Mostar los numeros pares desde el 1 al número ingresado, y 
mostar la cantidad de numeros pares encontrados.*/

/* Aquí comienza una serie de ejercicios pervertidos donde tengo que realizar una operación matemática con el for.
   Para que el programa me encuentre números paros necesito la operación x%2=cero, porque todos los números pares divididos por dos
    tienen ese valor.
    Entonces armo el for. Empieza por 1 porque lo pide la consigna; el segundo parámetro es la variable Cantidad, que es el valor que 
    ingresa el usuario; el tercero es que avance de 1 genérico.
    Después pongo que en CADA iteración, el programa realice la operación matemática que dije antes y que CUANDO el resto da cero, el
    programa vaya contando estas apariciones. Para esto necesito un IF y un acumulador.
    Después muestro cada par encontrado (mientras aparece) y la cantidad total como pide la consigna.
*/

function Mostrar () {


let Cantidad;
let Contador = 0;

Cantidad = prompt ("Cuántos números pares querés" );

for (let i=1; i<Cantidad; i++) {
    if (i%2==0 ){
        Contador = Contador +1;
        alert (i);
    }
}

alert ("Agarraste " + Contador + " pares. Fe li ci ta ciones");


}


