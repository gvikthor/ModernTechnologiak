const chName = document.querySelector('#name')
const chAddBtn = document.querySelector('#add')
const chList = document.querySelector('#chList')

function fetchke(celnev, fuggveny, json = true){
    if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}

chAddBtn.addEventListener('click', ()=>{
    fetchke(`add_character.php?newcharacter=${chName.value}`, response => {
        chName.value = ''
        chList.innerHTML = ''
        response.forEach(c => {
            const newLi = document.createElement('li')
            newLi.innerText = c.name
            chList.appendChild(newLi)
        })
    })
})