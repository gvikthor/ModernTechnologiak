const firstListItem = document.querySelector('li') 
//console.log(firstListItem)

/*
valami1 valami2           valami2 gyereke valami1-nek
<valami1>
    <ul>
        <li>
            <valami2></valami2>
        </li>
    </ul>
</valami1>


valami1 > valami2      valami2 közvetlen gyereke valami1-nek
<valami1>
    <ul>
        <li></li>
    </ul>
    <valami2></valami2>
</valami1>

#valami            valami ID-jű elem
<elem id="valami">

.valami            valami classú/osztályú elem
<elem class="valami">
*/

//const colorsListItem = document.querySelector('#colors li')

const colorsList = document.querySelector('#colors')
const colorsListItem = colorsList.querySelector('li')

// document.querySelectorAll('#colors li')
const colorsItems = colorsList.querySelectorAll('li')
console.log(colorsItems)

for(const item of colorsItems){
    console.log(item)
}

//[...valamiIterálhatóDolog]
// deconstructing operator
console.log([...colorsItems])

//firstListItem.innerText = '<b>Avatar</b>'
firstListItem.innerHTML = '<b>Avatar</b>'

for(const item of colorsItems){
    //item.innerText = item.innerText + ' apple'
    //item.innerText += ' apple'
    item.innerHTML = `<b>${item.innerHTML} apple</b>`
}

// colorsList.innerHTML = colorsList.inneRHTML + '<li>Yellow</li>'
// colorsList.innerHTML += '<li>Yellow</li>'
// console.log(colorsItems)

// 1. lépés: Létrehozunk egy új elemet
// 2. lépés: Tartalommal töltjük fel az új elemet
// 3. lépés: Befűzzük a dokumentumba az új elemet

const newLI = document.createElement('li')
newLI.innerText = 'Purple'
colorsList.appendChild(newLI)

const fruits = ['Apple', 'Orange', 'Peach']
const fruitsList = document.createElement('ul')
    /*const newLI1 = document.createElement('li')
    newLI1.innerText = 'Apple'
    fruitsList.appendChild(newLI1)

    const newLI2 = document.createElement('li')
    newLI2.innerText = 'Orange'
    fruitsList.appendChild(newLI2)

    const newLI3 = document.createElement('li')
    newLI3.innerText = 'Peach'
    fruitsList.appendChild(newLI3)*/
    for(const fruit of fruits){
        const newFruitItem = document.createElement('li')
        newFruitItem.innerText = fruit
        fruitsList.appendChild(newFruitItem)
    }
document.body.appendChild(fruitsList)



const people = [
    {
        name: 'George',
        friends: ['Aaron', 'Peter']
    },
    {
        name: 'Steve',
        friends: ['Joseph', 'Lazlow']
    }
]

/*function generateElement(parent, type, fillWithData){
    const newElement = document.createElement(type)
    fillWithData(newElement)
    parent.appendChild(newElement)
    return newElement
}

generateElement(document.body, 'table', peopleTable => {
    generateElement(peopleTable, 'thead', peopleTableHead => {
        generateElement(peopleTableHead, 'tr', headerRow => {
            generateElement(headerRow, 'th', th => th.innerText = 'Name')
            generateElement(headerRow, 'th', th => th.innerText = 'Friends')
        })
    })
})*/

const peopleTable = document.createElement('table')
    const peopleTableHead = document.createElement('thead')
        const headerRow = document.createElement('tr')
            const nameTH = document.createElement('th')
            nameTH.innerText = 'Name'
            headerRow.appendChild(nameTH)

            const friendsTH = document.createElement('th')
            friendsTH.innerText = 'Friends'
            headerRow.appendChild(friendsTH)
        peopleTableHead.appendChild(headerRow)
    peopleTable.appendChild(peopleTableHead)

    const peopleTableBody = document.createElement('tbody')
    for(const person of people){
        const newTR = document.createElement('tr')
            const nameTD = document.createElement('td')
            nameTD.innerText = person.name
            newTR.appendChild(nameTD)

            const friendsTD = document.createElement('td')
                const friendsUL = document.createElement('ul')
                for(const friend of person.friends){
                    const friendLI = document.createElement('li')
                    friendLI.innerText = friend
                    friendsUL.appendChild(friendLI)
                }
                friendsTD.appendChild(friendsUL)
            newTR.appendChild(friendsTD)
        peopleTableBody.appendChild(newTR)
    }
    peopleTable.appendChild(peopleTableBody)
document.body.appendChild(peopleTable)
