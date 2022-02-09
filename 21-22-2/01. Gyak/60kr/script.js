//var a = 5 var-t már nem használunk, le lett cserélve a let által
let b = 5
let d = 'alma'
let e = true
const c = 5

const alma = 'Valami szöveg'

////////////////////////////////////////////////////////////////
// Írjuk ki Nándornak a kedvenc filmjeit!
            //      0.              1.         2.      3.       length == 4
const movies = ['Mandalorian', 'Inside Job', 'Dune', 'Avatar']

console.log(movies)

let j = 0
while(j < movies.length){
    console.log(movies[j])
    j++
}

    //init      condition         step
for(let i = 0; i < movies.length; i++){
    console.log(movies[i])
}

//kitekintés
console.log('----------------')
for(let i = 0; i < 5; console.log(movies[i++])){}
console.log('----------------')
for(let i = 0; i < 5; console.log(movies[++i])){}
//

console.log('for in ciklus: ')
for(const i in movies){
    console.log(i)
}
//for i in range(len(movies)): python
//for i in 1:length(movies): R

console.log('for of ciklus: ')
for(const movie of movies){
    console.log(movie)
}
//for movie in movies: python

for(const movie of movies){
    console.log('Nándi egyik kedvence a(z) ' + movie + ' film')
}

// altgr 7
// `Az almafán van ${5+7+9+5+3+21+42+56+67+5+3+6} db alma`
for(const movie of movies){
    console.log(`Nándi egyik kedvence a(z) ${movie} film`)
}

// Magnánhangzó/mássalhangzó függvényében névelő

// a --> a*a + 4a - 7
// 5 --> 25  + 20 - 7
function example1(a){
    return a*a + 4*a - 7
}
function example2(a){
    const sqr = a*a
    const mult = 4*a
    return sqr + mult - 7
}
console.log(example2(10))

/*
def example1(a, b):
    return

example1 = function(a, b){
    return()
}
*/

// a,b --> a*b + a-b - 45
function example3(a, b){
    return a*b + a - b - 45
}
console.log(example3(10,5))

if('apple'[0] == 'aeroplane'[0]){
    console.log('yes')
}else{
    console.log('no')
}

/////////////////////////////////////////////////////////////////////////////////////////////////


/*
|| vagy (altgr w) ii II ll
&& és   (altgr c)

if a or b:

if(a | b){

}

if(a || b){

}
*/
function nevelo0(word){
    const first = word[0]
    let solution = ''
    if(first == 'A' || first == 'I' || first == 'a' || first == 'i'){  /*|| first == 'e'....*/
        solution = 'az'
    }else{
        solution = 'a'
    }

    return solution
}


/*
'a'.toUpperCase() ---> A
'A'.toLocaleLowerCase() ---> a

let something = 'kÖrTe'
something.toLocaleLowerCase() ---> körte
something.toUpperCase() ---> KÖRTE
*/
function nevelo1(word){
    const first = word[0].toLowerCase()
    let solution = ''
    if(first == 'a' || first == 'i'){  /*|| first == 'e'....*/
        solution = 'az'
    }else{
        solution = 'a'
    }

    return solution
}


/*
if(true){
  console.log('alma')
}else{
  console.log('körte')
}
----> alma

console.log(true ? 'alma' : 'körte') ---> alma


const solution = 5 > 6 ? 'greater' : 'smaller'
solution ----> smaller
*/
function nevelo2(word){
    const first = word[0].toLowerCase()
    let solution = (first == 'a' || first == 'i') ? 'az' : 'a'

    return solution
}


/*
['apple', 'pear', 'mushroom'].includes('apple') ----> true
['apple', 'pear', 'mushroom'].includes('pear')  ----> true
['apple', 'pear', 'mushroom'].includes('goat')  ----> false
*/
function nevelo3(word){
    const first = word[0].toLowerCase()
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű']
    let solution = vowels.includes(first) ? 'az' : 'a'

    return solution
}

function nevelo4(word){
    const first = word[0].toLowerCase()
    const vowels = 'aáeéiíoóöőuúüű'
    let solution = vowels.includes(first) ? 'az' : 'a'

    return solution
}

function nevelo5(word){
    const first = word[0].toLowerCase()
    const vowels = 'aáeéiíoóöőuúüű'

    return vowels.includes(first) ? 'az' : 'a'
}

function nevelo6(word){
    const first = word[0].toLowerCase()

    return 'aáeéiíoóöőuúüű'.includes(first) ? 'az' : 'a'
}

function nevelo7(word){
    return 'aáeéiíoóöőuúüű'.includes(word[0].toLowerCase()) ? 'az' : 'a'
}

for(const movie of movies){
    //console.log(`Nándi egyik kedvence ${nevelo7(movie)} ${movie} film.`)
    console.log(`Nándi egyik kedvence ${'aáeéiíoóöőuúüű'.includes(movie[0].toLowerCase()) ? 'az' : 'a'} ${movie} film.`)
}

function writeMovie(m){
    console.log(`Nándi egyik kedvence ${'aáeéiíoóöőuúüű'.includes(m[0].toLowerCase()) ? 'az' : 'a'} ${m} film.`)
}

for(const movie of movies){
    writeMovie(movie)
}

movies.forEach(writeMovie)


movies.forEach(movie => console.log(`Nándi egyik kedvence ${'aáeéiíoóöőuúüű'.includes(movie[0].toLowerCase()) ? 'az' : 'a'} ${movie} film.`))
