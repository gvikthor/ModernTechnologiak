function $(parent = document.body, child = 'div', fillerFunction = null){
    const newElem = document.createElement(child)
    fillerFunction(newElem)
    parent.appendChild(newElem)
    return newElem
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

const pieces = {
    small: {
        icon: ['🐱', '🦝'], // nullás játékosnak a kis bábuja cica, az egyes játékosnak a kis bábuja mosómedve
        isValidStep: function(startRow, startCol, targetRow, targetCol, forwardIndex){
            return startCol == targetCol && startRow + 1*forwardIndex == targetRow
        }
    }
}

const gameModel = {
    /*tiles: [
        [{},{},{}],
        [{},{},{}],
        [{},{},{}]
    ]*/
    tiles: [
        [{player: 0, piece: 'small'},{player: 0, piece: 'small'},{player: null, piece: null}],
        [{player: null, piece: null},{player: null, piece: null},{player: 0, piece: 'small'}],
        [{player: 1, piece: 'small'},{player: 1, piece: 'small'},{player: 1, piece: 'small'}]
    ],
    size: 3,
    isInBounds: function(targetRow, targetCol){
        return targetRow >= 0 && targetCol >= 0 && targetRow < this.size && targetCol < this.size
    },
    isTileTaken: function(targetRow, targetCol){
        return {
            taken: this.tiles[targetRow, targetCol].piece !== null,
            player: tiles[targetRow, targetCol].player
        }
    },
    getPiece: function(rowindex, colindex){
        return this.tiles[rowindex][colindex].piece
    }
}

const gameView = {
    gameArea: document.querySelector('#game-area'),
    draw: function (tiles) {
        this.gameArea.innerHTML = ''
        tiles.forEach((modelrow, rowindex) => $(this.gameArea, 'tr', tr => {
            modelrow.forEach((modelcell, colindex) => $(tr, 'td', td => {
                td.innerText = ''
                td.dataset.rowindex = rowindex
                td.dataset.colindex = colindex
                if(modelcell.piece){
                                    // úgy csinálok, mintha a pieces egy tömb lenne, hogy dinamikusan beleindexelhessek (cell.piece)
                    td.innerText = pieces[modelcell.piece].icon[modelcell.player]
                }
            }))
        }))
    }
}

gameView.draw(gameModel.tiles)
delegate(gameView.gameArea, 'td', 'click', (event, elem) => {
    const rowindex = elem.dataset.rowindex
    const colindex = elem.dataset.colindex
    gameModel.isInBounds(rowindex, colindex)
    !gameModel.isTileTaken(rowindex+1, colindex).taken
})