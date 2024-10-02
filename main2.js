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

// nivell 2 - exercici 5

const arrNumbers = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

const result = arrNumbers.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0)

console.log(result)

// nivell 3 - exercici 6

const arrayNumberos = [11, 12, 13, 14]

const allGreaterThanTen = arrayNumberos.every(num => num > 10)

const someGreaterThanTen = arrayNumberos.some(num => num > 10)

console.log('Todos los numeros son mayor que 10: ' + allGreaterThanTen)

console.log('Algun numero es mayor que 10: ' + someGreaterThanTen)





// Exercici 1.6: Array loops

// nivell 1 - exercici 1

let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(nom => console.log(nom));


// nivell 1 - exercici 2

let arrNoms = ['Anna', 'Bernat', 'Clara'];

for (let nom of arrNoms) {
    console.log(nom)
}


// nivell 1 - exercici 3

let arrayNum = [1, 2, 3, 4, 5, 6]; 

const evenNums = arrayNum.filter(num => num % 2 === 0)

console.log(evenNums)

// nivell 2 - exercici 4

let obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona' 
};

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// nivell 2 - exercici 5

let numberos = [1, 2, 3, 4, 5, 6]

for(num of numberos) {
    console.log(num)
    if (num === 5) {
        break;
    }
}

//nivell 3 - exercici 6

let nombres = ['Anna', 'Bernat', 'Clara']

let index = 0;


for(nombre of nombres) {
    console.log(`Index: ${index}, nom: ${nombre}`);
    index++;
}





// Exercici 1.7: Promises & Async/Await

// nivell 1 - exercici 1

const saludoLento = new Promise ((resolve) => {
    setTimeout(() => {
        resolve('Hola, món')
    }, 2000)
    
})


// nivell 1 - exercici 2

saludoLento.then((mensaje) => {
    console.log(mensaje)
})

// nivell 1 - exercici 3

const input = 'Hola'

const salutacioLenta = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if(input === 'Hola') {
            resolve(input)
        } else {
            reject('Wrong input :-(')
        }
    })
})

salutacioLenta.then((mensaje) => console.log(mensaje))
              .catch((e) => console.log('Error: ' + e))


// nivell 1 - exercici 4

async function mostrarResultado() {
    const resultado = await saludoLento;
    console.log(resultado)
}

mostrarResultado();