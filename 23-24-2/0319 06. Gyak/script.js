const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const kiskutya = {
    image: new Image(),
    x: 0,
    y: 0,
    draw: function (){
        context.drawImage(
            this.image,
            200, 100, 700, 700,
            this.x*100, this.y*100, 100, 100
        )
    },
    moveTo: function (x,y){
        drawTile(
            this.x*100, this.y*100,
            (this.x % 2 == 0 || this.y % 2 == 0) && !(this.x % 2 == 0 && this.y % 2 == 0)
        )
        this.x = Math.floor(x / 100)
        this.y = Math.floor(y / 100)
        this.draw()
    }
}

kiskutya.image.src = 'Kiskutya-kezdocsomag.jpg'

function drawTile(x, y, isDark){
    context.fillStyle = isDark ? 'brown' : 'blue'
    /*if(isDark){
        context.fillStyle = 'brown'
    }else{
        context.fillStyle = 'blue'
    }*/
    context.fillRect(x,y,100,100)
}

// for xIndex in range(0,10)
for(let xIndex = 0; xIndex < 10; xIndex++){
    for(let yIndex = 0; yIndex < 10; yIndex++){
        drawTile(
            xIndex*100, yIndex*100,
            (xIndex % 2 == 0 || yIndex % 2 == 0) && !(xIndex % 2 == 0 && yIndex % 2 == 0)
            // akkor legyen sötét színű, ha valamelyik páros, de nem mindkettő [KIZÁRÓ VAGY / XOR]
        )
    }
}

canvas.addEventListener('click', event => {
    const clickX = event.x - canvas.getBoundingClientRect().x
    const clickY = event.y - canvas.getBoundingClientRect().y
    //console.log(clickX, clickY)

    /*const kutyaX = Math.floor(clickX / 100)
    const kutyaY = Math.floor(clickY / 100)

    //kiskutya.draw(kutyaX, kutyaY)*/

    /*drawTile(
        kiskutya.x*100, kiskutya.y*100,
        (kiskutya.x % 2 == 0 || kiskutya.y % 2 == 0) && !(kiskutya.x % 2 == 0 && kiskutya.y % 2 == 0)
    )
    kiskutya.x = Math.floor(clickX / 100)
    kiskutya.y = Math.floor(clickY / 100)
    kiskutya.draw()*/
})

document.addEventListener('keydown', event => {
    if(event.key == 'd'){
        kiskutya.moveTo(100*(kiskutya.x+1), 100*(kiskutya.y))
    }else if(event.key == 'a'){
        kiskutya.moveTo(100*(kiskutya.x-1), 100*(kiskutya.y))
    }else if(event.key == 'w'){
        kiskutya.moveTo(100*(kiskutya.x), 100*(kiskutya.y-1))
    }else if(event.key == 's'){
        kiskutya.moveTo(100*(kiskutya.x), 100*(kiskutya.y+1))
    }
})