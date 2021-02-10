console.log("Hello Wrold!")


let number1 = 5
let number2 = 10
let number3
let number4 = 10, number5 = 15, string1 = 'almafa', string2 = "körtefa", string3 = `barackfa`
let boolean1 = true, boolean2 = false
const number7 = 10

//number7 = 1

console.log(number1, number2, number3, number4, number5, string1, string2, string3, boolean1, boolean2)

/*
null --> direkt üres
undefined --> nem adtunk neki értéket
*/

let array1 = [4,7,6,23,5,31,'almafa','szilvafa',true,[2.6,87,3,'stirng',false],4567]
console.log(array1)

let object1 = {
    name: 'Péter',
    age: 21,
    home: 'Szigetszentmiklós',
    siblings: ['Nándor','József'],
    phone: {
        brand: 'Smasung',
        type: 'Galaxy S20',
        color: 'black'
    }
}
console.log(object1)

////////////////////////////////////////////////////////////////////////////////////////////

let movies = ['Inception', 'Interstellar', 'Tenet', 'Batam', 'Star Wars', 'Avangers']


for(const movie of movies){
    console.log(movie)
}

for(let i = 0; i < movies.length; i++){
    console.log(movies[i])
}

let movies2 = movies

let movies3 = []
for(const movie of movies){
    movies3.push(movie)
}

console.log(movies, movies2, movies3)
movies[0] = '1914'
console.log(movies, movies2, movies3)

//////////////////////////////////////////////////////////////////////

const person = {
    name: 'Péter',
    age: 21,
    home: 'Szigetszentmiklós'
}

/*person = {

}*/

person.name = 'Andrea'

//////////////////////////////////////////////////////////////////////

function sum1(num1, num2){
    let sum = num1 + num2
    console.log(sum)
}

function sum2(num1, num2){
    return num1 + num2
}

sum1(5,9)

console.log( sum2( sum2(5,9) , sum2(4,1) ) )

////////////////////////////////////////////////////////////////////

function even(number){
    return number % 2 == 0
}

function increase(number){
    return number+1
}

function summation(num1, num2){
    return num1 + num2
}

function mySome(array, condition){ // keresés programozási tétel
    let found = false
    let i = 0
    while(i < array.length && !found){
        found = condition(array[i])
        i++
    }
    return found
}

/*
Szorgalmi: myEvery, myFilter
*/

console.log(
    [5,23,6,8,3,1,5,-1,4-6,1,5.7,1].some(even),
    mySome( [5,23,6,8,3,1,5,-1,4-6,1,5.7,1], even),
    [2,4,8,10,4,5].every(even),
    [5,24,5,7,3,1,5,2,6,-7,2,8,1].filter(even),
    [5,23,5,7,3,1,5,5,7,-7,6,7,1].find(even),
    [1,1,1,1,1,2,5,23,5,7,3,1,5,5,7,-7,6,7,1].findIndex(even),
    [4,158,1,1,6,5,23,5,7,3,1,5,5,7,-7,6,7,1].map(increase),
    [4,158,1,1,6,5,23,5,7,3,1,5,5,7,-7,6,7,1].reduce(summation, 0)
)