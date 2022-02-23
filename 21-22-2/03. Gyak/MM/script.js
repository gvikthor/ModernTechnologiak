const allRedItems = document.querySelectorAll('.red')

for(const redItem of allRedItems){
    redItem.classList.remove('red')
    redItem.classList.add('bigBlue')
}

//const allListItemInSecond = document.querySelectorAll('#second li')
const second = document.querySelector('#second')
const allListItemInSecond = second.querySelectorAll('li')

for(const listItem of allListItemInSecond){
    //listItem.style.textDecoration = 'underline'
    listItem.classList.add('underlineInSecond')
}

const verySpecificItem = document.querySelector('#first ul:nth-of-type(2) li:last-of-type')
verySpecificItem.style.fontSize = '50px'

const ulInSecond = second.querySelector('ul')
for(const li of ulInSecond.querySelectorAll('li')){
    console.log(li.dataset)
    console.log(li.dataset.city)
    console.log(li.dataset.postalCode)
    li.innerText += ` (${li.dataset.city}, ${li.dataset.postalCode})`
}

const budapestItem = document.querySelector('li[data-city="Budapest"]')
console.log(budapestItem)


//////////////////////////////////
// SZORGALMI //

const obj = [
    {
        title: 'Cím',
        list: [
            {
                content: 'Valami',
                color: 'red',
                size: 50,
                fontFamily: 'comic sans'
            }
        ],
        apply: [
            'color', 'size'
        ]
    }
]

