function condition(number){
    return true
}

console.log(
    [1,2,3,4].some(condition)
)

/*
function add(num1, num2){
  return num1+num2
}

add(1,2)
3

[1,6,3,5,8,3,1,4,6,8].reduce(add)
45

[1,6,3,5,8,3,1,4,6,8].reduce(add, -152)
-107

function add3(num1, num2){
    console.log(num1, num2)
  return num1+num2
}

[1,56,3,2,4,7,7,3,1,4].reduce(add3,0)
0 1
1 56
57 3
60 2
62 4
66 7
73 7
80 3
83 1
84 4
88

[1,56,3,2,4,7,7,3,1,4].reduce(add3)
1 56
57 3
60 2
62 4
66 7
73 7
80 3
83 1
84 4
88

[1,56,3,2,4,7,7,3,1,4].reduce(add3, '')
<empty string> 1
1 56
156 3
1563 2
15632 4
156324 7
1563247 7
15632477 3
156324773 1
1563247731 4
"15632477314"

reduce --> görgetett összeg
function something(sum, elem){}
*/

const cinemas = [
    {
        name: 'Allee',
        company: 'CinemaCity',
        movies: [
            {
                title: 'Tenet',
                student: 2500,
                adult: 3400
            },
            {
                title: 'Mulan',
                student: 1700,
                adult: 2800
            },
            {
                title: 'Almafa',
                student: 1800,
                adult: 500
            },
            {
                title: 'Körtefa',
                student: 150,
                adult: 450
            }
        ]
    },
    {
        name: 'Aréna',
        company: 'CinemaCity',
        movies: [
            {
                title: 'Tenet',
                student: 3500,
                adult: 4500
            },
            {
                title: 'Mulan',
                student: 2200,
                adult: 3400
            },
            {
                title: 'Almafa',
                student: 2100,
                adult: 700
            },
            {
                title: 'Barackfa',
                student: 4600,
                adult: 6800
            },
            {
                title: 'Körtefa',
                student: 150,
                adult: 450
            }
        ]
    },
    {
        name: 'Mammut',
        company: 'CinemaPink',
        movies: [
            {
                title: 'Tenet',
                student: 1700,
                adult: 3000
            },
            {
                title: 'Mulan',
                student: 1600,
                adult: 2400
            },
            {
                title: 'Körtefa',
                student: 200,
                adult: 500
            }
        ]
    },
    {
        name: 'Corvin',
        company: 'Corvin Mozi',
        movies: [
            {
                title: 'Almafa',
                student: 100,
                adult: 300
            },
            {
                title: 'Körtefa',
                student: 130,
                adult: 270
            }
        ]
    }
]

////////////////////////////////////////
// Adjunk meg egy mozit, ahol legalább 4 filmet vetítettek!
function atLeastFourMovies(cinema){
    return cinema.movies.length >= 4
}

/*
console.log(
    cinemas.find(atLeastFourMovies).name
)
*/

/*
if( cinemas.some(atLeastFourMovies) ){
    console.log( cinemas.find(atLeastFourMovies).name )
}else{
    console.log('There was no cinema with at least four movies.')
}
*/

//ternary operator
/*
if(condition){
    return something
}else{
    return someOtherThing
}

return condition ? something : someOtherThing
*/

console.log(
    cinemas.some(atLeastFourMovies) ?
        cinemas.find(atLeastFourMovies).name : 'There was no cinema with at least four movies.'
)

/*
function evenOddConsole(number){
    console.log(
          number % 2 == 0 ? number : -number
    )
}

[1,5,2,3,7,6,5,4,8].forEach(evenOddConsole)
*/

////////////////////////////////////////////////////////
// Szűrjük ki azokat a mozikat, ahol legalább 4 filmet vetítettek!
/*
console.log(
    cinemas.filter(atLeastFourMovies)
)
*/

/*
function writeCinema(cinema){
    console.log(`At least four movies in ${cinema.name}`)
}

cinemas.filter(atLeastFourMovies).forEach(writeCinema)
*/

/*
cinemas.filter(atLeastFourMovies).forEach(function (cinema){
    console.log(`At least four movies in ${cinema.name}`)
})
*/

cinemas.filter(atLeastFourMovies).forEach(cinema => {
    console.log(`At least four movies in ${cinema.name}`)
})

//Szűrjük ki azokat a mozikat, ahol legalább 5 filmet vetítettek!

/*
cinemas.filter(cinema => {
    return cinema.movies.length >= 5
}).forEach(cinema => {
    console.log(`At least five movies in ${cinema.name}`)
})
*/

cinemas
    .filter( cinema => cinema.movies.length >= 5 )
    .forEach( cinema => console.log(`At least five movies in ${cinema.name}`) )


// Adjunk meg egy mozit, ahol legalább 4000 felnőtt megnézte valamelyik filmet! (nem összesen)
console.log(
    cinemas.find(cinema => cinema.movies.some(movie => movie.adult >= 4000))
)

// Adjunk meg egy filmet, amit egy mozin belül legalább 4000 felnőtt megnézett!
console.log(
    cinemas.find(cinema => cinema.movies.some(movie => movie.adult >= 4000))
           .movies.find(movie => movie.adult >= 4000).title
)

// Adjuk meg, hogy összesen hányan voltak moziban!
/*
function movieSummation(movieSum, movie){
    return movieSum + movie.adult + movie.student
}

function cinemaSummation(cinemaSum, cinema){
    return cinemaSum + cinema.movies.reduce(movieSummation, 0)
}

console.log(
    cinemas.reduce(cinemaSummation, 0)
)
*/

console.log(

    cinemas.reduce(
        (cinemaSum, cinema) => cinemaSum + cinema.movies.reduce(
            (movieSum, movie) => movieSum + movie.adult + movie.student
        , 0)
    , 0)

)

// Melyik moziban adtak el összesen több mint 10000 diákjegyet?
console.log(

    cinemas.find(
        cinema => cinema.movies.reduce(
            (sum, movie) => sum + movie.student, 0
        ) > 10000
    ).name

)

/*
SZORGALMI
Adjunk meg egy CinemaCity mozit, ahol vetítették a Barackfa című filmet!

vagy  ||   altgr W
és    &&   altgr C
*/




const ebed = {
    eloetelek: [
        {
            nev: 'Libamáj',
            evoeszkoz: 'villa'
        },
        {
            nev: 'Tepertő',
            evoeszkoz: 'kéz'
        }
    ],
    foetelek: [
        {
            nev: 'Húsleves',
            evoszekoz: 'kanál'
        },
        {
            nev: 'Nagy BigMac Menü zéró kólával, borsos krumplival',
            evoeszkoz: 'bruh'
        }
    ],
    desszertek: [
        {
            nev: 'Gyümölcssaláta',
            evoeszkoz: 'kanál'
        },
        {
            nev: 'SHÜTI',
            evoeszkoz: 'http://ehok.elte.hu/nu/index.php/2021/02/21/jelentkezz-a-shuti-be'
        }
    ]
}