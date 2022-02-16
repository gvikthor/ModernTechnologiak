//DOM = Document Object Model

console.log(document)

console.log(document.querySelector('div'))
console.log(document.querySelector('div ul'))
console.log(document.querySelector('div > ul'))
console.log(document.querySelector('#firstdiv'))
console.log(document.querySelector('#firstdiv > ul'))
console.log(document.querySelector('.something'))
console.log(document.querySelectorAll('.something'))
console.log(document.querySelectorAll('div > ul'))

const li = document.querySelector('li')
li.innerText = 'alma'
li.innerHTML = '<b>alma</b>'

const solution = document.querySelector('#solution')
const array = [2,2,4,6,2,4,6]
if(array.every(even)){
    solution.innerText = 'Every number is even.'
}else{
    solution.innerText = 'Not every number is even.'
}