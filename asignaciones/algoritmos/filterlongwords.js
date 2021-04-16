// Write a function filterLongWords that takes a string sentence and an integer n.

// Return a list of all words that are longer than n.

//     Example:

// filterLongWords("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']

function filterLongWords(str,n){
    var longWords=[];
    var arr=str.split(' ');
    for(var i=0;i<arr.length;i++){
        if(arr[i].length>n){
            longWords.push(arr[i]);
        }
    }
    return longWords;
}

var nombre='Jorge Alejandro Gonzalez Vargas Ing';

console.log(filterLongWords(nombre,4));


