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


const canvas = document.querySelector('canvas')
const pen    = canvas.getContext('2d')
const widthRow = document.querySelector('#widths')
const colorRow = document.querySelector('#colors')
const deleteButton = document.querySelector('button')

const prevClick = {
    x: 0,
    y: 0,
    first: true
}
let isDrawing = false

canvas.addEventListener('mousemove',  canvasDraw)
canvas.addEventListener('mousedown',  startDrawing)
canvas.addEventListener('mouseup',    endDrawing)
canvas.addEventListener('mouseleave', endDrawing)
delegate(widthRow, 'td', 'click', selectWidth)
delegate(colorRow, 'td', 'click', selectColor)
deleteButton.addEventListener('click', deleteDrawing)

pen.lineWidth = 10
pen.lineJoin = 'round'

function startDrawing(){
    isDrawing = true
}

function endDrawing(){
    isDrawing = false
    prevClick.first = true
}

function deleteDrawing(){
    pen.clearRect(0,0,1500,800)
}

function selectWidth(event, elem){
    pen.lineWidth = elem.dataset.width

    widthRow.querySelector('.selected').classList.remove('selected')
    elem.classList.add('selected')
}

function selectColor(event, elem){
    pen.strokeStyle = elem.style.backgroundColor

    colorRow.querySelector('.selected').classList.remove('selected')
    elem.classList.add('selected')
}

function canvasDraw(event){
    if(!isDrawing) return

    const x = event.clientX - canvas.getBoundingClientRect().x
    const y = event.clientY - canvas.getBoundingClientRect().y

    if(prevClick.first){
        prevClick.first = false
    }else{
        pen.beginPath()
        pen.moveTo(prevClick.x, prevClick.y)
        pen.lineTo(x,y)
        pen.closePath()
        pen.stroke()
    }

    prevClick.x = x
    prevClick.y = y
}
