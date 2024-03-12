const peldaElem = document.body // ez lehetne egy querySelector is

function peldaFunction(event){
    console.log(event)
}

//peldaElem.addEventListener('click', peldaFunction)

/*peldaElem.addEventListener('click', function (event) {
    console.log(event)
})
*/
/*
let shouldThisEventHappen = false
peldaElem.addEventListener('click', event => {
    if(!shouldThisEventHappen) return

    console.log(event)
})
*/