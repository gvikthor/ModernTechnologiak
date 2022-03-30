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
const brush  = canvas.getContext('2d')
brush.lineJoin = 'round'

const brushInfo = {
    prevX: 0,
    prevY: 0,
    mouseDown: false
}

canvas.addEventListener('mousedown', () => {
    brushInfo.mouseDown = true
})

canvas.addEventListener('mouseup', () => {
    brushInfo.mouseDown = false
})

canvas.addEventListener('mouseleave', () => {
    brushInfo.mouseDown = false
})

canvas.addEventListener('mousemove', event => {
    if(brushInfo.mouseDown){
        brush.beginPath()
        brush.moveTo(
            brushInfo.prevX - canvas.getBoundingClientRect().x,
            brushInfo.prevY - canvas.getBoundingClientRect().y
        )
        brush.lineTo(
            event.clientX - canvas.getBoundingClientRect().x,
            event.clientY - canvas.getBoundingClientRect().y
        )
        brush.closePath()
        brush.stroke()
    }

    brushInfo.prevX = event.clientX
    brushInfo.prevY = event.clientY
})


const colors = document.querySelector('#colors')
delegate( //színvltoztatás
    colors,
    'td',
    'click',
    (event, elem) => {
        brush.strokeStyle = elem.dataset.color
        colors.querySelector('.selected').classList.remove('selected')
        elem.classList.add('selected')
    }
)

const widths = document.querySelector('#widths')
delegate( //vastagság
    widths,
    'td',
    'click',
    (event, elem) => {
        brush.lineWidth = elem.dataset.width
        widths.querySelector('.selected').classList.remove('selected')
        elem.classList.add('selected')
    }
)

document.querySelector('#delete').addEventListener('click', ()=>{
    brush.clearRect(0,0,1000,1000)
})