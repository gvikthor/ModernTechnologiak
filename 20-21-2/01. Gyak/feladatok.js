/*városok, és minden város kerületekre oszlik
[
    [0,54,7,2],         ---> város1 (4 kerület)
    [1,7],              ---> város2 (2 kerület)
    [8,0,0,0,0,0,0,7]   ---> város3 (ennyi kerület)
]

*/
const birds = [
    [3,7,3,1,5,78,4],
    [2,4,1],
    [1,6,8,4,2],
    [65,8,3,1,0,4,7],
    [0,0,0,0,0,0,0,0,0],
    [3,6,8,3,1],
    [157]
]

//Adjunk meg egy várost, ahol csak egy kerület van!
function oneDistrict(city){
    return city.length == 1
}

console.log(`Egyelen kerületes város a(z) ${birds.findIndex(oneDistrict)} indexen`)

//Adjunk meg egy várost, ahol nem volt madár!
function noBird(city){
    return city.every(zero)
}

function zero(bird){
    return bird == 0
}

console.log(`Nincsen madár a(z) ${birds.findIndex(noBird)} indexű városban`)

//Adjuk meg minden városról, hogy hány madár lakik ott összesen!
function birdAmount(city){
    return city.reduce(addition, 0)
}

function addition(num1, num2){
    return num1 + num2
}

function logToConsole(city){
    console.log(birdAmount(city))
}

console.log(`A madarak száma városonként: ${birds.map(birdAmount)}`)
birds.forEach(logToConsole)