function writeClick(event){
    console.log(event)
}

//document.body.addEventListener('click', writeClick)
//document.body.addEventListener('keydown', writeClick)

/*const li = document.querySelector('li')

li.addEventListener('click', event => {
    //console.log(event)
    //console.log(event.target)
    const target = event.target

    //target.style.color = 'red'
    target.classList.toggle('red')
})*/

/*const lis = document.querySelectorAll('li')
for(const li of lis){
    li.addEventListener('click', event => {
        event.target.classList.toggle('red')
    })
}*/

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

const ul = document.querySelector('ul')
delegate(ul, 'li', 'click', (event, target) => {
    //console.log(event)
    //console.log(target)

    target.classList.toggle('red')
})