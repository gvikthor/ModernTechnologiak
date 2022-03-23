const gamearea = document.querySelector('#gamearea')
const gamedata = {
    isGameRunning: false,
    //isNotRunning: true
    gameTableSize: {
        width: 0,
        height: 0
    },
    shipPosition: 0,
    asteroids: [
        {
            time: 0,
            windex: 0,
            hindex: 2
        }
    ],
    time: 0,
    gameStepper: null
}

//min még benne van, max már nincs
//random(0,15): 0,6,9,4,2,14,13,6,5,9,14 (de 15 sose lesz benne)
function randomInt(min, max){
    return min + Math.floor(Math.random()*(max-min))
}

// modell
function newGame(w, h){
    generateTable(w, h)
    gamedata.gameTableSize.width = w
    gamedata.gameTableSize.height = h

    placeSpaceship(Math.floor(w/2))
    gamedata.asteroids = []
    generateAsteroids()

    gamedata.isGameRunning = true
    //gamedata.isNotRunning = false

    gamedata.time = 0

    gamedata.gameStepper = setInterval(moveAsteroids, 500)
}

function generateAsteroids(){
    for(let i = 0; i < 10; i++){
        gamedata.asteroids.push({
            time: i * 2,
            windex: randomInt(0, gamedata.gameTableSize.width),
            hindex: gamedata.gameTableSize.height
        })
    }
}

function placeSpaceship(index){
    drawSpaceship(gamedata.shipPosition, index)
    gamedata.shipPosition = index
}

function moveAsteroids(){
    for(const asteroid of gamedata.asteroids){
        let isAsteroidInGame = asteroid.time <= gamedata.time && asteroid.hindex >= 0
        let isAsteroidEntering = asteroid.time == gamedata.time
        let isAsteroidLeaving = asteroid.hindex == 0
        if(isAsteroidInGame){
            if(!isAsteroidEntering) deleteAsteroid(asteroid.windex, asteroid.hindex)
            asteroid.hindex--
            if(!isAsteroidLeaving) drawAsteroid(asteroid.windex, asteroid.hindex)

            isAsteroidLeaving = asteroid.hindex == 0
            if(isAsteroidLeaving && asteroid.windex == gamedata.shipPosition){
                gamedata.isGameRunning = false
                clearInterval(gamedata.gameStepper)
                alert('Vesztettél :(')
            }
        }
    }

    gamedata.time++
}

function moveSpaceship(left){
    let isAtLeftEdge  = gamedata.shipPosition == 0
    let isAtRightEdge = gamedata.shipPosition == gamedata.gameTableSize.width - 1

    if(left && !isAtLeftEdge){
        placeSpaceship(gamedata.shipPosition-1)
    }else if(!left &&  !isAtRightEdge){
        placeSpaceship(gamedata.shipPosition+1)
    }
}

// események
document.addEventListener('keydown', event => {
    if(!gamedata.isGameRunning) return
    //if(gamedata.isNotRunning) return

    /*if(event.key == 'ArrowLeft'){
        moveSpaceship(true)
    }else if(event.key == 'ArrowRight'){
        moveSpaceship(false)
    }*/

    switch(event.key){
        case 'ArrowLeft':
            moveSpaceship(true)
            break
        case 'ArrowRight':
            moveSpaceship(false)
            break
        default:

    }
})

// view/nézet
function emptyGamearea(){
    gamearea.innerHTML = ''
}

function generateTable(w, h){
    const table = document.createElement('table')
    for(let hi = 0; hi < h; hi++){
        const tr = document.createElement('tr')
        for(let wi = 0; wi < w; wi++){
            const td = document.createElement('td')
            td.classList.add(`row${hi}`)
            td.classList.add(`col${wi}`)
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

function deleteAsteroid(windex, hindex){
    gamearea.querySelector(`.row${hindex}.col${windex}`).innerText = ''
}

function drawAsteroid(windex, hindex){
    gamearea.querySelector(`.row${hindex}.col${windex}`).innerText = 'O'
}