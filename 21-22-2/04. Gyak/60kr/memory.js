const cities = [
    ['Budapest', 'Wien', 'London', 'Berlin'],
    ['Prague', 'Berlin', 'Bratislava', 'Kiev'],
    ['Wien', 'London', 'Paris', 'Budapest'],
    ['Prague', 'Bratislava', 'Kiev', 'Paris']
]

const gamearea = document.querySelector('#gamearea')

let rowNum = 0
for(const row of cities){
    const tr = document.createElement('tr')
    let colNum = 0
    for(const city of row){
        const td = document.createElement('td')
        //td.innerText = city
        td.innerText = 'X'
        //td.dataset.city = city
        td.dataset.row = rowNum
        td.dataset.col = colNum
        tr.appendChild(td)
        colNum++
    }
    gamearea.appendChild(tr)
    rowNum++
}

delegate(gamearea, 'td', 'click', (event, target) => {
    const r = target.dataset.row
    const c = target.dataset.col
    target.innerText = cities[r][c]
})