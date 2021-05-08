// Vowel Count
// Return the number(count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata(but not y).

// The input string will only consist of lower case letters and / or spaces.

function getCount(str) {
    var vowelsCount = 0;
    var vowel=['a','e','i','o','u'];

    // enter your magic here
    for(var i=0;i<str.length;i++){

        if (vowel.indexOf(str[i].toLowerCase())!=-1){
            vowelsCount+=1;
        }
    }

    return vowelsCount;
}

console.log(getCount('Jorge Alejandro Gonzalez Vargas'));