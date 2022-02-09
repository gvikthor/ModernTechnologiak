//var a = 5 elavult, lecserélte a let
let a = 10
const b = 10

console.log(a)
console.log(b)

if(a == 6){
    console.log("It's 6")
    console.log('It\'s 6') // altgr Q
}else if(b == 6){
    console.log("A ain't 6 but B is")
}else{
    console.log('Neither of them is 6')
}

//               0,1,2,3,4,5, 6,7,8
const numbers = [1,6,4,3,8,10,7,9,540]

/*
for i in range(len(numbers)):
    print(numbers[i])

for num in numbers:
    print(num)

i += 1
i = i + 1
i++
*/

let i = 0
while(i < numbers.length){
    console.log(numbers[i])
    i++
}

//   init      condition            step
for(let j = 0; j < numbers.length; j++){
    console.log(numbers[j])
}

console.log('------------------')

for(const index in numbers){
    console.log(index, numbers[index])
}

for(const number of numbers){
    console.log(number)
}

//////////////////////////////////////////////////////////////////////////

const movies = ['Star Wars', 'Dune', 'It', 'Avatar']

for(const movie of movies){
    console.log(`A(z) ${movie} egy nagyon sikereses film.`) // altgr 7
}

/*
gyök
4 --> 2
81 --> 9

összeadás
5,7 --> 12

angol
Van egy almám. --> I have an apple.

def example(param1, param2):
    sum = param1 + param2
    something = sum*sum / 16 + 95
    return something - 8
*/

function example(a, b){
    sum = a + b
    something = (sum*sum) / (45 * 9) + 7
    return something - 798
}

console.log( example(5,7) )

function multipleToConsole(arr, multiple){
    for(const n of arr){
        console.log(n * multiple)
    }
}

const asd = multipleToConsole( [1,6,4,2,3], 5 )
console.log(asd)


function nevelo0(movie){
    return 'A(z)'
}
console.log(nevelo0('Interstellar'))

/*
let alma = 'dlasfgéslfkgsaégkl'
alma[0] ---> "d"
alma[7] ---> "s"
'édlfkésldk'[0] ---> "é"

if a or b and c:

if(a || b && c){}  algtr w   altgr c
*/
function nevelo1(movie){
    const first = movie[0]
    const firstLetterIsVowel = (first == 'a' || first == 'á' || first == 'e' || first == 'i' || first == 'A' || first == 'I') // ez egy nagyon hosszú sor, ha minden magánhangzót kiírok
    if(firstLetterIsVowel){
        return 'Az'
    }else{
        return 'A'
    }
}

function nevelo2(movie){
    let solution = ''
    const first = movie[0]
    const firstLetterIsVowel = (first == 'a' || first == 'á' || first == 'e' || first == 'i' || first == 'A' || first == 'I') // ez egy nagyon hosszú sor, ha minden magánhangzót kiírok
    
    if(firstLetterIsVowel){
        solution = 'Az'
    }else{
        solution = 'A'
    }

    return solution
}

function nevelo3(movie){
    let solution = ''
    const first = movie[0]
    const firstLetterIsVowel = (first == 'a' || first == 'á' || first == 'e' || first == 'i' || first == 'A' || first == 'I') // ez egy nagyon hosszú sor, ha minden magánhangzót kiírok
    
    //solution = if(firstLetterIsVowel){'Az'}else{'A'}
    solution = firstLetterIsVowel ? 'Az' : 'A'

    return solution
}

function nevelo4(movie){
    const first = movie[0]
    const firstLetterIsVowel = (first == 'a' || first == 'á' || first == 'e' || first == 'i' || first == 'A' || first == 'I') // ez egy nagyon hosszú sor, ha minden magánhangzót kiírok

    return firstLetterIsVowel ? 'Az' : 'A'
}

/*
[1,5,7,3].includes(5) ---> true
[1,5,7,3].includes(10) ---> false
['apple', 'strawberry', 'cheese'].includes('apple') ---> true
['apple', 'strawberry', 'cheese'].includes('goat') ---> false
*/
function nevelo5(movie){
    const first = movie[0]
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű'] //nagybetűk hiányoznak
    const firstLetterIsVowel = vowels.includes(first)

    return firstLetterIsVowel ? 'Az' : 'A'
}

/*
'aLmAfaKörtEFA'.toUpperCase() ---> "ALMAFAKÖRTEFA"
'aLmAfaKörtEFA'.toLowerCase() ---> "almafakörtefa"
'aLmAfaKörtEFA'[0].toUpperCase() ---> "A"
*/
function nevelo6(movie){
    const first = movie[0].toLowerCase()
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű']
    const firstLetterIsVowel = vowels.includes(first)

    return firstLetterIsVowel ? 'Az' : 'A'
}

function nevelo7(movie){
    const first = movie[0].toLowerCase()
    const vowels = 'aáeéiíoóöőuúüű'
    const firstLetterIsVowel = vowels.includes(first)

    return firstLetterIsVowel ? 'Az' : 'A'
}
function nevelo8(movie){
    return 'aáeéiíoóöőuúüű'.includes(movie[0].toLowerCase()) ? 'Az' : 'A'
}

function nevelo(word){
    const first = word[0].toLowerCase()
    const vowels = 'aáeéiíoóöőuúüű'

    return vowels.includes(first) ? 'Az' : 'A'
}

for(const movie of movies){
    console.log(`${nevelo8(movie)} ${movie} egy nagyon sikereses film.`) // altgr 7
    console.log(`${'aáeéiíoóöőuúüű'.includes(movie[0].toLowerCase()) ? 'Az' : 'A'} ${movie} egy nagyon sikereses film.`)
}