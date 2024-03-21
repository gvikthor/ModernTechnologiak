const passwordInput = document.querySelector('#password')
const passwordButton = document.querySelector('#check')
const strengthNumer = document.querySelector('#strenght-number')
const pointSpans = document.querySelectorAll('.point')
const messagesDiv = document.querySelector('#messages')

function $(parent = document.body, child = 'div', fillerFunction = null){
    const newElem = document.createElement(child)
    fillerFunction(newElem)
    parent.appendChild(newElem)
    return newElem
}

function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if(eventHandler.contains(closestChild)){
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}

function updatePoints(score){
    if(score < 0) score = 0
    else if(score > 10) score = 10

    strengthNumer.innerText = score
    pointSpans.forEach((span,index) => {
        if(index+1 <= score){
            span.classList.add('scored')
        }else{
            span.classList.remove('scored')
        }
    })
}

function newMessage(rule){
    $(messagesDiv, 'div', div => {
        div.classList.add(rule.severity)
        $(div, 'h2', h2 => h2.innerText = rule.title)
        $(div, 'span', span => span.innerText = rule.description)
    })
}

const passwordRules = [
    {
        author: 'Thor',
        title: 'Password.',
        description: 'Your password should not be "password"',
        severity: 'error',
        penalty: 10,
        isInDanger: function(password){
            return password.toLowerCase() == 'password'
        }
    },
    {
        author: 'Thor',
        title: 'Year',
        description: 'Your password contains a date that might be a birthday or a significant life event.',
        severity: 'warning',
        penalty: 1.5,
        isInDanger: function(password){
            return /\b(19[4-9]\d|20[0-1]\d|202[0-4])\b/.test(password)
            // Ezt nem kell érteni/használni tudni, de ez egyébként egy izgalmas dolog, hogy reguláris kifejezéssel dolgozzunk
            // ez megnézi, hogy valahol a jelszóban van-e olyan rész, ami:
            // - 19-cel kezdődik, majd 4-9 valami számmal folytatódik, és bármilyen számmal fejeződik be, VAGY
            // - 20-szal kezdődik, majd 0-val vagy 1-gyel folytatódik, és bármilyen karakterrel fejeződik be, VAGY
            // - 202-vel kezdődik, majd 0-4 valami számjeggyel fejeződik be
            // Így minden évet letesztelünk 1940-től 2024-ig
        }
    },
    {
        author: '',
        title: '',
        description: '',
        severity: 'error',
        penalty: 0,
        isInDanger: function(password){
            return false
        }
    },
    {
        author: '',
        title: '',
        description: '',
        severity: 'error',
        penalty: 0,
        isInDanger: function(password){
            return false
        }
    },
    {
        author: '',
        title: '',
        description: '',
        severity: 'error',
        penalty: 0,
        isInDanger: function(password){
            return false
        }
    },
]

function checkPassword(){
    messagesDiv.innerHTML = ''
    const password = passwordInput.value
    let score = 10
    passwordRules.forEach(rule => {
        if(rule.isInDanger(password)){
            score -= rule.penalty
            newMessage(rule)
        }
    })
    updatePoints(score)
}

passwordButton.addEventListener('click', checkPassword)