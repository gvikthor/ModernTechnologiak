/*
function range(n){
    let t = []
    for(let i = 0; i < n; i++){
        t.push(i)
    }
    return t
}
for(const hindex of range(h)){
    
}
*/

// [min,max)    minimum még benne van, maximum már nincs; egész szám
function randomInt(min, max){
    return min+Math.floor(Math.random()*(max-min))
}

const gamearea = document.querySelector('#gamearea')

const gamedata = {
    endOfGame: true,
    spaceshipIndex: 0,
    asteroids: [],
    maxw: 0,
    maxh: 0,
    timeStepper: null,
    points: 0
}

function gameStart(width, height){
    gamedata.endOfGame = false
    gamedata.maxw = width
    gamedata.maxh = height
    gamedata.spaceshipIndex = Math.floor(width/2)
    gamedata.points = 0
    gamedata.asteroids = []
    generateGameTable(width, height)
    drawSpaceship(gamedata.spaceshipIndex)

    gamedata.timeStepper = setInterval(gameStep, 1000)
}

function gameStep(){
    stepAsteroids()
    if(checkDeath()){
        endGame()
    }
}

function endGame(){
    drawBoom(gamedata.spaceshipIndex)
    gamedata.endOfGame = true
    clearInterval(gamedata.timeStepper)
    writeLose(gamedata.points)
}

function checkDeath(){
    return gamedata.asteroids.some(asteroid => asteroid.hindex == 0 && asteroid.windex == gamedata.spaceshipIndex)
}

function moveShipRight(){
    if(gamedata.spaceshipIndex == gamedata.maxw - 1) return

    clearCell(gamedata.spaceshipIndex, 0)
    gamedata.spaceshipIndex++
    drawSpaceship(gamedata.spaceshipIndex)

    if(checkDeath()) endGame()
}

function moveShipLeft(){
    if(gamedata.spaceshipIndex == 0) return

    clearCell(gamedata.spaceshipIndex, 0)
    gamedata.spaceshipIndex--
    drawSpaceship(gamedata.spaceshipIndex)

    if(checkDeath()) endGame()
}

function generateAsteroids(){
    /*
    {
        time: 7,
        windex: 7,
        hindex: gamedata.maxh
    }
    */
}

function stepAsteroids(){
    if(randomInt(0,2) == 1){
        gamedata.asteroids.push({
            windex: randomInt(0, gamedata.maxw),
            hindex: gamedata.maxh
        })
    }

    for(const asteroid of gamedata.asteroids){
        if(asteroid.hindex < gamedata.maxh) clearCell(asteroid.windex, asteroid.hindex)

        asteroid.hindex--

        if(asteroid.hindex > -1) drawAsteroid(asteroid.windex, asteroid.hindex)
        else gamedata.points++
    }
    gamedata.asteroids = gamedata.asteroids.filter(asteroid => asteroid.hindex > -1)
    //gamedata.asteroids.forEach(asteroid => {clearCell(asteroid.windex, asteroid.hindex)})
}

////////////////////////////////////////////
//esemény

document.addEventListener('keydown', event => {
    if(gamedata.endOfGame){
        if(event.key == 'Enter') gameStart(5,10)
    }else{
        if(event.key == 'ArrowRight') moveShipRight()
        if(event.key == 'ArrowLeft') moveShipLeft()
    }
})

////////////////////////////////////////////
//nézet

function getCell(w, h){
    return gamearea.querySelector(`.row${h}.col${w}`)
}

function clearCell(w, h){
    getCell(w, h).innerText = ''
}

function drawSpaceship(w, h = 0){
    getCell(w, h).innerText = '👾'
}

function drawBoom(w, h = 0){
    getCell(w, h).innerText = '💥'
}

function drawAsteroid(w, h){
    getCell(w, h).innerText = '🍪'
}

function generateGameTable(w, h){
    let table = gamearea.querySelector('table')
    if(table == null){
        table = document.createElement('table')
    }else{
        table.innerHTML = ''
    }

    for(let hindex = 0; hindex < h; hindex++){
        const tr = document.createElement('tr')
        for(let windex = 0; windex < w; windex++){
            const td = document.createElement('td')
            td.classList.add(`row${hindex}`)
            td.classList.add(`col${windex}`)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    gamearea.appendChild(table)
}

function writeLose(points){
    infobox.innerText = `Meghaltál, de ${points} pontot szereztél.`
}

////////////////// MAIN //////////////////////
const infobox = document.createElement('div')
infobox.innerText = 'Nyomj entert a játék indításához'
gamearea.appendChild(infobox)
