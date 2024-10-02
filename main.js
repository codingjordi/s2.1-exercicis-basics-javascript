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

// nivell 3 - exercici 4

function parOImpart(arr) {
    arr.forEach(element => {
        ((element % 2 === 0) ? console.log(element + ' és parell') : console.log(element + ' és imparell') )
    });    
}

parOImpart([1, 2, 3, 4, 5]);


//1.3 callbacks

// nivell 1- exercici 1

let person = 'Paco';

function processar(callback, name) {
    callback(name);
}

function greeting(name) {
    return console.log(`Hi, ${name}`);
}

processar(greeting, person);

// nivell 1 - exercici 2

function calculadora(callback, num1, num2) {
    console.log(callback(num1, num2));
}

function suma(num1, num2) {
    return num1 + num2;
}

calculadora(suma, 4, 2);

// nivell 2 - exercici 3

function esperarISaludar(nom, callback) {
    setTimeout(() => {
        callback(nom)
    }, 2000)
}

function saludar(nom) {
    console.log(`Hola, ${nom}!`)
}

esperarISaludar('Catalina', saludar);

// nivell 2 - exercici 4

const frutas = ['manzana', 'pera', 'limon', 'jengibre', 'tomate']

function processarElements(arr, callback) {
    callback(arr)
}

function processarElement(arr) {
    for(i = 0; i < arr.length; i++) {
        console.log(`Procesando ${arr[i]}...`)
    }
}

processarElements(frutas, processarElement);

// nivell 3 - exercici 5

const nombre = 'Helena';

function processarCadena(name, callback) {
    callback(name);
}

function cadenaEnMajusculas(nombre) {
    console.log(nombre.toUpperCase());
}

processarCadena(nombre, cadenaEnMajusculas);

// exercici 1.4 - rest & spread operators

// nivell 1 - exercici 1

const array1 = ['Pere', 'Ahmed', 'Maria']
const array2 = ['Jordi', 'James', 'Marina']
const array3 = [...array1, ...array2]

console.log(array3);

// nivell 1 - exercici 2

const numeros = [2, 3, 4, 1];

function suma(...nombres) {
    return nombres.reduce((acc, nombre) => acc + nombre, 0)
}

console.log(suma(...numeros));