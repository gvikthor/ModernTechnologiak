//    hol      keres       mit
// document.querySelector('div')

/*
console.log(
    document.querySelector('div')
)
*/

/*
const firstDiv = document.querySelector('div')
firstDiv.innerText = 'Orange'
*/

const attackUL = document.querySelector('#cyber-attacks')

// képzeljük el, hogy ez adatbázisból érkezik
const attacks = [
    'CrowdStrike 2024',
    'Microsoft 2024',
    'Oracle 2023'
]

// ciklus
let attackULcontent = ''
for (let attack of attacks) {
    //attackUL.innerHTML = '<li>' + attack + '</li>'
    //attackUL.innerHTML = `<li>${attack}</li>`

    //attackUL.innerHTML = attackUL.innerHTML + `<li>${attack}</li>`
    //attackUL.innerHTML += `<li>${attack}</li>`
    attackULcontent += `<li>${attack}</li>`
}
attackUL.innerHTML = attackULcontent


/*
for elem in list:
    lépések
*/


const faangUL = document.querySelector('#faang-companies')
const faangCompanies = [
    'Facebook',
    'Amazon',
    'Apple',
    'Netflix',
    'Google'
]

// 1.: Létrehozok egy új elemet
// 2.: Feltöltöm tartalommal
// 3.: Befűzöm az oldalba

for (let company of faangCompanies) {
    // 1.
    const newLI = document.createElement('li')

    // 2.
    newLI.innerText = company
    newLI.style.color = 'red'
    newLI.id = `faang-${company}` // nem működik, ha szóköz van a cég nevében

    // 3.
    faangUL.appendChild(newLI)
}

//////////////////////////////////////////////
const animalsUL = document.querySelector('#animals')
const animals = [
    { name: 'Bodri',    species: 'dog', age: 7 },
    { name: 'Bors',     species: 'cat', age: 4 },
    { name: 'Gyömbér',  species: 'cat', age: 8 },
    { name: 'Peti',     species: 'dog', age: 2 },
    { name: 'Mici',     species: 'cat', age: 1 }
]

/*
- Bordi (7)
- Bors (4)
- Gyömbér (8)
- Peti (2)
- Mici (1)
*/

/*
for (let animal of animals) {
    //animalsUL += '<li>' + animal.name + ' ' + animal.age + '</li>'
    //animalsUL.innerText += `<li>${animal.name} (${animal.age}) </li>`

    if(animal.species == 'cat') {
        animalsUL.innerHTML += `<li>${animal.name} (${animal.age}) </li>`
    }
}
*/

/*
{ name: 'Mici',     species: 'cat', age: 1 } => <li>Mici (1)</li>
*/

animals
    .filter(animal => animal.species == 'cat')
    .map(animal => `<li>${animal.name} (${animal.age})</li>`)
    .forEach(li => animalsUL.innerHTML += li)