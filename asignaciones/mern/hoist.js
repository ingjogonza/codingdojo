console.log(hello);                                   
var hello = 'world';                                 
/**output
 * undefined
 */

 var needle = 'haystack';
 test();
 function test(){
     var needle = 'magnet';
     console.log(needle);
 }
/**output
 * magnet
 *  */ 

 var brendan = 'super cool';
 function print(){
     brendan = 'only okay';
     console.log(brendan);
 }
 console.log(brendan);
/**
 * output
 * supercool
 *  */ 

 var food = 'chicken';
 console.log(food);
 eat();
 function eat(){
     food = 'half-chicken';
     console.log(food);
     var food = 'gone';
 }
/***
 * output
 * chicken
 * halfchicken
 *  */ 

 mean();
 console.log(food);
 var mean = function() {
     food = "chicken";
     console.log(food);
     var food = "fish";
     console.log(food);
 }
 console.log(food);
/**
 * output
 * Error la funcion mean() no está definida */ 

 console.log(genre);
 var genre = "disco";
 rewind();
 function rewind() {
     genre = "rock";
     console.log(genre);
     var genre = "r&b";
     console.log(genre);
 }
 console.log(genre);
 /**
  * output
  * undefined
  * rock
  * r&b
  * disco
  */

  dojo = "san jose";
  console.log(dojo);
  learn();
  function learn() {
      dojo = "seattle";
      console.log(dojo);
      var dojo = "burbank";
      console.log(dojo);
  }
  console.log(dojo);
  /**
   * output
   * san jose
   * seattle
   * burbank
   * san jose
   */

   console.log(makeDojo("Chicago", 65));
   console.log(makeDojo("Berkeley", 0));
   function makeDojo(name, students){
       const dojo = {};
       dojo.name = name;
       dojo.students = students;
       if(dojo.students > 50){
           dojo.hiring = true;
       }
       else if(dojo.students <= 0){
           dojo = "closed for now";
       }
       return dojo;
   }
   /**
    * output
    * {name: 'Chicago', students: 65, hiring: true }
    * error de tipado por la linea 101
    */