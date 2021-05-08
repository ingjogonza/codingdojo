/**
 * Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
 */

function serie(){
    var output=[];
    for (var i =1; i<256;i++){
        output.push(i);
    }
    return output
}
console.log(serie());

/**
 * Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 
 */

function sumapares(){
    var suma=0;
    for (i=1;i<=1000;i++){
        if (i%2===0){
            suma+=i;
        }
    }
    return suma;
}
console.log(sumapares()) /*output 250500 */

/**
 * 3. Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
 */

function sumaimpares(){
    var suma=0;
    for (i=1;i<=5000;i++){
        if (i%2!==0){
            suma+=i;
        }
    }
    return suma;
}
console.log(sumaimpares()) /*output 6250000 */

/**
 * 4. Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
 */

function suma_arr(arr){
    var suma=0;
    for (var i=0;i<arr.length;i++){
        suma+=arr[i];
    }
    return suma;
}
//console.log(suma_arr([1,2,5])) /*output 8 */
console.log(suma_arr([-5,2,5,12])) /*output 14 */

/**
 * 5. Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
 */

function mayor_en_arr(arr){
    mayor=arr[0];
    for(var i=1;i<arr.length;i++){
        if (arr[i]>mayor){
            mayor=arr[i];
        }
    }
    return mayor;
}
console.log(mayor_en_arr([-3,3,5,7])) /*output 7 */

/**
 * 6. Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
 */

function avg_arr(arr){
    var sum=0;
    for (var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(avg_arr([1,3,5,7,20])) /*output 7 */

/**
 * 7. Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
 */

function odd_arr(){
    var arr=[];
    for (i=1;i<=50;i++){
        if (i%2!==0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(odd_arr()) 
/*output 
[
    1,  3,  5,  7,  9, 11, 13, 15,
   17, 19, 21, 23, 25, 27, 29, 31,
   33, 35, 37, 39, 41, 43, 45, 47,
   49
 ] 
 */

/**
 * 8. Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, 
 * tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
 */

function biggers_than_Y(arr,y){
    count=0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]>y){
            count++;
        }
    }
    return count;
}
console.log(biggers_than_Y([1,3,5,7],3)) /*output 2 */

/**
 * 9. Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
 */

function squares(arr){
    for (var i=0; i<arr.length; i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}
console.log(squares([1,5,10,-2])) /*output [ 1, 25, 100, 4 ] */

/**
 * 10. Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, 
 * el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
 */

function replace_negatives(arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0
        }
    }
    return arr;
}
console.log(replace_negatives([1,5,10,-2])) /*output [ 1, 5, 10, 0 ] */

/**
 * 11. Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), 
 * menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
 */
 function AvgMinMax(arr){
    var min=arr[0];
    var max=arr[0];
    var sum=0;
    var output=[];

    for (var i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    sum+=arr[i];
    }
    output.push(max);
    output.push(min);
    output.push(sum/arr.length);

    return output;
}

b=AvgMinMax([1,5,10,-2]);
console.log(b); /**output [ 10, -2, 3.5 ]*/

/**
 * 12.Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 
 * (ej: [1,5,10,-2] será [-2,5,10,1]). 
 */

 function swap(arr){
    var primero=arr[0];
    var ultimo=arr[arr.length-1];
    arr[0]=ultimo;
    arr[arr.length-1]=primero;
    return arr; 
  }
  console.log(swap([1,5,10,-2])); /**output [ -2, 5, 10, 1 ] */

/**
 * 13. De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. 
 * Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
 */

function replace_negative_for_dojo(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}
console.log(replace_negative_for_dojo([-1,-3,2])); /**output [ 'Dojo', 'Dojo', 2 ] */
