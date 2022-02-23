const div = document.querySelector('#szorgalmi')
const money = [10000, -7000, 3500, -75000, 120000, 2, 450, -7900]

let h1 = document.createElement('h1')
h1.innerText = 'Income'
div.appendChild(h1)

/*
let ul = document.createElement('ul')
    for(const m of money){
        if(m >= 0){
            let li = document.createElement('li')
            li.innerText = m
            ul.appendChild(li)
        }
    }
div.appendChild(ul)
*/

function pozitivParosKiir(a){
    if(a <= 0) return
    if(a % 2 == 1) return

    let eredmeny

    if(a > 100){
        eredmeny = 'nagyobb'
    }else{
        eredmeny = 'kisebb'
    }
    console.log(a)
    /*flkjédlkjb
    dfkljhsdlkjb
    sdfkjllsdkfhj*/

    return eredmeny
}

/*
let ul = document.createElement('ul')
    for(const m of money){
        if(m < 0) continue

        let li = document.createElement('li')
        li.innerText = m
        ul.appendChild(li)
    }
div.appendChild(ul)
*/

const incomes = money.filter(m => m >= 0)
const expenses = money.filter(m => m < 0)

let ul = document.createElement('ul')
    for(const m of incomes){
        let li = document.createElement('li')
        li.innerText = m
        ul.appendChild(li)
    }
div.appendChild(ul)

h1 = document.createElement('h1')
h1.innerText = 'Expense'
div.appendChild(h1)

ul = document.createElement('ul')
    for(const m of expenses){
        let li = document.createElement('li')
        li.innerText = m
        ul.appendChild(li)
    }
div.appendChild(ul)