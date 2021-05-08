//Arreglos para llenar la informacion del juego
const tarjetasUnidad = [
    {
        id: 1,
        nombre: "Ninja Cinturón Rojo",
        costo: 3,
        poder: 3,
        resiliencia: 4
    },
    {
        id: 2,
        nombre: "Ninja Cinturón Negro",
        costo: 4,
        poder: 5,
        resiliencia: 4
    }
];

const tarjetasEfecto=[
    {
        id: 1,
        nombre: "Algoritmo Dificil",
        costo: 2,
        texto: "Aumentar la resistencia del objetivo en 3",
        stat: "Resiliencia",
        magnitud: 3
    },
    {
        id: 2,
        nombre: "Rechazo de promesa no manejado",
        costo: 1,
        texto: "Reducir la resistencia del objetivo en 2",
        stat: "Resiliencia",
        magnitud: -2
    },
    {
        id: 3,
        nombre: "Programación en pareja",
        costo: 3,
        texto: "Aumentar el poder del objetivo en 2",
        stat: "poder",
        magnitud: 2
    }
]
/**
 * Definicion de clases
 */

class Card{
    constructor(nombre, costo, poder, resiliencia){
        this.nombre = nombre;
        this.costo = costo;
        this.poder = poder;
        this.resiliencia = resiliencia
    }
}

class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.balance = 10;// le agrego este atributo para que el atributo costo en tarjetaUnidad y en efecto tuvieran sentido
        this.tarjetaUnidad = {}; //guarda un objeto tipo tarjeta de unidad puede ser BlackBelt o RedBelt
        this.tarjetasEfecto =[]; //guarda su coleccion de tarjetas de efecto
    }
    efectoEnTarjeta(action,magnitud,nombreEfecto,idCard){
        /**
         * con el action determino si afectara la resiliencia o el poder a traves de la magnitud de la tarjeta unidad que la puedo buscar con idCard
         * nombreEfecto me ayuda a enviar el mensaje que solicita el ejercicio
         */ 
        const[tarjetaAction] = tarjetasUnidad.filter( (tarjeta) => tarjeta.id==idCard);
        action==="Resiliencia" ? tarjetaAction.resiliencia+=magnitud : tarjetaAction.poder+=magnitud;
        console.log(`El jugador ${this.nombre} juega "${nombreEfecto}" en "${tarjetaAction.nombre}" `)
        //console.log(`La tarjeta de Unidad ${tarjetaAction.nombre} tiene ahora un poder de ${tarjetaAction.poder} y una resiliencia de ${tarjetaAction.resiliencia}`);
    } 
    agregarTarjetaUnidad(id){//agrego la unica carta de unidad que puede escoger el jugador id 1 red id 2 black
        if ((Object.keys(this.tarjetaUnidad).length === 0) === true ){// si el atributo tarjetaUnidad esta vacio dejo usar la tarjeta Unidad
            const [miTarjeta] = tarjetasUnidad.filter( (tarjeta) => tarjeta.id==id);
            //console.log(`Se descontaran ${miTarjeta.costo} puntos de tu balance por agregar esta tarjeta....`)
            this.tarjetaUnidad = miTarjeta;
            this.balance -= miTarjeta.costo;
            console.log(`El jugador ${this.nombre} convoca a "${this.tarjetaUnidad.nombre}"`);
            //console.log(`Has agregado la tarjeta de unidad => ${this.tarjetaUnidad.nombre} y tienes un balance de => ${this.balance} puntos`);
        }
        else{
            console.log("No puedes agregar otra Tarjeta de Unidad");
        }        
    }
    agregarTarjetaEfecto(idEfecto, idTarjetaUnidad){
        //me traigo el id del efecto y el id de la tarjeta unidad sobre la que se aplicara ese efecto
        const[miEfecto] = tarjetasEfecto.filter((efecto) => efecto.id ==idEfecto);
        this.balance -= miEfecto.costo;
        if (this.balance>0){
            //console.log(`Este efecto afectara a tu tarjeta de Unidad de la siguiente manera: ${miEfecto.texto}`);
            this.tarjetasEfecto.push(miEfecto);  
            this.efectoEnTarjeta(miEfecto.stat,miEfecto.magnitud, miEfecto.nombre,idTarjetaUnidad)
        }
        else
        {
            console.log("Sin Balance para jugar con este efecto!!!")
        }
    }
    atacar(idAtacante,idAgredido){
        //me traigo la id de la tarjeta unidad atacante y de la tarjeta unidad agredida el poder de la atacante se le restara a la resiliencia de la agredida
        const[tarjetaAtacante] = tarjetasUnidad.filter( (tarjeta) => tarjeta.id==idAtacante);
        const[tarjetaAgredida] = tarjetasUnidad.filter( (tarjeta) => tarjeta.id==idAgredido);
        console.log(`El jugador ${this.nombre} tiene el ataque "${tarjetaAtacante.nombre}" "${tarjetaAgredida.nombre}"`)
        tarjetaAgredida.resiliencia -= tarjetaAtacante.poder; 
    }
}
//Imprimo las diferentes Cartas de Unidad y de Efecto Disponibles

const listCartaUnidad = () => tarjetasUnidad.forEach(tarjeta =>{
    console.log(`${tarjeta.id}. Nombre: ${tarjeta.nombre} Costo: ${tarjeta.costo} Poder: ${tarjeta.poder} Resiliencia: ${tarjeta.resiliencia}`)
})

const listCartaEfecto = () => tarjetasEfecto.forEach(tarjeta =>{
    console.log(`${tarjeta.id}. Nombre: ${tarjeta.nombre} Costo: ${tarjeta.costo} Efecto: ${tarjeta.texto} Afecta al Stat: ${tarjeta.stat} Magnitud: ${tarjeta.magnitud}`)
})

//Defino los jugadores
// const jugador1 = new Jugador("Jorge");
// const jugador2 = new Jugador("Juan Manuel");//descansa en Paz Amigo querido maldito COVID de mierda que te llevo hermano 07/05/2021
const jugador1 = new Jugador("1");
const jugador2 = new Jugador("2");

//Inicio del Juego
console.log("BIENVENIDO A ES HORA DEL DUELO")
console.log("Como jugador comienzas con un balance de 10 ptos que se descontaran al escoger una tarjeta unidad o de efecto");
console.log("Regla 1. Puedes Escoger cualquiera de estas Cartas de Unidad")
listCartaUnidad();
console.log("Regla 2. Cada Una de estas cartas puede verse afectada por la accion de las siguientes Cartas de Efecto:")
listCartaEfecto();
console.log("Comienza el Escenario del Juego");
jugador1.agregarTarjetaUnidad(1);
jugador1.agregarTarjetaEfecto(1,1);
jugador2.agregarTarjetaUnidad(2);
jugador2.agregarTarjetaEfecto(2,1);
jugador1.agregarTarjetaEfecto(3,1);
jugador1.atacar(1,2);

// console.log(jugador1);
// console.log(jugador2);

/**
 * Observaciones:
 * 1. Hay algunos comentarios de console.log que me gustaria colocar en este codigo para un futuro desarrollo de este juego 
 * 2. El juego deberia definir una regla sobre quien es el jugador ganador yo pienso que deberia ser el le quite toda su resiliencia a la carta unidad del otro jugador.
 * 3. El metodo atacar deberia tener un costo que afecte el balance del jugador
 */