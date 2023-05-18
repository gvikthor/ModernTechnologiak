const GAME_AREA = document.querySelector('#game-area')
const MENU = document.querySelector('#menu')
const NEW_GAME_BTN = MENU.querySelector('button')
const NEW_GAME_SIZE = MENU.querySelector('input')
const MESSAGE_DIV = document.querySelector('#message')

let GAME_AREA_SIZE = 8 // ha a size 8, akkor az első sor 0, az utolsó sor 7
let GAME_MODEL = {
    currentPlayer: 1,
    isRunning: false,
    time: 0,
    timer: null,
    board: []
}
/*
[{player: 0, piece: ''},{},{}],
[{},{},{}],
[{},{},{}],
*/
let PREVIOUS_CLICK = {
    row: -1,
    col: -1
}

function viewWriteTime(){
    GAME_MODEL.time++
    MESSAGE_DIV.innerText = `Eltelt idő: ${GAME_MODEL.time} másodperc.`
}
function modelGenerateGameArea(size){
    PREVIOUS_CLICK = {
        row: -1,
        col: -1
    }
    GAME_AREA_SIZE = size
    GAME_MODEL.board = []
    GAME_MODEL.currentPlayer = 1
    GAME_MODEL.isRunning = true
    GAME_MODEL.time = 0
    GAME_MODEL.timer = setInterval(viewWriteTime, 1000)
    for(let row = 0; row < size; row++){
        let newRow = []
        for(let col = 0; col < size; col++){
            let newElement = {
                player: 0,
                piece: ''
            }
            if(row == 0){
                newElement = {
                    player: 1,
                    piece: 'horsey'
                }
            }else if(row == 1){
                newElement = {
                    player: 1,
                    piece: 'pawn'
                }
            }else if(row == size - 2){
                newElement = {
                    player: 2,
                    piece: 'pawn'
                }
            }else if(row == size - 1){
                newElement = {
                    player: 2,
                    piece: 'horsey'
                }
            }
            newRow.push(newElement)
        }
        GAME_MODEL.board.push(newRow)
    }
}

function viewGenerateGameArea(size){
    GAME_AREA.innerHTML = ''
    MESSAGE_DIV.innerText = 'Eltelt idő: 0 másodperc.'

    for(let row = 0; row < size; row++){
        const newRow = document.createElement('tr')
        for(let col = 0; col < size; col++){
            const newCol = document.createElement('td')
            newCol.id = `c-${row}-${col}`

            newCol.classList.add(`row-${row}`)
            newCol.classList.add(`col-${col}`)

            newCol.dataset.row = row
            newCol.dataset.col = col
            newRow.appendChild(newCol)
        }
        GAME_AREA.appendChild(newRow)
    }

    /*
    GAME_AREA.querySelector('#c-5-4')
    <td id="c-5-4" class="row-5 col-4" data-row="5" data-col="4">

    GAME_AREA.querySelector('.row-5.col-4')
    <td id="c-5-4" class="row-5 col-4" data-row="5" data-col="4">

    GAME_AREA.querySelector('td[data-row="5"][data-col="4"]')
    <td id="c-5-4" class="row-5 col-4" data-row="5" data-col="4">
    */
}
function pieceToEmoji(piece){
    if(piece.player == 1){
        if(piece.piece == 'pawn'){
            return '🦊'
        }else{
            return '🦄'
        }
    }else if(piece.player == 2){
        if(piece.piece == 'pawn'){
            return '🦝'
        }else{
            return '🐴'
        }
    }else{
        return ''
    }
}
function getSquare(row, col){
    return GAME_AREA.querySelector(`.row-${row}.col-${col}`)
}
function render(){
    for(let row = 0; row < GAME_AREA_SIZE; row++){
        for(let col = 0; col < GAME_AREA_SIZE; col++){
            getSquare(row, col).innerText = pieceToEmoji(GAME_MODEL.board[row][col])
        }
    }
}
function newGame(size){
    modelGenerateGameArea(size)
    viewGenerateGameArea(size)
    render()
}
function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if(eventHandler.contains(closestChild)){
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}
function getOtherPlayer(){
    if(GAME_MODEL.currentPlayer == 1){
        return 2
    }else{
        return 1
    }
}
function stepPiece(row, col, newRow, newCol){
    const pieceToMove = GAME_MODEL.board[row][col]
    const targetCell = GAME_MODEL.board[newRow][newCol]
    // Csak a saját bábunkat mozgathatjuk
    if(pieceToMove.player != GAME_MODEL.currentPlayer) return false

    // Ha az egyes játékos jön, akkor pozitív a row irány, ha a kettes, akkor negatív
    let forwardRowIndex = GAME_MODEL.currentPlayer == 1 ? 1 : -1
    if(pieceToMove.piece == 'pawn'){
        //if(row + forwardRowIndex != newRow || col != newCol) return false

        // a) előrefele szeretne lépni
        if(row + forwardRowIndex == newRow && col == newCol){
            if(targetCell.player != 0) return false
        
        // b) átlósan szeretne lépni
        }else if(row + forwardRowIndex == newRow && (col == newCol+1 || col == newCol-1)){
            if(targetCell.player != getOtherPlayer()) return false

        // c) bármi más
        }else{
            return false
        }

    }else if(pieceToMove.piece == 'horsey'){
        // a) vízszintesen 2
        if(
            (row + 1 == newRow || row - 1 == newRow) &&
            (col + 2 == newCol || col - 2 == newCol)
        ){
            if(targetCell.player == GAME_MODEL.currentPlayer) return false
        
        // b) függőlegesen 2
        }else if(
            (row + 2 == newRow || row - 2 == newRow) &&
            (col + 1 == newCol || col - 1 == newCol)
        ){
            if(targetCell.player == GAME_MODEL.currentPlayer) return false
        
        // c) bármi más
        }else{
            return false
        }      
    }else{
        return false
    }

    GAME_MODEL.board[row][col] = {
        player: 0,
        piece: ''
    }
    GAME_MODEL.board[newRow][newCol] = pieceToMove

    return true
}
function countPawns(){
    let amount = 0
    for(let row = 0; row < GAME_AREA_SIZE; row++){
        for(let col = 0; col < GAME_AREA_SIZE; col++){
            if(GAME_MODEL.board[row][col].piece == 'pawn') amount++
        }
    }
    return amount
}
function checkWin(){
    if(countPawns() == 0) return 0
    for(let col = 0; col < GAME_AREA_SIZE; col++){
        if(GAME_MODEL.board[0][col].player == 2) return 2
        if(GAME_MODEL.board[GAME_AREA_SIZE-1][col].player == 1) return 1
    }
    return -1
}

delegate(GAME_AREA, 'td', 'click', (event, elem) => {
    if(!GAME_MODEL.isRunning) return

    let NEW_CLICK = {
        row: parseInt(elem.dataset.row),
        col: parseInt(elem.dataset.col),
    }
    if(PREVIOUS_CLICK.row == -1){
        PREVIOUS_CLICK.row = NEW_CLICK.row
        PREVIOUS_CLICK.col = NEW_CLICK.col
        elem.classList.add('selected')
    }else{
        if(stepPiece(
            PREVIOUS_CLICK.row, PREVIOUS_CLICK.col,
            NEW_CLICK.row, NEW_CLICK.col
        )){
            render()
            //GAME_MODEL.currentPlayer = ((GAME_MODEL.currentPlayer + 1) % 2) + 1
            GAME_MODEL.currentPlayer = getOtherPlayer()
        }

        PREVIOUS_CLICK.row = -1
        PREVIOUS_CLICK.col = -1
        GAME_AREA.querySelector('.selected').classList.remove('selected')
    }
    let won = checkWin()
    if(won > 0){
        clearInterval(GAME_MODEL.timer)
        MESSAGE_DIV.innerText = `Gartuálunk! ${won}. játékos nyert ${GAME_MODEL.time} másodperc alatt!`
        GAME_MODEL.isRunning = false
    }else if(won == 0){
        clearInterval(GAME_MODEL.timer)
        MESSAGE_DIV.innerText = `Gartuálunk! Mindneki meghalt nyert ${GAME_MODEL.time} másodperc alatt!`
        GAME_MODEL.isRunning = false
    }
})  

NEW_GAME_BTN.addEventListener('click', event => {
    newGame(parseInt(NEW_GAME_SIZE.value))
})