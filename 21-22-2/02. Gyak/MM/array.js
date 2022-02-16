const array1 = [1,7,3,2,45,7,48,2,31,6,4,1,5,67,34324,76,4,3,6]
const array2 = [1,1,3,even,5,7,3]
const array3 = [1,7,9,5,3,1,7,7]
const array4 = [2,4,0,6,8,10]

////////////////////////
////tömb->logikai///////
////////////////////////

console.log(
    'array1 includes 6:',
    array1.includes(6)
)

function even(n){
    return n % 2 == 0
}

const even2 = function(n){
    return n % 2 == 0
}

console.log(
    'array1 includes even:',
    array1.includes(even)
)
console.log(
    'array2 includes even:',
    array2.includes(even)
)

/*console.log(
    'array1 some 6',
    array1.some(6)
)*/
console.log(
    'array1 some even',
    array1.some(even)
)
console.log(
    'array3 some even',
    array3.some(even)
)

console.log(
    'array1 every even',
    array1.every(even)
)

console.log(
    'array4 every even',
    array4.every(even)
)


////////////////////////
////tömb->egy elem//////
////////////////////////

console.log(
    'array1 find even',
    array1.find(even)
)
console.log(
    'array3 find even',
    array3.find(even)
)
console.log(
    'array1 findIndex even',
    array1.findIndex(even)
)
console.log(
    'array3 findIndex even',
    array3.findIndex(even)
)

/*
function myFind(condition, array){
    let index = -1
    let resultIndex = -1
    let found = false
    while(index < array.length && !found){
        if(condition(array[index])){
            found = true
            resultIndex = index
        }
        index++
    }

    return array[resultIndex]
}
myFind(even, array1)
myFind(even, array3)
*/


////////////////////////
////tömb->tömb//////////
////////////////////////

console.log(
    'array1 filter even',
    array1.filter(even),
    array1
)
console.log(
    'array3 filter even',
    array3.filter(even),
    array3
)
console.log(
    'array4 filter even',
    array4.filter(even),
    array4
)

const array1Even = array1.filter(even)

// eddig logikai függvények: valami -> logikai (igaz/hamis)
// innentől bármilyen függvények: valami -> valami vagy valami más

function double(n){
    return n*2
}
function multiplicationTable(n){
    let result = []
    for(let i = 1; i <= 10; i++){
        result.push(i*n)
    }
    return result
}

/*const double = function(n){
    return n*2
}*/

console.log(
    'array1 map double',
    array1.map(double)
)
console.log(
    'array1 map multiplicationTable',
    array1.map(multiplicationTable)
)


////////////////////////
////tömb->bármi/////////
////////////////////////

function summation(sum, current){
    return sum + current
}

console.log(
    'summation',
    array1.reduce(summation)
)

function cat(sum, current){
    return 'cat'
}

console.log(
    'cat',
    array1.reduce(cat)
)

function cat2(sum, current){
    return sum + 'cat'
}

console.log(
    'cat2',
    array1.reduce(cat2, 'dog')
)

function logDouble(n){
    console.log(2*n)
}

array1.forEach(logDouble)

////////////////////////////////////////////

function smallerThan10(n){
    return n < 10
}

console.log(
    'chain of array functions',
    array1
     .map(double)
     .filter(smallerThan10)
     .filter(even)
     .reduce(summation)
)

console.log(
    'nameless function',
    array1.filter(function(n){
        /*
        flkjsédlfkj
        lkjfhlksdfj
        lksdjflsfdkj
        */
        return n % 2 == 0
    })
)

console.log(
    'arrow function',
    array1.filter((n) => {
        /*
        flkjsédlfkj
        lkjfhlksdfj
        lksdjflsfdkj
        */
        return n % 2 == 0
    })
)

console.log(
    'arrow function compact',
    array1.filter(n => n % 2 == 0 && n < 10 && n > 0)
)

console.log(
    'chain of array functions',
    array1
     .filter(n => n % 2 == 0)
     .map(n => n / 2)
     .filter(n => n > 10)
     .reduce((sum, current) => sum + current)
)