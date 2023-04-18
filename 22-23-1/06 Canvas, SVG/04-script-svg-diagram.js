function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16)
}

/**
 * Ez a függvény okos delegálást valósít meg. Hasonló elemekre hasonló tevékenység (eseménykezelés) lefutatását teszi lehetővé.
 * @param {HTMLElement} parent Szülő HTML elem
 * @param {String} child Hasonló gyerek elemek CSS selectora
 * @param {String} when Esemény string
 * @param {Function} what Két paraméteres függvény (event, elem), ami lefut az esemény bekövetkeztekor
 */
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

const svg = document.querySelector('svg')

const incomes = [
    {
        id: 'Q1',
        income: 150000000
    },
    {
        id: 'Q2',
        income: 100000000
    },
    {
        id: 'Q3',
        income: 7000000
    },
    {
        id: 'Q4',
        income: 1000000
    }
]

let max = incomes[0].income
for(let i = 1; i < incomes.length; i++){
    if(incomes[i].income > max){
        max = incomes[i].income
    }
}
const columnWidth = svg.getAttribute('width') / 4
const columnWidthMargin = 20
const columnHeightMultiplier = 0.8

function getColumnWidth(){
    return columnWidth
}
function getColumnHeight(value){
    return (value / max) * svg.getAttribute('height')
}

incomes.forEach((currentQ, i) => {
    const incomeHeigth = getColumnHeight(currentQ.income) * columnHeightMultiplier

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        rect.setAttribute('x', (i * getColumnWidth()) + columnWidthMargin)
        rect.setAttribute('y', svg.getAttribute('height') - incomeHeigth)
        rect.setAttribute('width', getColumnWidth() - 2*columnWidthMargin)
        rect.setAttribute('height', incomeHeigth)
        rect.setAttribute('fill', `#${randomColor()}`)
    svg.appendChild(rect)

/*
    context.textAlign = 'center'
    context.font = '20px Arial'
    context.fillText(
        currentQ.income,
        (i * getColumnWidth()) + columnWidthMargin + ((getColumnWidth() - 2*columnWidthMargin) / 2),
        canvas.height - incomeHeigth - 10
    )*/
})

delegate(svg, 'rect', 'click', (event, elem) => {
    elem.setAttribute('fill', `#${randomColor()}`)
})