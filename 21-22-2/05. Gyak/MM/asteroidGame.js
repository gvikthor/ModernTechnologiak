const gamearea = document.querySelector('#gamearea')
const gamedata = {
    table: [],
    shipPosition: 0,
    asteroids: [
        {
            time: 0,
            windex: 0,
            hindex: 3
        }
    ]
}

// modell
function newGame(w, h){
    generateTable(w, h)

    gamedata.table = []
    gamedata.shipPosition = 0
    for(let wi = 0; wi < w; wi++){
        gamedata.table[wi] = []
        for(let hi = 0; hi < h; hi++){
            gamedata.table[wi][hi] = 0
        }
    }
}

function placeSpaceship(index){
    drawSpaceship(gamedata.shipPosition, index)
    gamedata.table[0][gamedata.shipPosition] = 0
    gamedata.table[0][index] = 8
    gamedata.shipPosition = index
}

function timeStep(){
    //gamedata.asteroids[0].hindex
    //gamedata.asteroids[0].windex
    moveAsteroid(gamedata.asteroids[0])
}

function moveAsteroid(asteroid){
    drawAsteroid(asteroid.windex, asteroid.hindex, asteroid.hindex-1)
    asteroid.hindex--
}

function drawAsteroid(w, fromH, toH){
    gamearea.querySelector(`.row${fromH}.col${w}`).innerText = ''
    gamearea.querySelector(`.row${toH}.col${w}`).innerText = 'O'
}

// view/nézet
function emptyGamearea(){
    gamearea.innerHTML = ''
}

function generateTable(w, h){
    const table = document.createElement('table')
    for(let wi = 0; wi < w; wi++){
        const tr = document.createElement('tr')
        for(let hi = 0; hi < h; hi++){
            const td = document.createElement('td')
            td.classList.add(`row${wi}`)
            td.classList.add(`col${hi}`)
            /*
            gamearea.querySelector('.row1.col5')
            gamearea.querySelector(`.row${4}.col${3}`)
            */
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    gamearea.appendChild(table)
}

function drawSpaceship(from, to){
    gamearea.querySelector(`.row${0}.col${from}`).innerText = ''
    gamearea.querySelector(`.row${0}.col${to}`).innerText = 'V'
}

