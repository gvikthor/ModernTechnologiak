/*
const rectangle = document.querySelector('rect')
rectangle.addEventListener('click', ()=>{
    console.log('alma')
})
*/

const svg = document.querySelector('svg')

//https://www.w3.org/2000/svg

/*
const newRect = document.createElement('rect')
newRect.setAttribute('width', 500)
newRect.setAttribute('height', 500)
newRect.setAttribute('x', 10)
newRect.setAttribute('y', 10)
*/


/*
const newRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

newRect.setAttributeNS(null, 'width', 500)
newRect.setAttributeNS(null, 'height', 150)
newRect.setAttributeNS(null, 'x', 50)
newRect.setAttributeNS(null, 'y', 170)
svg.appendChild(newRect)


const clickableLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
clickableLine.setAttributeNS(null, 'x1', 10)
clickableLine.setAttributeNS(null, 'x2', 150)
clickableLine.setAttributeNS(null, 'y1', 25)
clickableLine.setAttributeNS(null, 'y2', 30)
clickableLine.setAttributeNS(null, 'stroke', 'black')
clickableLine.setAttributeNS(null, 'stroke-width', 10)
clickableLine.setAttributeNS(null, 'stroke-linecap', 'round')

svg.appendChild(clickableLine)
*/

function svgCreate(svgType){
    return document.createElementNS('http://www.w3.org/2000/svg', svgType)
}
function svgAttribute(svgElement, svgAttribute, value){
    svgElement.setAttributeNS(null, svgAttribute, value)
}

const newRect = svgCreate('rect')
svgAttribute(newRect, 'width', 150)
svgAttribute(newRect, 'height', 200)
svgAttribute(newRect, 'x', 50)
svgAttribute(newRect, 'y', 60)
svg.appendChild(newRect)

const clickableLine = svgCreate('line')
svgAttribute(clickableLine, 'x1', 10)
svgAttribute(clickableLine, 'x2', 150)
svgAttribute(clickableLine, 'y1', 25)
svgAttribute(clickableLine, 'y2', 30)
svgAttribute(clickableLine, 'stroke', 'black')
svgAttribute(clickableLine, 'stroke-width', 10)
svgAttribute(clickableLine, 'stroke-linecap', 'round')
svg.appendChild(clickableLine)

clickableLine.addEventListener('click', ()=>{
    /*
    if(clickableLine.classList.contains('clicked')){
        clickableLine.classList.remove('clicked')
        svgAttribute(clickableLine, 'stroke', 'black')
    }else{
        clickableLine.classList.add('clicked')
        svgAttribute(clickableLine, 'stroke', 'gray')
    }
    */

    
    const isClicked = clickableLine.classList.toggle('clicked')
    svgAttribute(clickableLine, 'stroke', isClicked ? 'gray' : 'black')
})

///////////////////////////////////////////////////////////////////////////////////////////
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


let newLine, focusedLine
let drawing = false, coloring = false

const colorMenu = {
    redColor: {
        svg: svgCreate('rect'),
        color: 'red',
        offsetX: 0,
        offsetY: 0
    },
    orangeColor: {
        svg: svgCreate('rect'),
        color: 'orange',
        offsetX: 50,
        offsetY: 0
    },
    yellowColor: {
        svg: svgCreate('rect'),
        color: 'yellow',
        offsetX: 100,
        offsetY: 0
    },
    greenColor: {
        svg: svgCreate('rect'),
        color: 'green',
        offsetX: 0,
        offsetY: 50
    },
    blueColor: {
        svg: svgCreate('rect'),
        color: 'blue',
        offsetX: 50,
        offsetY: 50
    },
    violetColor: {
        svg: svgCreate('rect'),
        color: 'violet',
        offsetX: 100,
        offsetY: 50
    },
}

/*
const colorMenu = {
    redColor: svgCreate('rect'),
    orangeColor: svgCreate('rect'),
    yellowColor: svgCreate('rect'),
    greenColor: svgCreate('rect'),
    blueColor: svgCreate('rect'),
    violetColor: svgCreate('rect')
}
function initColorMenu(){
    svgAttribute(colorMenu.redColor, 'width', 50)
    svgAttribute(colorMenu.redColor, 'height', 50)
    svgAttribute(colorMenu.redColor, 'x', 0+0)
    svgAttribute(colorMenu.redColor, 'y', 0+0)
    svgAttribute(colorMenu.redColor, 'fill', 'red')
    svg.appendChild(colorMenu.redColor)

    svgAttribute(colorMenu.orangeColor, 'width', 50)
    svgAttribute(colorMenu.orangeColor, 'height', 50)
    svgAttribute(colorMenu.orangeColor, 'x', 0+50)
    svgAttribute(colorMenu.orangeColor, 'y', 0+0)
    svgAttribute(colorMenu.orangeColor, 'fill', 'orange')
    svg.appendChild(colorMenu.orangeColor)

    svgAttribute(colorMenu.yellowColor, 'width', 50)
    svgAttribute(colorMenu.yellowColor, 'height', 50)
    svgAttribute(colorMenu.yellowColor, 'x', 0+100)
    svgAttribute(colorMenu.yellowColor, 'y', 0+0)
    svgAttribute(colorMenu.yellowColor, 'fill', 'yellow')
    svg.appendChild(colorMenu.yellowColor)

    svgAttribute(colorMenu.greenColor, 'width', 50)
    svgAttribute(colorMenu.greenColor, 'height', 50)
    svgAttribute(colorMenu.greenColor, 'x', 0+0)
    svgAttribute(colorMenu.greenColor, 'y', 0+50)
    svgAttribute(colorMenu.greenColor, 'fill', 'green')
    svg.appendChild(colorMenu.greenColor)

    svgAttribute(colorMenu.blueColor, 'width', 50)
    svgAttribute(colorMenu.blueColor, 'height', 50)
    svgAttribute(colorMenu.blueColor, 'x', 0+50)
    svgAttribute(colorMenu.blueColor, 'y', 0+50)
    svgAttribute(colorMenu.blueColor, 'fill', 'blue')
    svg.appendChild(colorMenu.blueColor)

    svgAttribute(colorMenu.violetColor, 'width', 50)
    svgAttribute(colorMenu.violetColor, 'height', 50)
    svgAttribute(colorMenu.violetColor, 'x', 0+100)
    svgAttribute(colorMenu.violetColor, 'y', 0+50)
    svgAttribute(colorMenu.violetColor, 'fill', 'violet')
    svg.appendChild(colorMenu.violetColor)
}
*/
function initColorMenu(){
    for(const color in colorMenu){
        svgAttribute(colorMenu[color].svg, 'width', 50)
        svgAttribute(colorMenu[color].svg, 'height', 50)
        svgAttribute(colorMenu[color].svg, 'x', 0+colorMenu[color].offsetX)
        svgAttribute(colorMenu[color].svg, 'y', 0+colorMenu[color].offsetY)
        svgAttribute(colorMenu[color].svg, 'fill', colorMenu[color].color)
        colorMenu[color].svg.dataset.index = color
        colorMenu[color].svg.classList.add('color-menu-item')
        svg.appendChild(colorMenu[color].svg)

    }
}

function showColorMenu(x,y){
    for(const color in colorMenu){
        colorMenu[color].svg.style.display = 'block'
        svgAttribute(colorMenu[color].svg, 'x', x+colorMenu[color].offsetX)
        svgAttribute(colorMenu[color].svg, 'y', y+colorMenu[color].offsetY)
    }
}

function hideColorMenu(){
    for(const color in colorMenu){
        colorMenu[color].svg.style.display = 'none'
    }
}

function beginLine(event){
    if(!event.ctrlKey) return

    const x = event.clientX - svg.getBoundingClientRect().x
    const y = event.clientY - svg.getBoundingClientRect().y

    newLine = svgCreate('line')
    svgAttribute(newLine, 'x1', x)
    svgAttribute(newLine, 'x2', x)
    svgAttribute(newLine, 'y1', y)
    svgAttribute(newLine, 'y2', y)

    svgAttribute(newLine, 'stroke', 'black')
    svgAttribute(newLine, 'stroke-width', 10)
    svgAttribute(newLine, 'stroke-linecap', 'round')

    svg.appendChild(newLine)
    drawing = true
}

function moveLine(event){
    if(!drawing) return

    const x = event.clientX - svg.getBoundingClientRect().x
    const y = event.clientY - svg.getBoundingClientRect().y
    svgAttribute(newLine, 'x2', x)
    svgAttribute(newLine, 'y2', y)
}

function endLine(event){
    drawing = false
}

function clickLine(event, elem){
    const x = event.clientX - svg.getBoundingClientRect().x
    const y = event.clientY - svg.getBoundingClientRect().y
    focusedLine = elem
    showColorMenu(x,y)    
}

function recolorLine(event, elem){
    const colorElement = colorMenu[elem.dataset.index]
    svgAttribute(focusedLine, 'stroke', colorElement.color)
    hideColorMenu()
}

svg.addEventListener('mousedown', beginLine)
svg.addEventListener('mousemove', moveLine)
svg.addEventListener('mouseup', endLine)
delegate(svg, 'line', 'click', clickLine)
delegate(svg, '.color-menu-item', 'click', recolorLine)

initColorMenu()
hideColorMenu()