const textarea = document.querySelector('textarea')

textarea.addEventListener('keydown', event => {
    if(event.key == 'Backspace' || event.key == 'Delete' ||
      ((event.key == 'x' || event.key == 'z') && event.ctrlKey)){
        event.preventDefault()
    }
})

/*textarea.addEventListener('keyup', event => {
    if(event.key == 'Backspace' || event.key == 'Delete' ||
      ((event.key == 'x' || event.key == 'z') && event.ctrlKey)){
        event.preventDefault()
    }
})*/