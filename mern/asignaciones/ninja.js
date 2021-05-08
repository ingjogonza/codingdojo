/**
 * Crea una clase Ninja
 agregar un atributo: nombre
 agregar un atributo: salud
 agrega un atributo: velocidad - da un valor predeterminado de 3
 agrega un atributo: fuerza - dé un valor predeterminado de 3
 agrega un método: sayName () - Esto debería registrar el nombre de Ninja en la consola
 agrega un método: showStats () - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
 agrega un método: drinkSake () - Esto debería agregar +10 de salud al Ninja
 */

 class Ninja{
     constructor(nombre){
         this.nombre = nombre;
         this.salud = 0;
         this.velocidad = 3;
         this.fuerza = 3;
     }
     sayName(){
         return this.nombre;
     }
     showStats(){
         console.log(`Hola mi nombre es ${this.nombre}, mi fuerza es ${this.fuerza}, mi velocidad es ${this.velocidad} y mi salud es ${this.salud}`);
     }
     drinkSake(){
         this.salud+=10;
         this.showStats();
     }

 }

 const nuevoNinja = new Ninja("Hirotaro");
 console.log(nuevoNinja.sayName());
 nuevoNinja.showStats();
 nuevoNinja.drinkSake();
 