const animals = [
    {
        name: 'Brumm',
        species: 'bear',
        color: 'brown'
    },
    {
        name: 'Temi',
        species: 'squirell',
        color: 'orange'
    },
    {
        name: 'Willi Fog',
        species: 'lion',
        color: 'yellow'
    },
    {
        name: 'Stuart Little',
        species: 'mouse',
        color: 'white'
    }
]

const searchBar = document.querySelector('#search-bar')
const searchButton = document.querySelector('#btn-search')
const searchResults = document.querySelector('#search-results')

function search(){
    searchResults.innerHTML = ''

    const searchTerm = searchBar.value.toLowerCase()
    animals.filter(animal =>
        animal.name.toLowerCase().includes(searchTerm) ||
        animal.species.toLowerCase().includes(searchTerm) ||
        animal.color.toLowerCase().includes(searchTerm)
    ).forEach(animal => searchResults.appendChild(document.createElement('li')).innerHTML = animal.name)
    
    /*
    .forEach(animal => {
        const newListItem = document.createElement('li')
        newListItem.innerHTML = animal.name
        searchResults.appendChild(newListItem)
    })
    */
    
    /*
    for(const animal of animals){
        if(animal.name.includes(searchTerm) || animal.species.includes(searchTerm) || animal.color.includes(searchTerm)){
            const newListItem = document.createElement('li')
                newListItem.innerHTML = animal.name
                searchResults.appendChild(newListItem)
        }
    }
    */
}

searchButton.addEventListener('click', search)
searchBar.addEventListener('input', search)
//searchBar.addEventListener('keyup', search)
//searchBar.addEventListener('keydown', search)

function noNumber(event){
    if('0123456789'.includes(event.key)) event.preventDefault()

    //if(event.key == 1 || event.key == 2) event.preventDefault()
}
//searchBar.addEventListener('input', noNumber)
//searchBar.addEventListener('keyup', noNumber)
searchBar.addEventListener('keydown', noNumber)