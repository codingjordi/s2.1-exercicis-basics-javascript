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

// 1.2 operador ternari

// nivell 1 - exercici 1
function potConduir(edat) {
    (edat >= 18) ? console.log('Pots conduir') : console.log('No pots conduir');
}

potConduir(20);

// nivell 1 - exercici 2

function graterNum(num1, num2) {
    (num1 > num2) ? console.log(`${num1} és més gran que ${num2}`) : console.log(`${num2} és més gran que ${num1}`); 
}

graterNum(1, 5);

// nivell 2 - exercici 3

function sortNumber(num){
    (num <= 0) ? ((num < 0) ? console.log('Negatiu') : console.log('Zero')) : console.log('Positiu')
}

sortNumber(1);

function trobarMaxim(a, b, c) {
    (a > b) ? ((a > c) ? console.log(`${a} és el nombre més gran`) : console.log(`${c} és el nombre més gran`)) : ((b > c) ? console.log(`${b} és el nombre més gran`) : console.log(`${c} és el nombre més gran`))
}

trobarMaxim(1, 2, 3);