const data = [
    ['tiger', 'mouse', 'owl'],
    ['dolphin', 'owl', 'tiger'],
    ['mouse', 'cat', 'dog']
]

// <table id="gamearea"></table>
const gamearea = document.querySelector('#gamearea')

let rowNum = 0
for(const dataRow of data){
    const tr = document.createElement('tr')
    let colNum = 0
    for(const dataCell of dataRow){
        const td = document.createElement('td')
        td.innerText = 'X'
        //td.dataset.animal = dataCell
        td.dataset.row = rowNum
        td.dataset.col = colNum
        tr.appendChild(td)
        colNum++
    }
    gamearea.appendChild(tr)
    rowNum++
}

delegate(gamearea, 'td', 'click', (event, target) => {
    target.innerText = data[target.dataset.row][target.dataset.col]
})