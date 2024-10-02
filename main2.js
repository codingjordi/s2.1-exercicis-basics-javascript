// exercici 1.5 - array transformaitons

// nivell 1 - exercici 1

const numbers = [1, 2, 3, 4];

const squareNumbers = [];

numbers.map((num) => {
    squareNumbers.push(num * num)
})

console.log('Numeros al cuadrado: ' + squareNumbers)
console.log('Array original: ' + numbers)

// nivell 1 - exercici 2

const arrayNumbers = [1, 2, 3, 4];

const evenNumbers = arrayNumbers.filter((num) => {
    return num % 2 == 0
})

console.log(evenNumbers)

// nivell 1 - exercici 3

const arrayNumeros = [1, 10 , 8, 11];

const greaterThanTen = arrayNumeros.find((num) => {
    return num > 10;
})

console.log(greaterThanTen)

// nivell 1 - exercici 4

const arrNumeros = [13, 7, 8, 21]

const sumaNumeros = arrNumeros.reduce((acc, num) => acc + num, 0)

console.log(sumaNumeros);
