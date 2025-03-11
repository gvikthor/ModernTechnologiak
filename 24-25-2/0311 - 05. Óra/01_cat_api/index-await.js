function eventhandle(elem, when, what) {
    elem.addEventListener(when, what)
}

const buttonNewCat = document.querySelector('#btn-new-cat')
const catPicsDiv = document.querySelector('#cat-pics')

const target = 'https://api.thecatapi.com/v1/images/search?limit=10'

async function drawCats() {
    catPicsDiv.innerHTML = ''

    const response = await fetch(target)
    const cats = await response.json()

    for (const cat of cats) {
        catPicsDiv.innerHTML += `<img src=${cat.url}><br>`
    }
}

eventhandle(buttonNewCat, 'click', drawCats)