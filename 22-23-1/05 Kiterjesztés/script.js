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

function isStringInput(value){
    const newValue = value.trim()
    return newValue != ''
}

function isNumericInput(value){
    const newValue = value.trim()
    return newValue != '' && !isNaN(newValue)
    return !(newValue == '' || isNaN(newValue))   

    /* deMorgan azonosság
    (nem kék) és (nem piros)
    nem (kék vagy piros)

    (nem kék) vagy (nem piros)
    nem (kék és piros)
    */
}

btnAdd.addEventListener('click', event => {
    if(!isStringInput(inputName.value)) return
    if(!isNumericInput(inputAge.value)) return

    const newTR = document.createElement('tr')
        const nameTD = document.createElement('td')
        nameTD.innerText = inputName.value
        nameTD.dataset.type = 'string'
        newTR.appendChild(nameTD)
        const ageTD = document.createElement('td')
        ageTD.innerText = parseFloat(inputAge.value) + 5
        ageTD.dataset.type = 'number'
        newTR.appendChild(ageTD)
        const deleteTD = document.createElement('td')
        deleteTD.innerText = '🚯'
        deleteTD.classList.add('delete-row')
        newTR.appendChild(deleteTD)
    peopleTable.appendChild(newTR)

    inputName.value = ''
    inputAge.value = ''
})

/*
const td = document.querySelector('td')
td.addEventListener('click', event => {
    if(td.classList.contains('active-editing')) return

    const newInput = document.createElement('input')
    newInput.value = td.innerText
    td.innerText = ''
    td.appendChild(newInput)
    td.classList.add('active-editing') // <td class="active-editing"></td>

    newInput.addEventListener('keydown', event => {
        if(event.key != 'Enter') return

        const newValue = newInput.value
        td.innerHTML = ''
        td.innerText = newValue
    })
})
*/

delegate(peopleTable, 'td', 'click', (event, elem) => {
    if(elem.classList.contains('active-editing')) return
    if(elem.classList.contains('delete-row')) return

    const newInput = document.createElement('input')
    newInput.value = elem.innerText
    elem.innerText = ''
    elem.appendChild(newInput)
    elem.classList.add('active-editing') // <td class="active-editing"></td>

    newInput.addEventListener('keydown', event => {
        if(event.key != 'Enter') return
        if(!isStringInput(newInput.value)) return
        if(elem.dataset.type == 'number' && !isNumericInput(newInput.value)) return
        /*if(elem.dataset.type == 'number'){
            if(!isNumericInput(newInput.value)) return
        }*/

        const newValue = newInput.value.trim()
        elem.innerHTML = ''
        elem.innerText = newValue

        elem.classList.remove('active-editing')
    })
})

delegate(peopleTable, '.delete-row', 'click', (event, elem) => {
    peopleTable.removeChild(elem.parentNode)
})
