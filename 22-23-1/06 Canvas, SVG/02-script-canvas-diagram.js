function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16)
}

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

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
const columnWidth = canvas.width / 4
const columnWidthMargin = 20
const columnHeightMultiplier = 0.8

function getColumnWidth(){
    return columnWidth
}
function getColumnHeight(value){
    return (value / max) * canvas.height
}

incomes.forEach((currentQ, i) => {
    const incomeHeigth = getColumnHeight(currentQ.income) * columnHeightMultiplier
    context.fillStyle = `#${randomColor()}`
    context.beginPath()
    context.rect(
        (i * getColumnWidth()) + columnWidthMargin,
        canvas.height - incomeHeigth,
        getColumnWidth() - 2*columnWidthMargin,
        incomeHeigth
    )
    context.fill()

    context.textAlign = 'center'
    context.font = '20px Arial'
    context.fillText(
        currentQ.income,
        (i * getColumnWidth()) + columnWidthMargin + ((getColumnWidth() - 2*columnWidthMargin) / 2),
        canvas.height - incomeHeigth - 10
    )
})