const canvas = document.querySelector('canvas')
const pen    = canvas.getContext('2d')

// indexelés: bal fent 0,0 ; jobbra nő az x, lefele nő az y
// útvonal megkezdése (nem mindig kell)
// honnan?
// hova? --> terv
// kirajzolás

pen.beginPath()      // útvonal megkezdése
pen.moveTo(300,100)  // honnan?
pen.lineTo(500,150)  // hova? --> terv
pen.lineTo(600,50)   // hova? --> terv
pen.lineTo(400,90)   // hova? --> terv
pen.lineTo(150,150)  // hova? --> terv
pen.lineTo(300,300)  // hova? --> terv
pen.closePath()      // hova? --> terv
pen.stroke()         // kirajzolás --> mindent, a korábbi begin path-ig

pen.strokeStyle = 'red'
pen.lineWidth = 10
pen.lineJoin = 'round'

pen.beginPath()
pen.moveTo(500,500)
pen.lineTo(800,700)
pen.lineTo(700,600)
pen.stroke()

pen.strokeStyle = 'blue'

pen.beginPath()
pen.rect(400,300,400,30)
pen.stroke()

pen.beginPath()
pen.arc(900,600,15,(3/2)*Math.PI,Math.PI)
pen.stroke()

pen.clearRect(300,600, 500,150)