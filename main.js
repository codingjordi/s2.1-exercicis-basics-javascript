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

// nivell 2 - exercici 4

function printNumbers(arr) {
    for(i = 0; i < arr.length; i++) {
        const printNumber = () =>  console.log(arr[i]);
        printNumber();
    }
}

printNumbers([1, 2, 3]);

// nivell 3 - exerici 5

const delayedMessage = setTimeout(() => {
    console.log('Perdón por el retraso');
}, 3000);
