const input = document.querySelector('input')
const button = document.querySelector('button')
const drawArea = document.querySelector('#draw-area')

button.addEventListener('click', event => {
    drawArea.querySelectorAll('*').forEach(elem => {
        elem.setAttributeNS(null, 'fill', input.value)
    })
})