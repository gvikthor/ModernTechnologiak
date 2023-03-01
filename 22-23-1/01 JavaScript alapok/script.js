// Egy soros komment
/*
Több
soros
komment
*/

let animal1 = "cat"
const animal2 = 'dog'

//animal2 = 'bird'

const age = 10
const isTheSkyBlue = false

console.log("Luke's lightsaber")
console.log('Obi-Wan said: "May the Force be with you"')
console.log("Obi-Wan said: \"This is Luke's lightsaber\"")
console.log(`Obi-Wan said: "This is Luke's lightsaber"`) //altgr7 backtick

console.log('George\'s favourite animal is ' + animal2)
console.log(`George's favourite animal is ${animal2}`)
console.log(`George is ${age + 6} years old.`)

console.log(5.678 / 4.3)
console.log(1 / -0)
console.log(2345654321345 < Infinity)

// and &&   altgr C
// or  ||   altgr W
// {  }     altgr B altgr N

if(true || false){

}else if(true){

}else{

}

switch(age){
    case 10:
        console.log('10 years old')
        break
    case 20:
        console.log('20 years old')
        break
    default:
        console.log('Idk how many years old.')
}

/*
def something(param):
    fjkvkdfjhfdkj
    dkljfhbxdkjbh,
    kldjfhbklxdjgb
    return lkfdjf,kj

                        function sometinh(param){
  fsklghdfksjh
                    ldkghjkjfh
kldgjhbkljgxh                          
                        }
*/

const animals = ['dog', 'cat', 'bird']
console.log(animals)
console.log(animals.length)
animals[1] = 'fish'
console.log(animals[1])

for(const animal in animals){
    console.log(animal)
} // index

for(const animal of animals){
    console.log(animal)
} // value

let i = 0
while(i < 10){
    console.log(i)
    //i = i + 1
    //i += 1
    i++
    //i--
}

//; altgr?
for(let i = 0; i < 10; i++){
    console.log(i)
}

for(let i = 0; i < animals.length; i++){
    console.log(`The ${i} animal is ${animals[i]}.`)
}

///////////////////////////

console.log(5+5)
console.log('apple'+'tree')
console.log('5' + '7')
console.log(5 + '7')
console.log(5 - '7')
console.log(true + 3)
console.log(animals + 'seal')
console.log([] - 7)
console.log(7 + [])
console.log(7 == '7')
console.log(7 === '7')

////////////////////////////////////

const person = {
    firstName: 'George',
    familyName: 'Smith',
    age: 26,
    animals: [
        {
            name: 'Nigel',
            species: 'dog',
            toy: 'squeaky toy'
        },
        {
            name: 'Steve',
            species: 'fish',
            food: 'red stuff'
        },
        {
            name: 'Poe',
            species: 'fish',
            food: 'small fish'
        }
    ]
}

for(const animal of person.animals){
    if(animal.species == 'dog'){
        console.log(`${animal.name}'s favourite toy is ${animal.toy}`)
    }else{
        console.log(`${animal.name}'s favourite food is ${animal.food}`)
    }
}