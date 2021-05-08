/**
 * *************************************************************PARTE 1*****************************************************************************
 */

/**
 * 1. Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado).
 *  Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
 */

function sigma(number){
    var sum=0;
    for(var i=1; i<=number;i++){
        sum+=i;
    }
    return sum;
}
// console.log(sigma(3)) /**output  6*/
console.log(sigma(5)) /**output  15*/

/**
 * 2. Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos 
 * (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
 */
function factorial(num){
    var producto = 1;
    for(var i=1;i<=num;i++){
        producto*=i;
    }
    return producto;
}
console.log(factorial(3))/**output 6 */
console.log(factorial(5)) /**output 120 */

/**
 * 3. Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, 
 * partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc).
 *  Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), 
 * fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la 
 * Parte 2 de esta actividad. 
 */

function fibonacci(number){
    var fibonaccis =[];
    var n1, n2 =0;
    fibonaccis.push(0);
    fibonaccis.push(1);

    for (var i = 2; i<=number;i++){

        n1=fibonaccis[i-2];
        n2=fibonaccis[i-1];
        fibonaccis.push(n1+n2);
    }
    //console.log(fibonaccis); si quiere imprimir la secuencia completa
    return fibonaccis[fibonaccis.length-1];
}
console.log(fibonacci(7)); /**output 13 */

/**
 * 4. Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.  
 */

function penultimo(arr){
    if (arr.length > 1){
        return arr[arr.length-2];
    }
    else{
        return null;
    }
}
console.log(penultimo([42,true,4,"Liam", 7]))// output Liam
console.log(penultimo([42]))// output null

/**
 * 5. Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null. 
 */

function Dado(arr, n){
    if(n<=arr.length-1){
        return arr [n];
    }
    else{
        return null;
    }
}
console.log(Dado([5,2,3,6,4,9,7],3)) //output 6

/**
 * 6. Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.
 */

function segundoGrande(arr){
    var maximo=arr[0]; 
    var segundo_maximo = 0;
    for(var i=1; i<arr.length; i++){
        if(arr[i]>maximo){
            maximo=arr[i];
        }
    }
    for(j=0; j<arr.length; j++){

    }
}

function fibonacci(n) {
    return n < 1 ? 0
    : n <= 2 ? 1
    : fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    console.log(fibonacci(4));
