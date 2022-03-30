const canvas = document.querySelector('canvas')
const brush  = canvas.getContext('2d')

// vízszintes szorzás, skewing, skewing, függőleges szorzás (tülrözzük), eltolás x, eltolás y
brush.transform(5,0,0,-5,500,500)

/*brush.beginPath()
brush.moveTo(0,0)
brush.lineTo(150,300)
brush.stroke()*/

for(let i = -100; i < 100; i++){
    brush.beginPath()
    brush.moveTo(i-1, Math.sin(i-1))
    brush.lineTo(i, Math.sin(i))
    brush.stroke()
}