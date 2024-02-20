// Három féle idézőjel: '   "   ` (backtick, altgr7)
let text1 = 'Hello There!'
console.log(text1)

let text2 = "Luke's lightsaber"
let text3 = 'Obi-Wan said: "May the Force be with you"'

let text4 = "Obi-Wan said: \"This is Luke's lightsaber\""
let text5 = `Obi-Wan said: "This is Luke's lightsaber"`

let age = 27
console.log('Gergő ' + age + ' éves')
console.log(`Gergő ${age} éves`)

// állatok: tigris, medve, sas, macska
let animals = ['tigris', 'medve', 'sas', 'macska']
animals.push('kutya')
console.log(animals)
console.log(animals[0])

//  0. lépés ; feltétel; minden ciklus végén lépés
for(let i = 0; i < 5; i = i + 1){

}

let i = 0
while(i < 5){

    //i = i + 1
    //i += 1
    i++
}

for(let animal of animals){ // Ezt fogjuk a legtöbbet használni
    console.log(animal)
}
for(let index in animals){
    console.log(index)
}

var something1 = 'Ezt nem használjuk'

const something2 = 'Ez egy fix dolog'
//something2 = 'Valami más'

const cities = ['Budapest', 'Bécs', 'Berlin']
cities.push('Brüsszel')
//cities = []

const cities2 = cities
cities.push('Basel')
console.log(cities2)

const cities3 = JSON.parse(JSON.stringify(cities))
cities.push('Bentpétervár')
console.log(cities3)

///////////////////////////////////////////////////////////

console.log(document.body.innerText)
console.log(document.body.innerHTML)

//document.body.innerText = '<b>Tiger</b>'
//document.body.innerHTML = '<b>Tiger</b>'
document.body.innerHTML += '<b>Tiger</b>'

//////////////////////////////////////////////////////////

//def valami()

/**
 * Ez a függvény megmondja, hogy a bemeneti paraméter páros-e
 * @param {Number} num 
 * @returns Páros volt a bemenet?
 */
function isEven(num){
    /*let even = false
    if(num % 2 == 0){
        even = true
    }
    return even*/
    return num % 2 == 0
}

console.log( isEven(5), isEven(6), isEven('alma') )

function writeSpecialThanks(name, age, ageTransform){
    console.log(`Boldog ${ageTransform(age)}. születésnapot ${name}!`)
}

/*
function double(num){
    return num * 2
}
*/
/* Ez ugyanazt jelenti:
const double = function(num){
    return num * 2
}
*/
/*
const double = (num) => {
    return num * 2
}
*/
const double = num => num * 2  // arrow function

//writeSpecialThanks('Peti', 25, double)
writeSpecialThanks('Peti', 25, num => num * 3)
writeSpecialThanks('Peti', 25, num => 7)
writeSpecialThanks('Peti', 25, num => 'nem')
writeSpecialThanks('Peti', 25, num => 'vagyok, te meg nem, :(')
writeSpecialThanks('Peti', 25, num => console.log(num))


const numbers = [1,5,21,47,6,4,2,1,4,677,5,2,1,36,7,457,237,5]


// Tömb x Logikai függvény => Logikai érték
console.log( numbers.some(isEven) )
console.log( numbers.some(num => num > 20) )
console.log( numbers.some(num => num == 109) )

console.log( numbers.every(isEven) )
console.log( numbers.every(num => num > 0) )

// Tömb x Logikai függvény => Tömb elem
console.log( numbers.find(isEven) )
// Tömb x Logikai függvény => Tömb index
console.log( numbers.findIndex(isEven) )


// Tömb x Logikai függvény => Másik tömb
console.log( numbers.filter(isEven) )
// Tömb x Bármilyen függvény => Másik tömb
console.log( numbers.map(isEven) )
console.log( numbers.map(double) )
console.log(
    numbers
        .filter(isEven)
        .map(double)
        .every(num => num < 100)
)