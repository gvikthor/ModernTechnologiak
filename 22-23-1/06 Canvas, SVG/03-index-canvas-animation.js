const model = {
    image: new Image(),
    x: 500,
    y: 500,
    targetX: 500,
    targetY: 500
}
model.image.src = 'ship.png'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

function next() {
    update() // Update current state
    render() // Rerender the frame
    requestAnimationFrame(next)
}

//image.addEventListener('load', next)
next()

function update() {
    if(model.x < model.targetX) model.x += 0.2
    if(model.x > model.targetX) model.x -= 0.2
    if(model.y < model.targetY) model.y += 0.2
    if(model.y > model.targetY) model.y -= 0.2
}
function render() {
    context.clearRect(0,0,1000,800)
    context.drawImage(model.image, model.x - 50, model.y - 50)
}

canvas.addEventListener('click', event => {
    model.targetX = event.clientX - canvas.getBoundingClientRect().x
    model.targetY = event.clientY - canvas.getBoundingClientRect().y
})