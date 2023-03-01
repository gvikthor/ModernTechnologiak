const researchers = [
    {
        name: 'Valentine Cherry',
        age: 28,
        degrees: [
            {
                title: 'Historian',
                level: 'Bachelor\'s',
                year: 2030
            },
            {
                title: 'Historian - Ancient history specialization',
                level: 'Master\'s',
                year: 2033
            },
            {
                title: 'Historian - European royal families and inheritance',
                level: 'PhD',
                year: 2037
            }
        ]
    },
    {
        name: 'George Raich',
        age: 32,
        degrees: [
            {
                title: 'Computer Science',
                level: 'Bachelor\'s',
                year: 2027
            },
            {
                title: 'Computer Science - Embedded systems specialization',
                level: 'Master\'s',
                year: 2030
            },
            {
                title: 'Computer Science - Autonomous guided missile systems',
                level: 'PhD',
                year: 2034
            }
        ]
    },
    {
        name: 'Peter Smith',
        age: 31,
        degrees: [
            {
                title: 'Physics',
                level: 'Bachelor\'s',
                year: 2028
            },
            {
                title: 'Astrophysics',
                level: 'Master\'s',
                year: 2030
            }
        ]
    },
    {
        name: 'Aron Warm',
        age: 29,
        degrees: [
            {
                title: 'Biologist',
                level: 'Bachelor\'s',
                year: 2030
            },
            {
                title: 'Zoologist',
                level: 'Master\'s',
                year: 2032
            }
        ]
    },
    {
        name: 'Laurie Pakon',
        age: 32,
        degrees: [
            {
                title: 'Psychology',
                level: 'Master\'s (undivided)',
                year: 2030
            },
            {
                title: 'Psychology - Youth mental health',
                level: 'PhD',
                year: 2035
            }
        ]
    }
]

// 1. Feladat
let youngest = researchers[0]
for(const researcher of researchers){
    if(youngest.age < researcher.age){
        youngest = researcher
    }
}
console.log(youngest.name)

// 2. Feladat
let amountOfDegrees = 0
for(const researcher of researchers){
    amountOfDegrees += researcher.degrees.length
}
console.log(amountOfDegrees)

// 3. és 4. Feladatok
/*
    Google: javascript array add elem
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

    Google: javascript array contains value
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    
    Az MDN WebDocs az official, de nyilván végtelen sok forrás van.
    Nyilván érdemes ezt használni, mert **mindig** up to date.
    A w3schools nem hivatalos dokumentáció, de általában azt
    dobja ki először.
*/

// 5. Feladat
let masters = []
for(const researcher of researchers){
    for(const degree of researcher.degrees){
        if(degree.level.includes('Master\'s')){
            masters.push(degree.title)
        }
    }
}
console.log(masters)

// 6. Feladat
let oldestPhd = {}
let alreadyFoundOne = false
for(const researcher of researchers){
    for(const degree of researcher.degrees){
        if(degree.level == 'PhD'){
            if(alreadyFoundOne){
                if(degree.year < oldestPhd.year){
                    oldestPhd = degree
                }
            }else{
                oldestPhd = degree
                alreadyFoundOne = true
            }
        }
    }
}
if(alreadyFoundOne){
    console.log(`The earliest PhD degree is ${oldestPhd.title} (${oldestPhd.year})`)
}else{
    console.log('There\'s no PhD degree.')
}