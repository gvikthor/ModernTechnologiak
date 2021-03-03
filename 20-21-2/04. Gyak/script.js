const resultDiv = document.querySelector('#result')
const numberOne = document.querySelector('#number-one')
const numberTwo = document.querySelector('#number-two')

function addition(){
    resultDiv.innerHTML = parseFloat(numberOne.value) + parseFloat(numberTwo.value)
}

function subtraction(){
    resultDiv.innerHTML = parseFloat(numberOne.value) - parseFloat(numberTwo.value)
}

function multiplication(){
    resultDiv.innerHTML = parseFloat(numberOne.value) * parseFloat(numberTwo.value)
}

function division(){
    const number = parseFloat(numberTwo.value)
    resultDiv.innerHTML = number == 0 ? `You can't devide with zero` : parseFloat(numberOne.value) / number

    /*
    if(number == 0){
        resultDiv.innerHTML = `You can't devide with zero`
    }else{
        resultDiv.innerHTML = parseFloat(numberOne.value) / number
    }
    */
}

function colorRed(){
    resultDiv.style.color = 'red'
}


const addButton = document.querySelector('#btn-add')
const subtractButton = document.querySelector('#btn-subtract')
const multiplyButton = document.querySelector('#btn-multiply')
const divideButton = document.querySelector('#btn-divide')

/*
addButton.onclick = addition
addButton.onclick = colorRed
subtractButton.onclick = subtraction
multiplyButton.onclick = multiplication
divideButton.onclick = division
*/

addButton.addEventListener('click', addition)
subtractButton.addEventListener('click', subtraction)
multiplyButton.addEventListener('click', multiplication)
divideButton.addEventListener('click', division)

/*
addButton.addEventListener('click', colorRed)
addButton.removeEventListener('click', colorRed)
*/

/*

Egészítsétek ki a számológépet 10 gombbal, mindegyik egy-egy szám, amit beleír az inputba. (1 plusz pont)
Legyen a számok eseménykezelője delegált. (még1 plusz pont)

*/