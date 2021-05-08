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

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.sabiduria = 10;
        super.salud = 200;
        super.velocidad = 10;
        super.fuerza = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }     
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

/**
 * output
 * Hola mi nombre es Master Splinter, mi fuerza es 10, mi velocidad es 10 y mi salud es 210
Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.
 */