var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:17}];

//¿Cómo harías print/log de la edad de John?
//console.log(users[1].age);
//¿Cómo harías print/log del nombre del primer objeto?
//console.log(users[0].name);
//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
//users.forEach(user=>console.log(`Nombre ${user.name} Edad ${user.age}`))

//¿Cómo harías para imprimir el nombre de los mayores de edad?
users.forEach(
    function printMajor(element, array) {
        if(element.age>18){
            console.log(element.name);
        }   
    }
);


