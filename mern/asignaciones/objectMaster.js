const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    /**
     * Usando la matriz de Pokémon anterior, encuentre lo siguiente:
     * 
     */


const listIdThree = pokémon.filter( (item) => item.id % 3 ===0)
const listFire = pokémon.filter((item) => item.types.includes("fire"));
const listMoreThanOneType = pokémon.filter((item) => item.types.length>1)
const listPokemonNames = pokémon.map(item =>item.name);
const listPokemonNamesIdPlus99 = pokémon.filter((item) => item.id > 99).map(item => item.name);
const listPokemonNamesPoisonOnly = pokémon.filter((item) => item.types.length === 1 && item.types == "poison").map(item => item.name)
const listPokemonNamesSecondTypeFlying = pokémon.filter((item) => item.types.length > 1 && item.types[1] == "flying").map(item => item.name)
const countPokemonNormal = pokémon.filter((item) => item.types.includes("normal")).length

//respuestas
console.log(" Una serie de objetos Pokémon donde la identificación es divisible por 3");
console.log(listIdThree)
console.log(`una serie de objetos Pokémon que son del tipo "fuego"`)
console.log(listFire)
console.log(`Una variedad de objetos Pokémon que tienen más de un tipo`)
console.log(listMoreThanOneType)
console.log(`una matriz con solo los nombres de los Pokémon`)
console.log(listPokemonNames)
console.log(`Una matriz con solo los nombres de Pokémon con una identificación mayor que 99`)
console.log(listPokemonNamesIdPlus99)
console.log(`una matriz con solo los nombres del pokémon cuyo único tipo es veneno`)
console.log(listPokemonNamesPoisonOnly)
console.log(`una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"`)
console.log(listPokemonNamesSecondTypeFlying)
console.log(`un recuento de la cantidad de pokémon que son de tipo "normal"`)
console.log(countPokemonNormal)
