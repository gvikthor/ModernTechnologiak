const elem = document.body

function doSomething(){
    console.log('apple')
}

/*
const doSomething = function(param){
    console.log('apple')
}
*/

//elem.addEventListener('click', doSomething)
/*elem.addEventListener('click', (param) => {
    console.log(param)
})*/

/*const blueListItem = document.querySelector('li')
blueListItem.addEventListener('click', event => {
    blueListItem.style.color = 'blue'
})*/

/*
const colorListItems = document.querySelectorAll('li')
for(const listItem of colorListItems){
    listItem.addEventListener('click', event => {
        listItem.style.color = listItem.dataset.color
    })
}
*/

/**
 * Ez a függvény okos delegálást valósít meg. Hasonló elemekre hasonló tevékenység (eseménykezelés) lefutatását teszi lehetővé.
 * @param {HTMLElement} parent Szülő HTML elem
 * @param {String} child Hasonló gyerek elemek CSS selectora
 * @param {String} when Esemény string
 * @param {Function} what Két paraméteres függvény (event, elem), ami lefut az esemény bekövetkeztekor
 */
function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if(eventHandler.contains(closestChild)){
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}

// Így nézne ki, de azt nem lehet: colorUL.delegate(...)
const colorUL = document.querySelector('ul')
delegate(colorUL, 'li', 'click', (event, elem) => {
    elem.style.color = elem.dataset.color
})

//////////////////////////////////

const inputName = document.querySelector('#input-name')
const inputAge = document.querySelector('#input-age')
const btnAdd = document.querySelector('#btn-add')
const peopleTable = document.querySelector('#people tbody')

btnAdd.addEventListener('click', event => {
    const name = inputName.value.trim()
    const age  = inputAge.value.trim()
    if(name == '') return
    //if(név ellenőrzése számokra, spec karakterekre) return
    if(age == '') return
    if(isNaN(age)) return

    const newTR = document.createElement('tr')
        const nameTD = document.createElement('td')
        nameTD.innerText = inputName.value
        newTR.appendChild(nameTD)
        const ageTD = document.createElement('td')
        ageTD.innerText = parseFloat(age) + 5
        newTR.appendChild(ageTD)
    peopleTable.appendChild(newTR)

    inputName.value = ''
    inputAge.value = ''
})

/*
parseInt('20.5')
20
parseFloat('20.5')
20.5
Math.floor(parseFloat(20.5))
20
Math.ceil(parseFloat(20.5))
21
Math.round(parseFloat(20.5))
21 

'apple'.includes('a')
true
'apple'.includes('T')
false 

reguláris kifejezések (regular expressions regex)
'apple'.match(regex)

'      Vezetéknév   Keresztnév Harmadiknév    '.split(' ').filter(e => e.length > 0).join(' ')
*/