// function delegálás(zöld, világoszöld, kék, rózsaszín)
function delegate(parent, child, when, what) {
    function eventHandlerFunction(event) {
        let eventTarget = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if (eventHandler.contains(closestChild)) {
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}

// funciton esemenykezelo(zöld, kék, rózsaszín)
function eventhandle(elem, when, what) {
    elem.addEventListener(when, what)
}

const shoppingListUL = document.querySelector('#shopping-list')
const addNewItemButton = document.querySelector('#add-new-item')
const newItemInput = document.querySelector('#new-item')

delegate(shoppingListUL, '.delete', 'click', (event, button) => {
    //button.parentNode.classList.toggle('done')
    event.stopImmediatePropagation()
    shoppingListUL.removeChild(button.parentNode)
})

delegate(shoppingListUL, 'li', 'click', (event, li) => {
    li.classList.toggle('done')
})


function addNewItem(){
    const itemName = newItemInput.value.trim()
    if(itemName){
        shoppingListUL.innerHTML += `
            <li class="item">
                ${itemName}
                <button class="delete">🚯</button>
            </li>
        `
        newItemInput.value = ''
    }
}

eventhandle(addNewItemButton, 'click', addNewItem)
eventhandle(newItemInput, 'keydown', (event) => {
    if(event.key == 'Enter') {
        addNewItem()
    }
})