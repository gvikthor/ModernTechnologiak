const euCountries = [
    { name: 'Ausztria', capital: 'Bécs', language: 'német', populationM: 8.9, sizeKM2: 83871 },
    { name: 'Franciaország', capital: 'Párizs', language: 'francia', populationM: 68, sizeKM2: 643800 },
    { name: 'Magyarország', capital: 'Budapest', language: 'magyar', populationM: 9.7, sizeKM2: 93000 },
    { name: 'Olaszország', capital: 'Róma', language: 'olasz', populationM: 59, sizeKM2: 302000 },
    { name: 'Németország', capital: 'Berlin', language: 'német', populationM: 83.2, sizeKM2: 357600 }
]

const euTableBody = document.querySelector('#eu-table tbody')
const searchNameInput = document.querySelector('#search-name')
const searchLangInput = document.querySelector('#search-language')
const andRadio = document.querySelector('#and-button')
const orRadio  = document.querySelector('#or-button')
const searchButton = document.querySelector('#search-btn')
//const searchForm = document.querySelector('#search-form')

function refreshTable(/*filterName ez ha űrlapozol*/){
    euTableBody.innerHTML = ''

    const filterName = searchNameInput.value // ezt pedig kommenteld ki ha űrlapozol
    const filterLanguage = searchLangInput.value
    const cssClasses = [
        { limit: 10, class: 'small-country' },
        { limit: 70, class: 'medium-country' },
        { limit: Infinity, class: 'large-country' }
    ]

    let filteredCoutnries = euCountries
        .filter(country => {
            let returnValue = true
            if(andRadio.checked){
                returnValue = (filterName == '' || country.name.includes(filterName)) && (filterLanguage == '' || country.language.includes(filterLanguage))
            }else if(orRadio.checked){
                returnValue = (filterName == '' || country.name.includes(filterName)) || (filterLanguage == '' || country.language.includes(filterLanguage))
            }

            return returnValue
        })
    
    //.filter(country => filterName == '' || country.name.includes(filterName))
    //.filter(country => filterLanguage == '' || country.language.includes(filterLanguage))
    
    
    filteredCoutnries
    .forEach(country => {
        let cssClass = cssClasses.find(classObj => classObj.limit > country.populationM).class

        euTableBody.innerHTML += `<tr class="${cssClass}">
                <td>${country.name}</td>
                <td>${country.capital}</td>
                <td>${country.language}</td>
            </tr>`
    })
}

searchButton.addEventListener('click', refreshTable)
searchNameInput.addEventListener('input', refreshTable)
searchLangInput.addEventListener('input', refreshTable)

/*searchForm.addEventListener('submit', event => {
    event.preventDefault()
    refreshTable(searchForm.name.value)
})*/

refreshTable()

/*
Szorgalmi:
töröljük a jelenlegi keresést, és helyette egy input mező, amibe a felhasználó megad egy számot,
és radio buttonnel kiválasztja, hogy ennél kevesebb vagy ennél több lakosú országot keres.

thor@inf.elte.hu
*/

console.log(
    parseInt('10'),
    parseFloat('10.5'),
    parseInt('alma')
)