/*1. Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.  */

function greaterThanY(arr,y){
    var greaters=[];
    count=0;
    for (var x=0; x<arr.length;x++){
        if (arr[x]>y){
            greaters.push(arr[x]);
            count++;
        }
    }
    return "Total Numbers biggers than "+y+" are: "+count+" which are: "+greaters.toString();
}

console.log(greaterThanY([4,7,8,10,15,6],9))
/*
output:
Total Numbers biggers than 9 are: 2 which are: 10,15

*/

/*2. Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array.  */
function AvgMinMax(arr){
    var min=arr[0];
    var max=arr[0];
    var sum=0;

    for (var i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    sum+=arr[i];
    }

    return "El valor máximo del arreglo " +arr+ " es: "+max+" su valor mínimo es: "+min+" y el promedio es: "+sum/arr.length;
}
b=AvgMinMax([1,5,10,-2]);
console.log(b);
/*output
El valor máximo del arreglo 1,5,10,-2 es: 10 su valor mínimo es: -2 y el promedio es: 3.5
*/

/*
3. Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
*/

function replaceNegative(arr){

    for (var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}

console.log(replaceNegative([1,2,-3,-5,5]))
/*output
[ 1, 2, 'Dojo', 'Dojo', 5 ]
*/

/*
4. Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].
*/

function removerRango(arr,inicio,fin){
    var remover=[]
    var nuevo=[]
    for(var i=0; i<inicio;i++){
        nuevo.push(arr[i]);
    }
    for(var y=fin+1;y<arr.length;y++){
        nuevo.push(arr[y])
    }
    return nuevo;
}
//console.log(removerRango([20,30,40,50,60,70],2,4))
/*output
[ 20, 30, 70 ]
*/

console.log(removerRango([20,30,40,50,60,70],0,2))
/*output
[ 50, 60, 70 ]
*/