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
    //return euCountries.find(country => country.id == selectedElement.dataset.id) ?? null
}

const popChangingButtons = document.querySelector('#pop-changing-buttons')
const euTableBody = document.querySelector('#eu-table tbody')


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

function refreshTable(/*filterName ez ha űrlapozol*/){
    euTableBody.innerHTML = ''
    const colorsBySize = [
        { limit: 10, color: 'deepskyblue' },
        { limit: 70, color: 'sandybrown' },
        { limit: Infinity, color: 'crimson' }
    ]
    
    
    /*euCountries
    .forEach(country => {
        let color = colorsBySize.find(color => color.limit > country.populationM).color

        // 1. Elem generálás
            // 2. Elem tartalmának megadása
        // 3. Elem befűzése az oldalba
        const newTR = document.createElement('tr')
            newTR.style.backgroundColor = color
            //newTR.classList.add('selected')

            const newNameTD = document.createElement('td')
                newNameTD.innerText = country.name
            newTR.appendChild(newNameTD)

            const newCapitalTD = document.createElement('td')
                newCapitalTD.innerText = country.capital
                newCapitalTD.classList.add('selected')
            newTR.appendChild(newCapitalTD)

            const newLanguageTD = document.createElement('td')
                newLanguageTD.innerText = country.language  
            newTR.appendChild(newLanguageTD)
        euTableBody.appendChild(newTR)
    })*/

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
refreshTable()

/*euTableBody.addEventListener('click', event => {
    event.target.classList.toggle('selected')
})*/

/*delegate(euTableBody, 'tr', 'click', (event, elem) => {
    if(elem.classList.contains('selected')){
        elem.classList.remove('selected')
        return
    }

    const prevSelected = euTableBody.querySelector('.selected')
    prevSelected?.classList.remove('selected')
    elem.classList.add('selected')
})

const increaseButton = document.querySelector('#pop-increase')
increaseButton.addEventListener('click', event => {
    const selectedCountry = euTableBody.querySelector('.selected')
    euCountries.find(country => country.id == selectedCountry.dataset.id).populationM += 0.1
    refreshTable()
})*/

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

/*const increaseButton = document.querySelector('#pop-increase')
increaseButton.addEventListener('click', event => {
    euCountries.find(country => country.id == selectedID).populationM += 0.1
    refreshTable()
    selectedElement = euTableBody.querySelector(`#country-${selectedID}`)
    selectedElement.classList.add('selected')
})

const decreaseButton = document.querySelector('#pop-decrease')
decreaseButton.addEventListener('click', event => {
    euCountries.find(country => country.id == selectedID).populationM -= 0.1
    refreshTable()
    selectedElement = euTableBody.querySelector(`#country-${selectedID}`)
    selectedElement.classList.add('selected')
})*/