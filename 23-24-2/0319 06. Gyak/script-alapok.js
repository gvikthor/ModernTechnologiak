const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

// canvas bal fentről indexel
// -----x----->
// |       (x: 100, y: 5)
// |
// y
// |
// |
// V      (x: 100, y: 100)

context.lineWidth = 10
context.lineJoin = 'round'
context.strokeStyle = 'blue'
context.fillStyle = 'red'

context.beginPath()
context.moveTo(200, 500)
context.lineTo(400, 500)
context.lineTo(200, 200)
context.arc(150, 150, 80, 0, (1/2)*Math.PI, true)
context.closePath()
context.fill()
context.stroke()

context.fillRect(100, 100, 50, 60)
context.strokeRect(100, 100, 50, 60)

const kiskutya = new Image()
kiskutya.src = 'Kiskutya-kezdocsomag.jpg'
setTimeout(()=>{
    //context.drawImage(kiskutya, 600, 30)
    //context.drawImage(kiskutya, 600, 30, 150, 100)
    context.drawImage(
        kiskutya,
        200, 100, 700, 700,
        600, 30, 150, 150
    )
}, 500)

context.clearRect(0,0,1200,600)