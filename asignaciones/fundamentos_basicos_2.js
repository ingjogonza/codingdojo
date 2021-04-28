/**
 * 1. Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. 
 * Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
 */

function grande(arr){
    for(var i=0;i<arr.length;i++){
        if (arr[i]>0){
            arr[i]="Big";
        }
    }
    return arr;
}

console.log(grande([-1,3,5,-5])); /**output [ -1, 'Big', 'Big', -5 ] */

/**
 * 2. Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
 * La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
 */

function printed(arr){
    major=arr[0];
    minor=arr[0];
    for(var i =1; i<arr.length;i++){
        if(arr[i]>major){
            major=arr[i];
        }
        if (arr[i]<minor){
            minor=arr[i];
        }
    }
    console.log("Menor valor del arreglo es: "+minor);
    return "Mayor valor del arreglo es: "+major;
}
console.log(printed([-1,3,5,-5])); 
/**output 
 * Menor valor del arreglo es: -5
Mayor valor del arreglo es: 5 */

/**
 * 3. Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
 * La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
 */

function printed(arr){
    var penultimo=arr[arr.length-2];
    var impar=0;

    for(i=0;i<arr.length;i++){
        if(arr[i]%2 !==0){
            console.log("Penúltimo valor del arreglo es: "+penultimo);
            impar= arr[i];
            return "Primer impar del arreglo es: "+impar;
        }
    }
}
console.log(printed([-1,3,5,-5])); 
/**output 
 * Penúltimo valor del arreglo es: 5
Primer impar del arreglo es: -1 */

/**
 * 4. Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
 * Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
 */

 function doble(arr){
     var nuevo_arr=[]
    for (var i=0; i<arr.length; i++){
        nuevo_arr.push(arr[i]*2);
    }
    return nuevo_arr;
}
console.log(doble([1,2,3])) /*output [ 2, 4, 6 ] */

/**
 * 5.Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array.
 *  Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
 */
function contarPositivos(arr){
    contar=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            contar++;
        }
    }
    arr[arr.length-1]=contar;
    return arr;
}
console.log(contarPositivos([-1,1,1,1])) /*output [ -1, 1, 1, 3 ] */

/**
 * 6. Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, 
 * imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
 */

function parimpar(arr){
    var seguidilla_par=0;
    var seguidilla_impar=0;
    for (var i=0; i<arr.length;i++){
        if(arr[i]%2===0){
            seguidilla_par++;
            seguidilla_impar=0;
            if(seguidilla_par%3===0){
                console.log("¡Es para Bien!");
            }
        }
        if(arr[i]%2!==0){
            seguidilla_impar++;
            seguidilla_par=0;
            if(seguidilla_impar%3===0){
                console.log("¡Qué imparcial!");
            }
        }
        
    }
}
parimpar([1,2,4,5,1,3,2,4,5,4,6,8])
/**output
 * 
 * ¡Qué imparcial!
¡Es para Bien!

 */


/**
* 7. Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, 
específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 
 */

function incrementaSegundos(arr){
    for(var i=0; i<arr.length; i++){
        if(i%2!==0){
            arr[i]=arr[i]+1;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementaSegundos([1,2,3,4,5]))
/**
 * output
 * 
13
3
5
5
[ 1, 3, 3, 5, 5 ]
 */

/**
 * 8. Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
 * reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. 
 * Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
 */

function longitudesPrevias(arr){
    var output=[]
    output.push(arr[0]);
    for(var i=1;i<arr.length;i++){
        output.push(arr[i-1].length);
    }
    return output;
}
console.log(longitudesPrevias(["programar","dojo", "genial"]))
/**output
[ 'programar', 9, 4 ]
 */

/**
 * 9. Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, 
 * pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
 */

function agregaSiete(arr){
    var output=[];
    for(var i=0; i<arr.length;i++){
        output.push(arr[i]+7);
    }
    return output;
}

console.log(agregaSiete([1,2,3])) /**output  [ 8, 9, 10 ] */

/**
 * 10. Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
 * Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
 * Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
 */

function invertir(arr){
    var new_position=0;
    for (i=arr.length-1; i>new_position;i--){
        first=arr[new_position];
        last=arr[i];
        arr[new_position]=last;
        arr[i]=first;
        new_position++;
    }
    return arr;
}
/**
 * nota: se puede hacer tambien empezando a recorrer el arreglo de forma ascendente pero igualando new_position con arr.length-1, haciendo lo contrario a como esta dentro
 * del for y con i < new_position en el for
 */

console.log(invertir([3,1,6,4,2])) /**output  [ 2, 4, 6, 1, 3 ] */

/**
 * 11. Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
 * pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
 */

function allNegatives(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]>0){
            arr[i]=arr[i]*-1;
        }
    }
    return arr;
}
console.log(allNegatives([1,-3,5])) /**output  [ -1, -3, -5 ] */

/**
 * 12. Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. 
 * Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
 */

function siempre_hambriento(arr){
    var hambriento=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]==="comida"){
            console.log("yummy");
            hambriento++;
        }
    }
    if(hambriento===0){
        console.log("tengo hambre");
    }
}
//siempre_hambriento(["cine", "peliculas","television","coding"]) /**output tengo hambre */
siempre_hambriento(["cine", "peliculas","comida","television","comida","coding","Comida"]) 
/*output
yummy
yummy
*/

//console.log(siempre_hambriento(["cine", "peliculas","television","coding"])) /**output tengo hambre */
console.log(siempre_hambriento(["cine", "peliculas","comida","television","comida","coding","Comida"])) 
/*output
yummy
yummy
*/

/**
 * 13. Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
 * Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. 
 * cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
 */

function cambiaHaciaElCentro(arr){
    index_inicio=0;
    index_final=arr.length-1;

    while(index_inicio<index_final){
        inicio=arr[index_inicio];
        final=arr[index_final];
        arr[index_inicio]=final;
        arr[index_final]=inicio;
        index_inicio=index_inicio+2;
        index_final=index_final-2;
    }
    console.log(arr);
    // return "";
   
}
//cambiaHaciaElCentro([true, 42, "Ada", 2, "pizza"]) /**output [ 'pizza', 42, 'Ada', 2, true ] */
cambiaHaciaElCentro([1,2,3,4,5,6]) /**output [ 6, 2, 4, 3, 5, 1 ] */

/**
 * 14. Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. 
 * Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
 */

function escalaArray(arr, escala){
    for(i=0; i<arr.length; i++){
        arr[i]=arr[i]*escala;
    }
    return arr;
}

console.log(escalaArray([1,2,3], 3)) /**output [ 3, 6, 9 ] */


