const canvas = document.querySelector('canvas')
const brush  = canvas.getContext('2d')

brush.lineWidth = 10
brush.lineJoin = 'round'

brush.beginPath()
brush.moveTo(10,50)
brush.lineTo(10,150)
brush.lineTo(30,150)
brush.stroke()

brush.lineWidth = 25
brush.strokeStyle = 'red'
brush.fillStyle = 'blue'

brush.beginPath()
brush.moveTo(100,100)
brush.lineTo(300,300)
brush.lineTo(500,100)
//brush.lineTo(100,100)
brush.closePath()
brush.stroke()

brush.beginPath()
brush.rect(500, 300, 50, 80)
brush.stroke()

brush.beginPath()
brush.moveTo(0,0)
brush.lineTo(1000,1000)

brush.strokeRect(550, 350, 70, 80)
brush.fillRect(800,900,50,30)

brush.beginPath()
brush.arc(800,800, 50, Math.PI, (2/3)*Math.PI)
brush.stroke()

brush.beginPath()
brush.arc(600,600, 50, Math.PI, (2/3)*Math.PI, true)
brush.stroke()

brush.lineWidth = 1
brush.font = '30px Arial'
brush.strokeText('Almafa', 800, 50)
brush.fillText('Almafa', 800, 100)

//brush.clearRect(0,0,1000,1000)