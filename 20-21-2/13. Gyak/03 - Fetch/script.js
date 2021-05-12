const timeb = document.querySelector('#time-btn')
const timep = document.querySelector('#time-p')


timeb.addEventListener('click', updateTime)

function updateTimeP(time){
    timep.innerHTML = time
}

function updateTime(){
    /*
    fetch('time.php').then((param1) => {
        param1.text().then((param2) => {
            timep.innerHTML = param2
        })
    })
    */

    /*
    fetch('time.php')
    .then(param1 => param1.text())
    .then((param2) => {
        timep.innerHTML = param2
    })
    */

    fetchke('time.php', updateTimeP, false)
}

/*
function fetchke(page, todo){
    fetch(page)
    .then(p => p.text())
    .then(e => todo(e))
}
*/

function fetchke(page, todo, json = true){
    fetch(page)
    .then(p => json ? p.json() : p.text())
    .then(e => todo(e))
}


//////////////////////////////////////
const moviesb = document.querySelector('#movies-btn')
const moviesu = document.querySelector('#movies-list')

function listMovies(movies){
    for(const movie of movies){
        const newItem = document.createElement('li')
        newItem.innerHTML =`${movie.title} was released in: ${movie.year}` 
        moviesu.appendChild(newItem)
    }
}

moviesb.addEventListener('click', ()=>{
    fetchke('movies.php?title=Star', listMovies)
    //fetchke('movies.php?title=Star Wars&year=1977', listMovies) ha meg lenne írva a php-ban valami szűrés
})