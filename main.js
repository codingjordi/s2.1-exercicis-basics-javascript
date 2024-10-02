// Exercici 1.1: Arrow functions

// nivel 1 - exercici 1
const addNumbers = (a,b) => a + b; 
console.log(addNumbers(1, 2));


// nivel 1 - exercici 2
const randomNumber = () => Math.floor(Math.random() * 101);
console.log(randomNumber());

// nivell 1 - exercici 3

class Person {
    constructor(nombre) {
        this._nombre = nombre
    }

    set nombre(value) {
        this._nombre = value;
    }
    
    // nivel 1 - exercici 3
    greeting = () => console.log(`Greeting from Mars, ${this._nombre}`);
}

const ismael = new Person('Ismael');

ismael.greeting();