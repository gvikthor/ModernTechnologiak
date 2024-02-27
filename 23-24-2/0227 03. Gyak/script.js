console.log(document.querySelector('li'))
console.log(document.querySelectorAll('li'))

const countryListItems = document.querySelectorAll('#list1 li')

for(const countryLI of countryListItems){
    //countryLI.innerText = countryLI.innerText + ' (Európa)'
    countryLI.innerText += ' (kontinentális Európa)'
}


const UKs = ['Anglia', 'Wales', 'Skócia', 'Észak-Írország']
const UKlist = document.querySelector('#list2')
for(const country of UKs){
    UKlist.innerHTML += `<li class="uk-country">${country}</li>`
}

/* Python:
person = {
    "name": "István",
    "..."
}

person["name"]
*/

const person = {
    name: 'Nándor',
    age: 24
}

const euCountries = [
    {name: 'Ausztria', capital: 'Bécs', language: 'német', populationM: 8.9, sizeKM2: 83871},
    {name: 'Franciaország', capital: 'Párizs', language: 'francia', populationM: 68, sizeKM2: 643800},
    {name: 'Magyarország', capital: 'Budapest', language: 'magyar', populationM: 9.7, sizeKM2: 93000},
    {name: 'Olaszország', capital: 'Róma', language: 'olasz', populationM: 59, sizeKM2: 302000},
    {name: 'Németország', capital: 'Berlin', language: 'német', populationM: 83.2, sizeKM2: 357600}
]
const euTableBody = document.querySelector('#eu-table tbody')
/*for(const country of euCountries){
    if(country.language == 'német'){
        euTableBody.innerHTML += `<tr>
            <td>${country.name}</td>
            <td>${country.capital}</td>
            <td>${country.language}</td>
        </tr>`
    }
}*/

//euCountries.forEach((country, index, array) => {})

const filterLanguage = ''
const filterName = 'ország'
const cssClasses = [
    {limit: 10, class: 'small-country'},
    {limit: 70, class: 'medium-country'},
    {limit: Infinity, class: 'large-country'}
]

euCountries
    .filter(country => filterLanguage == '' || country.language.includes(filterLanguage))
    .filter(country => filterName == '' || country.name.includes(filterName))
    .forEach(country => {
        /*if(country.populationM < 10){
            cssClass = 'small-country'
        }else if(){

        }*/
        
                               // {limit: 10, class: 'small-country'}               // 'small-country'
        let cssClass = cssClasses.find(classObj => classObj.limit > country.populationM).class

        euTableBody.innerHTML += `<tr class="${cssClass}">
                <td>${country.name}</td>
                <td>${country.capital}</td>
                <td>${country.language}</td>
            </tr>`
    })


// Szorgalmi: plusz oszlop: fő/km^2
// thor@inf.elte.hu   script.txt
