const everything = document.querySelector('body')
const screwdriver = document.querySelector('#csavarhuzo')
const lightbulb = document.querySelector('#muhely #korte')
const listItem = document.querySelector('#kert li')

console.log(everything)
console.log(screwdriver)
console.log(lightbulb)
console.log(listItem)

const listItems = document.querySelectorAll('li')

console.log(listItems)
console.log(listItems[2])

listItems.forEach(li => console.log(li))
//listItems.some(li => true) tömbfüggvények (forEach kivételével) nem működnek NodeList-eken

const gardenTrees = document.querySelector('#kert ul')
const trees1 = gardenTrees.querySelectorAll('li')
const trees2 = document.querySelectorAll('#kert ul li')

console.log(trees1, trees2)
console.log(trees1[0].classList)

////////////////////////////////////////////////////////////////////

console.log(gardenTrees.innerHTML)
//gardenTrees.innerHTML = '<li>Barack</li>'
//gardenTrees.innerHTML = gardenTrees.innerHTML + '<li>Barack</li>'
gardenTrees.innerHTML += '<li class="gyumolcs" id="barack">Barack</li>'
gardenTrees.innerHTML += '<li class="gyumolcs" id="eper">Michael\'s eper</li>'
gardenTrees.innerHTML += `<li class="gyumolcs" id="szolo">Michael's szőlő</li>`

let newTree = 'Narancs'
gardenTrees.innerHTML += `<li class="gyumolcs" id="narancs">${newTree}</li>`

//////////////////////////////////////////////////////////////////////
const toolList = document.querySelector('#muhely ul')
const newTool = document.createElement('li')
newTool.innerHTML = 'Gyorskötöző'
newTool.id = 'gyorskotozo'

newTool.classList.add('szerszam')
newTool.classList.add('gyumolcs')
newTool.classList.remove('gyumolcs')
console.log(newTool.classList.contains('szerszam'))
console.log(newTool.classList.contains('gyumolcs'))
newTool.classList.remove('gyumolcs')
newTool.classList.toggle('szerszam')
newTool.classList.toggle('szerszam')

toolList.appendChild(newTool)

////////////////////////////////////////////////////////////
const officeItems = [
    {
        name: 'Iratmegsemmisítő',
        id: 'iratmegs'
    },
    {
        name: 'Tolltartó',
        id: 'tollak'
    },
    {
        name: 'Doboz',
        id: 'doboz'
    }
]

const newPlace = document.createElement('div')
    newPlace.id = 'office'
    const newDescription = document.createElement('p')
        newDescription.innerHTML = 'Ez egy iroda, ahol emberek dolgoznak.'
        newPlace.appendChild(newDescription)

    const newList = document.createElement('ul')
        for(const item of officeItems){
            const newItem = document.createElement('li')
                newItem.innerHTML = item.name
                newItem.id = item.id
                newItem.classList.add('irodaszer')
                newList.appendChild(newItem)
        }
        newPlace.appendChild(newList)
    document.body.appendChild(newPlace)

// Szorgalmi
/*
const paragrapsh = [
    {
        title: 'Large title 1',
        content: 'Ez az első fejezet.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Large title 2',
        content: 'Ez az második fejezet.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Large title 3',
        content: 'Ez az harmadik fejezet.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

<h1>Large title 1</h1>
<div>Lorem ipsum....</div>

<h1>Large title 2</h1>
<div>Lorem ipsum....</div>

<h1>Large title 3</h1>
<div>Lorem ipsum....</div>
*/

