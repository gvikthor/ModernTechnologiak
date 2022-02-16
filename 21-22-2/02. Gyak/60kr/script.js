const array1 = [1,6,4,7,9,3,4,5,4,4,10,8,12]
const array2 = [2,4,8,2,0,4,6,2]
const array3 = [1,5,7,1,3,5]

function writeTrueFalse(arrayFunctionResult, comment){
    if(arrayFunctionResult){
        console.log(`${comment}: The result was true`)
    }else{
        console.log(`${comment}: The result was false`)
    }
}



/*writeTrueFalse(
    array1.every(4)
)*/

function even(n){
    return n % 2 == 0
}

const even2 = function(n){
    return n % 2 == 0
}

///////////////////////////////////////////////////////
// tömb -> logikai //
///////////////////////////////////////////////////////

writeTrueFalse(
    array1.includes(4),
    'Array1 includes 4'
)


//if(even(array[0]) && even(array[1]) && ...)
let everyTrue = true
//for(let i = 0; i < array1.length && everyTrue; i++)
for(const num of array1){
    everyTrue = everyTrue && even(num)
}
writeTrueFalse(everyTrue, 'Programozási tétel')

writeTrueFalse(
    array1.every(even),
    'array1 every even'
)

writeTrueFalse(
    array2.every(even),
    'array2 every enen'
)

writeTrueFalse(
    array1.some(even),
    'array1 some even'
)

writeTrueFalse(
    array3.some(even),
    'array3 some even'
)

///////////////////////////////////////////////////////
// tömb -> egy valami //
///////////////////////////////////////////////////////

console.log(
    'array1 find even:',
    array1.find(even)
)

console.log(
    'array3 find even:',
    array3.find(even)
)

console.log(
    'array1 findIndex even:',
    array1.findIndex(even)
)

console.log(
    'array3 findIndex even:',
    array3.findIndex(even)
)

///////////////////////////////////////////////////////
// tömb -> tömb //
///////////////////////////////////////////////////////

console.log(
    'array 1 filter even:',
    array1.filter(even),
    array1
)
console.log(
    'array 2 filter even:',
    array2.filter(even),
    array2
)
console.log(
    'array 3 filter even:',
    array3.filter(even),
    array3
)

const evenArray1 = array1.filter(even)

// első nem logikai függvényes tömbfüggvény
function double(n){
    return n*2
}

console.log(
    'array1 map double',
    array1.map(double)
)

////////////////////////////////////////////

let sum = 0
for(const n of array1){
    sum = sum + n
}

function summation(sum, n){
    return sum + n
}

console.log(
    array1.reduce(summation)
)
console.log(
    array1.reduce(summation, 10)
)
// miért lehet és kell kezdőérték? az objektumos órán megmutatom

//////////////////////////////////////////////////////
// funkcionalitás //
//////////////////////////////////////////////////////

function smallerThanFive(n){
    return n < 5
}

function isFour(n){
    return n == 4
}

console.log(
    'array 1 > evens > smalls > every4',
    array1
        .filter(even)
        .filter(smallerThanFive)
        .every(isFour)
)

console.log(
    'array 1 > evens > smalls > sum',
    array1
        .filter(even)
        .filter(smallerThanFive)
        .reduce(summation)
)

/*const greater7 = function(n){
    return 7 < n
}

console.log(
    array1.filter(greater7)
)*/

console.log(
    'nameless function (névtelen függvény) greater7',
    array1.filter(function(n){
        /*klyfjhlkdsfjg
        sdfkljhdlskfh
        dflékdjblkjd       
        */
        return 7 < n
    })
)

console.log(
    'arrow function (nyílfüggvény) smaller7',
    array1.filter((n) => {
        /*ksdjhklsfyh
        yjvhlkyhv
        lykxfjvlkxfjh*/
        return 7 > n
    })
)

console.log(
    'arrow function (nyílfüggvény) smaller7 greater4',
    array1.filter(n => 7 > n && n > 4)
)

console.log(
    'arrow functions',
    array1
        .map(n => n*3)
        .filter(n => n < 30)
        .find(n => n % 2 == 0)
)

/*
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/


console.log(document)
console.log(document.body)

console.log(document.querySelector('div div'))
console.log(document.querySelector('ul .randomclass'))
console.log(document.querySelector('.randomclass'))
console.log(document.querySelector('ul .randomclass'))

console.log(document.querySelectorAll('div'))
console.log(document.querySelectorAll('.randomclass'))
console.log(document.querySelectorAll('#noid'))

//document.querySelectorAll('div').every(d => false)
console.log(
    Array.from(document.querySelectorAll('div')).map(d => "here's a div")
)

const unorderedList = document.querySelector('ul')
console.log(
    unorderedList.innerHTML
)
console.log(
    unorderedList.innerText
)
//unorderedList.innerHTML = unorderedList.innerHTML + 'Dog'
unorderedList.innerHTML += '<li>Dog</li>'
//unorderedList.innerText += '<li>Duck</li>'

const li = document.createElement('li')
li.innerText = 'Duck'
li.style.color = 'red'
unorderedList.appendChild(li)

/*
1. létrehozás (createElement)
2. tartalom (innerText, több elem létrehozása és hozzáfűzése)
3. hozzáfűzés (appendChild)
*/

///////////////////////////////////////////////////////////////////////////

const animals = ['Duck', 'Pig', 'Cow', 'Chicken']
const money   = [10000, -7000, 3500, -75000, 120000, 2, 450, -7900]

const farm = document.querySelector('#farm')
let element

element = document.createElement('h2')
element.innerText = 'Animals'
farm.appendChild(element)

//farm.appendChild(document.createElement('h2')).innerText = 'Animals'

element = document.createElement('ul')
for(const animal of animals){
    let li = document.createElement('li')
    li.innerText = animal
    element.appendChild(li)
}
farm.appendChild(element)

/*
2 ponért:
income és expense listák megcsinálása
*/