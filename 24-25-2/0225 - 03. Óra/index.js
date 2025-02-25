// function delegálás(zöld, világoszöld, kék, rózsaszín)
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

// funciton esemenykezelo(zöld, kék, rózsaszín)
function eventhandle(elem, when, what) {
    elem.addEventListener(when, what)
}

const firstButton = document.querySelector('#first-button')

function firstButtonEvent() {
    console.log('Yay! I\'ve been clicked!')
}

/*
ugyanaz, mint a felette lévő
const firstButtonEvent = function() {
    console.log('Yay! I\'ve been clicked!')
}
*/

//firstButton.addEventListener('click', firstButtonEvent)
//eventhandle(firstButton, 'click', firstButtonEvent)


/*
eventhandle(firstButton, 'click', function(){
    console.log('Yay!')
})
*/
//eventhandle(firstButton, 'click', () => console.log('Yay!'))


eventhandle(firstButton, 'click', (event) => {
    /*
    if(event.altKey) {
        console.log('Alt is pressed 🐒')
    } else {
        console.log('Clicked 🐈')
    }
    */

    console.log(event.altKey ? 'Alt is pressed 🐒' : 'Clicked 🐈')
})


/////////////////////
/// Shopping list ///
/////////////////////

/*
const lis = document.querySelectorAll('li')

lis.forEach(li => {
    eventhandle(li, 'click', event => {
        li.style.textDecoration = 'line-through'
    })
})


for(let li of lis) {
    eventhandle(li, 'click', event => {
        li.style.textDecoration = 'line-through'
    })
}
*/


const shoppingListUL = document.querySelector('#shopping-list')

delegate(shoppingListUL, 'li', 'click', (event, li) => {
    li.classList.toggle('done')
})

/*
delegate(shoppingListUL, 'li', 'click', (event, li) => {
    if(li.classList.contains('done')){
        li.classList.remove('done')
    }else{
        li.classList.add('done')
    }
})
*/