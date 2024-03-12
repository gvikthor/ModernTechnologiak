function $(parent = document.body, child = 'div', fillerFunction = null){
    const newElem = document.createElement(child)
    fillerFunction(newElem)
    parent.appendChild(newElem)
    return newElem
}

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
const colorsBySize = [
    { limit: 10, color: 'deepskyblue' },
    { limit: 70, color: 'sandybrown' },
    { limit: Infinity, color: 'crimson' }
]
const euCountries = [
    { id: 'aus', name: 'Ausztria', capital: 'Bécs', language: 'német', populationM: 8.9, sizeKM2: 83871 },
    { id: 'fra', name: 'Franciaország', capital: 'Párizs', language: 'francia', populationM: 68, sizeKM2: 643800 },
    { id: 'hun', name: 'Magyarország', capital: 'Budapest', language: 'magyar', populationM: 9.7, sizeKM2: 93000 },
    { id: 'ita', name: 'Olaszország', capital: 'Róma', language: 'olasz', populationM: 59, sizeKM2: 302000 },
    { id: 'ger', name: 'Németország', capital: 'Berlin', language: 'német', populationM: 83.2, sizeKM2: 357600 }
]
let selectedID = null
let selectedElement = null
function getSelectedCountry(){
    return euCountries.find(country => country.id == selectedID) ?? null
}

const popChangingButtons = document.querySelector('#pop-changing-buttons')
const euTableBody = document.querySelector('#eu-table tbody')

function refreshTable(){
    euTableBody.innerHTML = ''
    euCountries.forEach(
        country => $(euTableBody, 'tr', tr => {

            tr.style.backgroundColor = colorsBySize.find(color => color.limit > country.populationM).color
            tr.dataset.id = country.id
            tr.id = `country-${country.id}`

            $(tr, 'td', td => td.innerText = country.name)
            $(tr, 'td', td => td.innerText = country.capital)
            $(tr, 'td', td => td.innerText = country.language)
            $(tr, 'td', td => td.innerText = country.populationM)
            $(tr, 'td', td => td.innerText = country.sizeKM2)
            $(tr, 'td', td => td.innerText = ((country.populationM*1000000)/country.sizeKM2).toFixed(2))
        })
    )
}

delegate(euTableBody, 'tr', 'click', (event, elem) => {
    if(selectedID == elem.dataset.id){
        elem.classList.remove('selected')
        selectedElement = null
        selectedID = null
    }else{
        selectedElement?.classList.remove('selected')
        elem.classList.add('selected')
        selectedElement = elem
        selectedID = elem.dataset.id
    }
})

delegate(popChangingButtons, 'button', 'click', (event, elem) => {
    const deltaPop = parseInt(elem.dataset.deltapop)/1000000
    euCountries.find(country => country.id == selectedID).populationM += deltaPop
    refreshTable()
    selectedElement = euTableBody.querySelector(`#country-${selectedID}`)
    selectedElement.classList.add('selected')
})

refreshTable()