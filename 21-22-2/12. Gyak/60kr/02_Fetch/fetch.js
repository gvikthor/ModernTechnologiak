function fetchke(celnev, fuggveny, json = true){
    if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}

function fetchy(target, funct, json = true){
    if(json) fetch(target).then(r => r.json()).then(e => funct(e))
    else     fetch(target).then(r => r.text()).then(e => funct(e))
}