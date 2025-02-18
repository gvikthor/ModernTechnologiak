console.log(5 + 7) // print

const alma = 5
let korte = 7

//console.log(alma + korte)

const tomb = ['alma', 5, true, null]

/*
console.log(5/'k')
console.log(5/0)

console.log(Infinity < 500000)
console.log(-Infinity < -500000)

console.log(['abc'] / ['cde'])
console.log(['abc'] * ['cde'])
console.log([5] + [7])
*/

// Tömbök ("listák")

let exampleArray = []
exampleArray[0] = 5
exampleArray[1] = 7
exampleArray[154] = 10
exampleArray[-200] = 9
exampleArray['test'] = 4

//console.log(exampleArray.length)
//console.log(exampleArray[4])

//console.log(undefined == null)

// Objektumok ("dictionaryk")

const human = {
    familyname: 'Smith',
    givenname: 'Peter',
    age: 28,
    isMarried: true,
    //pets: ['Mici', 'Bodri'],
    pets: [
        { name: 'Mici', species: 'cat' },
        { name: 'Bodri', species: 'dog' },
    ],
    home: {
        postalCode: 1039,
        city: 'Budapest',
        street: 'Róma utca',
        number: 1
    }
}

//console.log(human.familyname)
//console.log(human['familyname'])

// Írjuk ki  Peti  0. állatának a nevét
// console.log( human.pets[2].name )
//console.log( human?.pets[1]?.name ?? 'This is a non existent thing :(' )
//console.log( human?.pets[2]?.name ?? 'This is a non existent thing :(' )


// Függvények (def)

function greet() {
    console.log('Hello there!')
}

greet()

function greetByName(name) {
    //console.log('Hello ' + name + '!')
    console.log(`Hello ${name}! :)`) // altgr7  backtick
}

greetByName('Peter')

function generateGreeting(name){
    return `Hello ${name}! :)`
}

//console.log( greetByName('Peter') )
console.log( generateGreeting('Peter') )


const numbers = [5, 7, -2, 3, 10, 150, -85]

/*
function isPositive(number) {
    return number > 0
}
*/

/*
const isPositive = function(number) {
    return number > 0
}
*/

/*
const isPositive = (number) => {
    return number > 0
}

const isPositive = number => number > 0
*/

// SOME
// Eldöntés: Van olyan, amire teljesül?
// f: bármi --> logikai
//numbers.some(isPositive)
console.log(
    numbers.some(number => number > 0),
    numbers.some(number => number < 0),
    numbers.some(number => number > 200),
)

// EVERY
// "Eldöntés": Mindegyikre teljesül?
// f: bármi --> logikai
console.log(numbers.every(number => number > 0))
console.log(numbers.every(number => number > -Infinity))

// FIND
// Keresés (elem): Mutass egy olyan elemet, ami...!
// f: bármi --> logikai
console.log(
    numbers.find(number => number < 0) ?? 'Not found'
)
console.log(
    numbers.find(number => number < -Infinity) ?? 'Not found'
)

// FIND INDEX
// Keresés (index): Mutass egy olyan indexet, ahol az elemre teljesül, hogy...!
// f: bármi --> logikai
console.log(
    numbers.findIndex(number => number < 0)
)

console.log(
    numbers.findIndex(number => number < -Infinity)
)

// FILTER
// Kiválogatás: Add meg azokat az elemeket, amikre teljesül, hogy ... !
// f: bármi --> logikai

console.log(
    numbers.filter(number => number > 0)
)
console.log(
    numbers.filter(number => number < 0)
)

// MAP
// Függvényszámítás: Csináld minden elemfől azt, hogy ... !
// f: bármi --> bármi vagy bármi más

console.log(
    numbers.map(number => number + 5)
)


console.log(
    numbers
        .filter(number => number > 0)
        .filter(number => number < 100)
        .map(number => `I am ${number} years old!`)
)
