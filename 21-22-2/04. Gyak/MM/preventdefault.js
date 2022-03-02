const textarea = document.querySelector('textarea')

textarea.addEventListener('keydown', event => {
    console.log(event.ctrlKey)
    if(event.key == 'Delete' ||event.key == 'Backspace' ||
      (event.ctrlKey && (event.key == 'z' || event.key == 'x'))){
        event.preventDefault()
    }
})

/*textarea.addEventListener('input', event => {
    console.log(event.inputType,
        event.inputType.includes('delete'))

    if(event.inputType.includes('delete')){
        event.preventDefault()
    }
})*/

