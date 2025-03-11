/*
const buttonNewCat = document.querySelector('#btn-new-cat')
const catPic = document.querySelector('#cat-pic')

const target = 'https://api.thecatapi.com/v1/images/search'
//https://api.thecatapi.com/v1/images/search?limit=10

function handleResponse(response) {
    return response.json()
}

// [ { url: 'valami.com/...' } ]
function drawCat(catArray) {
    //document.body.innerHTML = `<img src=${catArray[0].url}>`
    catPic.src = catArray[0].url
}

buttonNewCat.addEventListener('click', event => {
    fetch(target)
    .then(handleResponse)
    .then(drawCat)
})
*/

function eventhandle(elem, when, what) {
    elem.addEventListener(when, what)
}

function fetchke(celnev, fuggveny, json = true) {
    if (json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}

const buttonNewCat = document.querySelector('#btn-new-cat')
const catPicsDiv   = document.querySelector('#cat-pics')

const target = 'https://api.thecatapi.com/v1/images/search?limit=10'

function drawCats(){
    fetchke(target, cats => {
        catPicsDiv.innerHTML = ''
        for(const cat of cats) {
            catPicsDiv.innerHTML += `<img src=${cat.url}><br>`
        }
    })
}

eventhandle(buttonNewCat, 'click', drawCats)







/*eventhandle(buttonNewCat, 'click', event => {
    fetch(target)
    .then(response => response.json())
    .then(cats => {
        catPicsDiv.innerHTML = ''
        
        //for(let i = 0; i < 10; i++){
        //    '.......' cats[i].url
        //}
        for(const cat of cats) {
            catPicsDiv.innerHTML += `<img src=${cat.url}><br>`
        }
    })
})*/