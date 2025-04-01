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
    table: []
}

function isSelectedCell(colIndex, rowIndex){
    return colIndex == gameModel.selectedCell?.colIndex && rowIndex == gameModel.selectedCell?.rowIndex
}
function isOnAxisOfSelectedCell(colIndex, rowIndex){
    return colIndex == gameModel.selectedCell?.colIndex || rowIndex == gameModel.selectedCell?.rowIndex
}

function initializeModel(size) {
    gameModel.currentPlayer = 0
    gameModel.selectedCell = null
    gameModel.table = []

    // üres tábla
    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
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
    generateGameTable()
}

function moveTo(targetRow, targetCol) {
    if(!isOnAxisOfSelectedCell(targetCol, targetRow)) return

    const originalRow = gameModel.selectedCell.rowIndex
    const originalCol = gameModel.selectedCell.colIndex

    gameModel.table[targetRow][targetCol].player = gameModel.table[originalRow][originalCol].player
    gameModel.table[targetRow][targetCol].piece = gameModel.table[originalRow][originalCol].piece

    gameModel.table[originalRow][originalCol].player = -1
    gameModel.table[originalRow][originalCol].piece = null

    gameModel.selectedCell = null
}

function gameClick(event, td) {
    const rowIndex = td.dataset.rowIndex
    const colIndex = td.dataset.colIndex

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

    generateGameTable()
}



// Eseménykezelők

eventhandle(newGameButton, 'click', startGame)
delegate(gameArea, 'td', 'click', gameClick)























/*
ha nagyon általánosan akarnánk:
    pieces = {
        soldier: ['🐻‍❄️', '🐻'],
        king: []
    }

    cella: {
        player: 0,
        piece: 'soldier'     vagy    'king'
    }

    kirajzolásnál:


    pieces[currentCell.piece][currentCell.player]
*/

/*
function generateGameTable(size) {
    // nullától 11-ig egyesével lépkedünk
    for(let rowIndex = 0; rowIndex < size; rowIndex++) {
        // 1. Létrehozok egy új elemet
        const newRow = document.createElement('tr')

        // 2. Feltöltöm tartalommal
        for(let colIndex = 0; colIndex < size; colIndex++) {
            const newTD = document.createElement('td')

            newRow.appendChild(newTD)
        }

        // 3. Befűzöm az oldalba
        gameArea.appendChild(newRow)
    }
}
*/

/*
function generateGameTableStringesMegoldas(size) {
    let tableString = ''
    for(let rowIndex = 0; rowIndex < size; rowIndex++) {
        tableString += '<tr>'
        for(let colIndex = 0; colIndex < size; colIndex++) {
            tableString += `<td data-col-index=${colIndex}></td>`
        }
        tableString += '</tr>'
    }
    gameArea.innerHTML = tableString
}
*/