const button = document.querySelector('button')

function testFunction(event){
    console.log(event)
}

button.addEventListener('click', testFunction)
button.addEventListener('mouseenter', testFunction)
button.addEventListener('mouseleave', testFunction)
button.addEventListener('mousemove', testFunction)

/////////////////////////////////////////////////////

/*
const rainbowRed = document.querySelector('#rainbow-red')
const rainbowOrange = document.querySelector('#rainbow-orange')
const rainbowYellow = document.querySelector('#rainbow-yellow')
const rainbowGreen = document.querySelector('#rainbow-green')
const rainbowBlue = document.querySelector('#rainbow-blue')
const rainbowPurple = document.querySelector('#rainbow-purple')


function addLengthToRed(){
    rainbowRed.innerHTML += 'x'
}

function addLengthToOrange(){
    rainbowOrange.innerHTML += 'x'
}


rainbowRed.addEventListener('click', addLengthToRed)
rainbowOrange.addEventListener('click', addLengthToOrange)


rainbowRed.addEventListener('click', addLength)
rainbowOrange.addEventListener('click', addLength)
*/


/*
const colorsOfRainbow = document.querySelectorAll('.color')

function addLength(event){
    event.target.innerHTML += 'x'
}

//colorsOfRainbow.addEventListener('click', addLength) NEM FOG MŰKÖDNI
for(const color of colorsOfRainbow){
    color.addEventListener('click', addLength)
}
*/

const rainbow = document.querySelector('#rainbow')

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

function addLength2(event, element){
    element.innerHTML += 'x'
}

//       szülő    gyerek    esemény  függvény(két paraméteres, esemény és elem)
delegate(rainbow, '.color', 'click', addLength2)