# 5. Óra: API
- Application Programming Interface

Pár teszt API:
- https://thecatapi.com/
- https://randomuser.me/
- https://pokeapi.co/
- https://jsonplaceholder.typicode.com/
- https://restcountries.com/

Egyszerűsített fetch függvény
```JS
function fetchke(celnev, fuggveny, json = true) {
    if (json)
        fetch(celnev)
        .then(v => v.json())
        .then(e => fuggveny(e))
    else
        fetch(celnev)
        .then(v => v.text())
        .then(e => fuggveny(e))
}
```
