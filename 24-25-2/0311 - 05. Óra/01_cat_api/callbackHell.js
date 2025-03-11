// Teljesen megnehezíti, ha több ilyen ifezés van egymásban.
// Emiatt jött létre az async-await

fetch('valami')
.then(
    response => {
        if(response.valami){
            fetch('valamimás')
            .then()
        }else{
            fetch('valamiegyéb')
            .then()
        }
    }
)