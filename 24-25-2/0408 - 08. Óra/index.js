/**
 * Egy HTML elem adott css selectorra matchelő gyerekeire figyel eseményeket.
 * @param {HTMLElement} parent Szülő HTML elem
 * @param {String} child Gyerekek CSS selectora
 * @param {String} when Esemény neve
 * @param {Function} what Függvény, hogy mi történjen, két paraméterrel (event, gyerekElem)
 */
function delegate(parent, child, when, what) {
    function eventHandlerFunction(event) {
        let eventTarget = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if (eventHandler.contains(closestChild)) {
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}

// funciton esemenykezelo(zöld, kék, rózsaszín)
function eventhandle(elem, when, what) {
    elem.addEventListener(when, what)
}

///////////////////////////////////////////////////////////////////////////////////

// HTML Elemek
const gameArea = document.querySelector('#game-area')
const newGameButton = document.querySelector('#new-game')
const nextLightSpan = document.querySelector('#next-light')
const nextDarkSpan = document.querySelector('#next-dark')

// Játék modell
const startPosDark = [
    { rowIndex: 0, colIndex: 3 }, { rowIndex: 0, colIndex: 4 }, { rowIndex: 0, colIndex: 5 }, { rowIndex: 0, colIndex: 6 }, { rowIndex: 0, colIndex: 7 },
    { rowIndex: 1, colIndex: 5 },
    { rowIndex: 3, colIndex: 0 }, { rowIndex: 3, colIndex: 10 },
    { rowIndex: 4, colIndex: 0 }, { rowIndex: 4, colIndex: 10 },
    { rowIndex: 5, colIndex: 0 }, { rowIndex: 5, colIndex: 1 }, { rowIndex: 5, colIndex: 9 }, { rowIndex: 5, colIndex: 10 },
    { rowIndex: 6, colIndex: 0 }, { rowIndex: 6, colIndex: 10 },
    { rowIndex: 7, colIndex: 0 }, { rowIndex: 7, colIndex: 10 },
    { rowIndex: 9, colIndex: 5 },
    { rowIndex: 10, colIndex: 3 }, { rowIndex: 10, colIndex: 4 }, { rowIndex: 10, colIndex: 5 }, { rowIndex: 10, colIndex: 6 }, { rowIndex: 10, colIndex: 7 }
];

const startPosLight = [
    { rowIndex: 3, colIndex: 5 },
    { rowIndex: 4, colIndex: 4 }, { rowIndex: 4, colIndex: 5 }, { rowIndex: 4, colIndex: 6 },
    { rowIndex: 5, colIndex: 3 }, { rowIndex: 5, colIndex: 4 }, { rowIndex: 5, colIndex: 6 }, { rowIndex: 5, colIndex: 7 },
    { rowIndex: 6, colIndex: 4 }, { rowIndex: 6, colIndex: 5 }, { rowIndex: 6, colIndex: 6 },
    { rowIndex: 7, colIndex: 5 }
];

const startPosKing = [
    { rowIndex: 5, colIndex: 5 }
];

const gameModel = {
    currentPlayer: 0,
    selectedCell: null,
    table: [],
    gameRunning: false,
}

function isSelectedCell(colIndex, rowIndex){
    return colIndex == gameModel.selectedCell?.colIndex && rowIndex == gameModel.selectedCell?.rowIndex
}
function isOnAxisOfSelectedCell(colIndex, rowIndex){
    return colIndex == gameModel.selectedCell?.colIndex || rowIndex == gameModel.selectedCell?.rowIndex
}

function isPathClear(targetColIndex, targetRowIndex){
    const startColIndex = gameModel.selectedCell?.colIndex
    const startRowIndex = gameModel.selectedCell?.rowIndex

    // vízszintesen mozog
    if (targetRowIndex == startRowIndex) {
        const direction = (targetColIndex > startColIndex) ? 1 : -1

        /* ugyanaz, mint a fenti ternary operátoros ( ? : ) megoldás
        let direction = 1
        if(colIndex < gameModel.selectedCell?.colIndex){
            direction = -1
        }
        */

        let currentColIndex = startColIndex
        do {
            currentColIndex += direction
            if(gameModel.table[targetRowIndex][currentColIndex].piece){ // if(null) hamis, if(valami_ami_nem_null) igaz
                return false
            }
        } while (currentColIndex != targetColIndex) // a do-while azért veszélyes, mert az utolsó lépésben még lefut egyszer a while-al ellentétben; illetve mindenképp lefut minimum egyszer
        return true
    }

    // függőlegesen mozog (ide egy else elég, de így látványosabb / érthetőbb kód oldalról a "miért")
    if (targetColIndex == startColIndex) {
        const direction = (targetRowIndex > startRowIndex) ? 1 : -1
        let currentRowIndex = startRowIndex
        do {
            currentRowIndex += direction
            if(gameModel.table[currentRowIndex][targetColIndex].piece){
                return false
            }
        } while (currentRowIndex != targetRowIndex)
        return true

    }
}

function initializeModel(size) {
    gameModel.currentPlayer = 0
    gameModel.selectedCell = null
    gameModel.table = []
    gameModel.gameRunning = true

    // üres tábla
    for (let rowIndex = 0; rowIndex < size; rowIndex++) { // kreatív megoldás lehet minden irányba növelni a modellt, mert akkor ütéseknél nem kell szélső esetet kezelni. ilyenkor -1..11 mennek a számok, nem 0..10
        gameModel.table.push([])
        // gameModel.table[rowIndex] = []
        for (let colIndex = 0; colIndex < size; colIndex++) {
            gameModel.table[rowIndex].push({ player: -1, piece: null })
            // gameModel.table[rowIndex][colIndex] = -1
        }
    }

    // lezdő bábuk felrakása (sötét, világos, király)
    for (let position of startPosDark) {
        gameModel.table[position.rowIndex][position.colIndex] = { player: 1, piece: 'soldier' }
    }
    for (let position of startPosLight) {
        gameModel.table[position.rowIndex][position.colIndex] = { player: 0, piece: 'soldier' }
    }
    for (let position of startPosKing) {
        gameModel.table[position.rowIndex][position.colIndex] = { player: 0, piece: 'king' }
    }
}

// Játék nézet (megjelenítés)
function updateView() {
    generateGameTable()
    generateCurrentPlayer()
}


function generateCurrentPlayer() {
    if(gameModel.currentPlayer == 0) {
        nextLightSpan.classList.remove('hidden')
        nextDarkSpan.classList.add('hidden')
    } else {
        nextDarkSpan.classList.remove('hidden')
        nextLightSpan.classList.add('hidden')
    }

    /*
    Hogyan lehetne általánosabban?

    <span id="next-player-0" class="next-player">🦁</span>
    <span id="next-player-1" class="next-player">🚗</span>
    <span id="next-player-2" class="next-player">🌈</span>

    const nextPlayerDivs = document.querySelectorAll('.next-player')
    for(const nextPlayerDiv of nextPlayerDivs) {
        nextPlayerDiv.classList.add('hidden')
    }
    document.querySelector(`#next-player-${szám}`)

    Még szebben?
    <span data-player="0" class="next-player">🦁</span>
    <span data-player="1" class="next-player">🚗</span>
    <span data-player="2" class="next-player">🌈</span>

    const nextPlayerDivs = document.querySelectorAll('.next-player')
    for(const nextPlayerDiv of nextPlayerDivs) {
        if(nextPlayerDiv.dataset.player == szám){
            nextPlayerDiv.classList.remove('hidden')
        } else {
            nextPlayerDiv.classList.add('hidden')
        }
    }
    */
}

function generateGameTable() {
    gameArea.innerHTML = ''

    for (let rowIndex = 0; rowIndex < gameModel.table.length; rowIndex++) {
        const newRow = document.createElement('tr')
        for (let colIndex = 0; colIndex < gameModel.table[rowIndex].length; colIndex++) {
            const newTD = document.createElement('td')

            newTD.dataset.colIndex = colIndex
            newTD.dataset.rowIndex = rowIndex

            if (isSelectedCell(colIndex, rowIndex)) {
                newTD.classList.add('selected')
            }

            const currentCell = gameModel.table[rowIndex][colIndex]
            // Rajzoljuk ki az ikont, ami ide való
            if (currentCell.player == 0) {
                if (currentCell.piece == 'king') {
                    newTD.innerText = '🦁'
                } else {
                    newTD.innerText = '🐻‍❄️'
                }
            }
            if (currentCell.player == 1) {
                newTD.innerText = '🐻'
            }

            newRow.appendChild(newTD)
        }
        gameArea.appendChild(newRow)
    }
}

function startGame() {
    initializeModel(11)
    updateView()
}

function switchCurrentPlayer() {
    /*
    if(gameModel.currentPlayer == 0) {
        gameModel.currentPlayer = 1
    } else {
        gameModel.currentPlayer = 0
    }
    */

    /* maradékos osztás, avagy modulo
    0 1 2 3 4 5 6 7 8
                      I

    0 mod 9 = 0
    1 mod 9 = 1
    2 mod 9 = 2
    ...
    8 mod 9 = 8
    9 mod 9 = 0

    currentDolog = (currentDolog + 1) % dolgokSzáma
    */

    gameModel.currentPlayer = (gameModel.currentPlayer + 1) % 2 // kettővel osztjuk maradékosan, mert két játékos van
}

function moveTo(targetRow, targetCol) {
    if(!isOnAxisOfSelectedCell(targetCol, targetRow)) return
    if(!isPathClear(targetCol, targetRow)) return


    const originalRow = gameModel.selectedCell.rowIndex
    const originalCol = gameModel.selectedCell.colIndex

    gameModel.table[targetRow][targetCol].player = gameModel.table[originalRow][originalCol].player
    gameModel.table[targetRow][targetCol].piece = gameModel.table[originalRow][originalCol].piece

    gameModel.table[originalRow][originalCol].player = -1
    gameModel.table[originalRow][originalCol].piece = null

    gameModel.selectedCell = null
    
    checkTake(targetRow, targetCol)

    if(checkIfLightWon()){
        // alert('Világos nyert 🦁🐻‍❄️')

        // Ezzel a 0 miliszekundumos timeouttal el tudjuk azt érni, hogy előbb még rajzoljon egyet és csak utána írja ki az alertet
        setTimeout(_ => {
            alert('Világos nyert 🦁🐻‍❄️')
        }, 0)
        
        gameModel.gameRunning = false
    }
    if(checkIfDarkWon()){
        setTimeout(_ => {
            alert('Sötét nyert 🐻')
        }, 0)
        
        gameModel.gameRunning = false
    }
    switchCurrentPlayer() // a programban feltételezzük (pl. checkTake), hogy ez a függvény a moveTo LEGUTOLSÓ lépése
}

function removePiece(row, col) {
    gameModel.table[row][col].player = -1
    gameModel.table[row][col].piece = null
}

/*
function checkTakeDirection(targetRow, targetCol, rowDirection, colDirection) {
    if(
        gameModel.table[targetRow + 1*rowDirection][targetCol + 1*colDirection].player == otherPlayer &&
        gameModel.table[targetRow + 2*rowDirection][targetCol + 2*colDirection].player == gameModel.currentPlayer
    ) {
        if(gameModel.table[targetRow][targetCol + 1*colDirection].piece == 'king') {
            if(
                gameModel.table[targetRow - 1 + 1*rowDirection][targetCol + 1*colDirection].player == gameModel.currentPlayer &&
                gameModel.table[targetRow + 1 + 1*rowDirection][targetCol + 1*colDirection].player == gameModel.currentPlayer
            ) {
                removePiece(targetRow + 1*rowDirection, targetCol + 1*colDirection)
            }
        } else {
            removePiece(targetRow + 1*rowDirection, targetCol + 1*colDirection)
        }
    }
}
*/

function checkTake(targetRow, targetCol) {
    const otherPlayer = (gameModel.currentPlayer + 1) % 2
    // balra
    if(
        targetCol >= 2 &&
        gameModel.table[targetRow][targetCol - 1].player == otherPlayer &&
        gameModel.table[targetRow][targetCol - 2].player == gameModel.currentPlayer
    ) {
        if(gameModel.table[targetRow][targetCol - 1].piece == 'king') {
            if(
                gameModel.table[targetRow - 1][targetCol - 1].player == gameModel.currentPlayer &&
                gameModel.table[targetRow + 1][targetCol - 1].player == gameModel.currentPlayer
            ) {
                removePiece(targetRow, targetCol - 1)
            }
        } else {
            removePiece(targetRow, targetCol - 1)
        }
    }

    // fel --> figyeljünk rá, hogy a web lefele növekszik indexben, nem felfele
    if(
        targetRow >= 2 &&
        gameModel.table[targetRow - 1][targetCol].player == otherPlayer &&
        gameModel.table[targetRow - 2][targetCol].player == gameModel.currentPlayer
    ) {
        
        if(gameModel.table[targetRow - 1][targetCol].piece == 'king') {
            if(
                gameModel.table[targetRow - 1][targetCol - 1].player == gameModel.currentPlayer &&
                gameModel.table[targetRow - 1][targetCol + 1].player == gameModel.currentPlayer
            ) {
                removePiece(targetRow - 1, targetCol)
            }
        } else {
            removePiece(targetRow - 1, targetCol)
        }
    }

    // jobbra
    if(
        targetCol <= 8 &&
        gameModel.table[targetRow][targetCol + 1].player == otherPlayer &&
        gameModel.table[targetRow][targetCol + 2].player == gameModel.currentPlayer
    ) {
        
        if(gameModel.table[targetRow][targetCol + 1].piece == 'king') {
            if(
                gameModel.table[targetRow - 1][targetCol + 1].player == gameModel.currentPlayer &&
                gameModel.table[targetRow + 1][targetCol + 1].player == gameModel.currentPlayer
            ) {
                removePiece(targetRow, targetCol + 1)
            }
        } else {
            removePiece(targetRow, targetCol + 1)
        }
    }

    // le
    if(
        targetRow <= 8 &&
        gameModel.table[targetRow + 1][targetCol].player == otherPlayer &&
        gameModel.table[targetRow + 2][targetCol].player == gameModel.currentPlayer
    ) {
        
        if(gameModel.table[targetRow + 1][targetCol].piece == 'king') {
            if(
                gameModel.table[targetRow + 1][targetCol - 1].player == gameModel.currentPlayer &&
                gameModel.table[targetRow + 1][targetCol + 1].player == gameModel.currentPlayer
            ) {
                removePiece(targetRow + 1, targetCol)
            }
        } else {
            removePiece(targetRow + 1, targetCol)
        }
    }
}

function checkIfLightWon() {
    // Most kézzel beírjuk, hogy "11", merthogy azt mondtuk, 11 méretű a tábla, de ugye ez nem dinamikus, ha később változtatni szeretnénk

    return (
        gameModel.table[0][0].piece == 'king' ||
        gameModel.table[0][10].piece == 'king' ||
        gameModel.table[10][10].piece == 'king' ||
        gameModel.table[10][0].piece == 'king'
    )
}

function checkIfDarkWon() {
    for(const row of gameModel.table){
        for(const col of row){
            if(col.piece == 'king'){
                return false
            }
        }
    }
    return true
}

function gameClick(event, td) {
    if(!gameModel.gameRunning) return

    const rowIndex = parseInt(td.dataset.rowIndex)
    const colIndex = parseInt(td.dataset.colIndex)

    if (gameModel.selectedCell) {
        if(isSelectedCell(colIndex, rowIndex)) {
            gameModel.selectedCell = null
        } else {
            moveTo(rowIndex, colIndex)
        }
    } else {
        if (gameModel.currentPlayer == gameModel.table[rowIndex][colIndex].player) {
            gameModel.selectedCell = {
                rowIndex: rowIndex,
                colIndex: colIndex
            }
        }
    }

    updateView()
}



// Eseménykezelők

eventhandle(newGameButton, 'click', startGame)
delegate(gameArea, 'td', 'click', gameClick)
