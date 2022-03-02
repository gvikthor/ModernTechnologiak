const elem = document.querySelector('div')
function todo(event){
    console.log(event)
}

//elem.addEventListener('click', todo)
elem.addEventListener('click', (event) => {
    console.log(event)
    event.target.style.color = 'red'
})

document.body.addEventListener('keydown', todo)

const ul = document.querySelector('ul')
const li = document.querySelector('li')

/*ul.addEventListener('click', event => {
    event.target.classList.toggle('selected')
})*/
//                 ul      'li'
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

delegate(ul, 'li', 'click', (event, target) => {
    target.classList.toggle('selected')
})

/*
const lis = ul.querySelectorAll('li')
for(const li of lis){
    li.addEventListener('click', function (event) {
        console.log(this)
        this.classList.add('selected')
    })
}
*/