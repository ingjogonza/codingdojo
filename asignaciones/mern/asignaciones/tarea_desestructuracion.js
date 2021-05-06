const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
/**
 * output
 * Tesla
 * Mercedes
 */

 const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
/**
 * Error de referencia porque la variable name no esta definido linea 20
 */

 const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

/**output
 * 12345
 * undefined (porque password no es atrubuto de person)
 * 
 */

 const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
 const [,first] = numbers; //2
 const [,,,second] = numbers; //5
 const [,,,,,,,,third] = numbers;//2
 //Predict the output
 console.log(first == second);//false
 console.log(first == third);//true

 /**
  * output
  * false
  * true
  */

  const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey; //5
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

/**
 * output
 * value
 * [1, 5, 1, 8, 3, 3]
 * 1
 * 5
 */
 
