const numbers = [5,-7,4,-12,2,4,-67,8,-6,4,2,-3,6,8,5,-2,46,67,24,1,45,4,3]

/*
def something(param):
    lkshfgkljdsh
    dlskfjhldksghj
    ldfiuhbkdgjh
    return gdhfg
*/

function isNegative(number){
    return number < 0
}

function isLargerThan100(number){
    return number > 100
}

function isSmallerThan100(number){
    return number < 100
}

/*
const isNegative = function(number){
    return number < 0
}
*/

// logikaiFgv x [elem] --> logikai
//
console.log(
    numbers.some(isNegative),
    numbers.some(isLargerThan100),
    numbers.every(isNegative),
    numbers.every(isSmallerThan100)
)

// logikaiFgv x [elem] --> elem
//
console.log(
    numbers.find(isNegative),
    numbers.find(isLargerThan100),
    numbers.findIndex(isNegative),
    numbers.findIndex(isLargerThan100)
)

function triple(number){
    return number * 3
}

// map: bármilyenFgv x [elem] --> [elem]
// filter: logikaiFgv x [elem] --> [elem]
console.log(
    numbers.map(triple),
    numbers.map(triple).find(isLargerThan100),
    numbers.map(triple).filter(isNegative).find(isLargerThan100)
)

//////////////////////////////////////////

console.log(
    numbers.map(function(number){
        //xlkcvjhbxlgkjhb
        //xklcvjhbxclgkjhblxkj
        return number + 5
    })
)

console.log(
    numbers.map(number => number + 5)
)

//const something = (num, num2) => num + num2

console.log(
    numbers
        .map(num => num*100)
        .filter(num => num < 500)
        .find(num => num > 0)
)

//////////////////////////////////////////

const numberMatrix = [
    [1,5,8,4,2,45,6],
    [4,67,4,2,4,2],
    [4,6,67,7,4,2,2,56,7,3,2,6],
    [3,4,67,53,32,41,67,7,356,314,5,5]
]

console.log(
    'Hossz map',
    numberMatrix.map(elem => elem.length)
)

console.log(
    'Melyik rövidebb mint 7?',
    numberMatrix.find(elem => elem.length < 7)
)

console.log(
    'Egy 7-nél rövidebb tömb elemeit duplázzuk meg!',
    numberMatrix
        .find(elem => elem.length < 7)
        .map(elem => elem * 2)
)

console.log(
    'Egy 7-nél rövidebb tömb elemeit duplázzuk meg, utána szűrjük ki a 7-nél kisebbeket, majd találjunk egy párosat!',
    numberMatrix
        .find(elem => elem.length < 7)
        .map(elem => elem * 2)
        .filter(elem => elem < 7)
        .find(elem => elem % 2 == 0)
)

//////////////////////////////////////////

const people = [
    {
        name: 'George',
        age: 27,
        movies: ['Dune', 'Star Wars']
    },
    {
        name: 'Peter',
        age: 26,
        movies: ['Lord of the Rings', 'Game of Thrones']
    },
    {
        name: 'Laure',
        age: 24,
        movies: ['JoJo', 'Cells at Work', 'Avatar']
    },
    {
        name: 'Steve',
        age: 1,
        movies: ['Game of Thrones']
    }
]

console.log(
    'Találjunk valakit, aki legalább 3 filmet szeret!',
    people
        .find(person => person.movies.length >= 3)
        .name
)

console.log(
    'Adjunk meg egy 18 év alatti Trónok Harca nézőt!',
    people
        .filter(person => person.movies.includes('Game of Thrones'))
        .find(person => person.age < 18)
        .name
)
// .filter(person => person.movies.some(movie => movie == 'Game of Thrones'))


const people2 = [
    {
        name: 'George',
        age: 27,
        movies: [
            {title: 'Dune', year: 2022, scifi: true},
            {title: 'Star Wars', year: 1977, scifi: true}
        ]
    },
    {
        name: 'Peter',
        age: 26,
        movies: [
            {title: 'Lord of the Rings', year: 2003, scifi: false},
            {title: 'Game of Thrones', year: 2015, scifi: false}
        ]
    },
    {
        name: 'Laure',
        age: 24,
        movies: [
            {title: 'Avatar', year: 2008, scifi: true},
            {title: 'JoJo', year: 2001, scifi: false},
            {title: 'Cells at Work', year: 2009, scifi: false}
        ]
    },
    {
        name: 'Steve',
        age: 1,
        movies: [
            {title: 'Game of Thrones', year: 2015, scifi: false},
            {title: 'Peppa Pig', year: 2010, scifi: true}
        ]
    }
]

console.log(
    'Kik néznek scifit?',
    people2
        .filter(person => person.movies.some(movie => movie.scifi))
        .map(person => person.name)
)

///////////////////

// Állítsuk sorba a filmeket megjelenési évük szerint
console.log(
    numbers.sort((a,b) => a > b)
)

console.log(
    people2
        .flatMap(person => person.movies)
        .sort((movie1, movie2) => movie1.year > movie2.year)
        .map(movie => `${movie.title} (${movie.year})`)
)

const words = [
    'nyitva',
    'nyávog',
    'nyx',
    'meggyfa',
    'meggyőz'
]

console.log(
    words.sort((word1, word2) => word1 > word2)
)