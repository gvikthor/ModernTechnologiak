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

const input = document.querySelector('input')
const table = document.querySelector('table')
for(let i = 0; i < 100; i++){
    const newRow = document.createElement('tr')
    for(let j = 0; j < 100; j++){
        const newTD = document.createElement('td')

        newRow.appendChild(newTD)
    }
    table.appendChild(newRow)
}

input.value = 'red'
delegate(table, 'td', 'click', (event, elem) => {
    elem.style.backgroundColor = input.value
})