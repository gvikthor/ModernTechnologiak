const canvas = document.querySelector('canvas')
const brush  = canvas.getContext('2d')

brush.beginPath()
brush.moveTo(100,400)
brush.lineTo(100,700)
brush.lineTo(200,700)
brush.stroke()

brush.beginPath()
brush.rect(400,200, 50,30)
brush.stroke()

brush.beginPath()
brush.arc(800,800, 50, 0, 2*Math.PI)
brush.stroke()

brush.strokeStyle = 'red'
brush.lineWidth = 2
brush.font = '30px Arial'
brush.fillStyle = 'red'

brush.beginPath()
brush.arc(600,600, 50, Math.PI, (2/3)*Math.PI)
brush.stroke()

brush.beginPath()
brush.arc(400,400, 50, Math.PI, (2/3)*Math.PI, true)
brush.stroke()

brush.fillText('Alma', 50, 70)
brush.strokeText('Körte', 100,100)

brush.fillRect(30,30, 10,20)
brush.strokeRect(50,50, 10,20)


brush.lineWidth = 20
brush.lineJoin = 'round'
brush.beginPath()
brush.moveTo(100,100)
brush.lineTo(100,200)
brush.lineTo(200,200)
brush.closePath()
brush.stroke()