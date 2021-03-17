const form = document.querySelector('#user-form')
const errorsDiv = document.querySelector('#errors')

form.addEventListener('submit', (event)=>{
    const errors = []
    
    if(form.familyname.value.trim() == ''){
        errors.push(`Family name can't be empty`)
    }else if(form.familyname.value.includes('0') || form.familyname.value.includes('1')){
        errors.push(`Family name can't contain numbers`)
    }

    if(form.givenname.value.trim() == ''){
        errors.push(`Given name can't be empty`)
    }else if(form.givenname.value.includes('0') || form.familyname.value.includes('1')){
        errors.push(`Given name can't contain numbers`)
    }

    if(form.age.value.trim() == ''){
        errors.push(`Age can't be empty`)
    }else if(isNaN(form.age.value)){ //is Not a Number --> NaN javascript nem szám jelzője
        errors.push(`Age must be a number`)
    }else if(parseInt(form.age.value) < 18){
        errors.push('You must be at least 18 years old')
    }

    //deMorgan azonosság
    //if(!(form.gender.value == 'm' || form.gender.value == 'f'))
    if(form.gender.value != 'm' && form.gender.value != 'f'){
        errors.push('Gender must be from the given list')
    }

    if(!['bp','db','sz','mi','100k','10k','1k','other'].includes(form.city.value)){
        errors.push('City must be from the given list')
    }

    //console.log(form['color[]'])

    let atLeastOneChecked = false
    for(const curColor of form.color){
        if(curColor.checked){
            if(!['red', 'orange', 'yellow', 'green', 'blue', 'violet'].includes(curColor.value)){
                errors.push(`Color must be of the provided ones! ${curColor.value} is not one of those.`)
            }else{
                atLeastOneChecked = true
            }
        }
    }

    if(!atLeastOneChecked){
        errors.push('At least one valid color must be selected!')
    }

    if(errors.length > 0){
        event.preventDefault()
        errorsDiv.style.display = 'block'
        for(const error of errors){
            errorsDiv.innerHTML += `${error} <br>`
        }
    }
})