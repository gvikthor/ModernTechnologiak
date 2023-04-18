const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

context.fillStyle = 'red'
context.lineWidth = 10
//context.lineJoin = 'round'

context.beginPath()
context.moveTo(100, 100)
context.lineTo(300, 100)
context.lineTo(300, 600)
context.lineTo(200, 500)
//context.lineTo(100, 100)
context.closePath()

context.fill()
context.stroke()

context.fillStyle = '#13294B'
context.beginPath()
context.rect(20, 30, 200, 300)
context.fill()

//context.fillRect(...)
//context.strokeRect(...)

context.fillStyle = 'red'
context.beginPath()
context.arc(500, 500, 100, 0, (2*Math.PI)/3, true)
context.closePath()
context.fill()
context.stroke()

const appleImage = new Image()
appleImage.src = 'alma.jpg'
appleImage.addEventListener('load', event => {
    //context.drawImage(appleImage, 100, 100)  
    //context.drawImage(appleImage, 100, 100, 100, 500)  
    context.drawImage(appleImage, 236, 82, 371, 199, 100, 100, 600, 100)  
})