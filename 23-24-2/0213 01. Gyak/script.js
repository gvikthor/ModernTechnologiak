//print
console.log('Hello There!')
console.log(5 + 7)
console.log('Hello' + 5)
console.log('Az életkorom 5 év múlva: ' + 5 + 5)
console.log('Az életkorom 5 év múlva: ' + (5 + 5))
console.log('5' + 5)
console.log(5 + '5')
console.log('5' - 5)
console.log('Hello' - 5)
console.log(true && true) // and
console.log(true || false) // or

/*
A*(B+C) == A*B + A*C
nem(A és B)   == nemA vagy nemB
nem(A vagy B) == nemA és nemB

(A és ((B és C) vagy (D vagy E))) és F
*/

console.log(true + 5)
console.log(false + 5)
console.log(true - 5)
console.log(false - 5)
console.log(true == 1)
console.log(true == 2)
// truthy, falsey

// if True:
//    valami utasítás
// javascriptben nem számít az indentálás, de az alt+shif+F vscodeban behúzza szépre
if (2) {
    console.log('1. Igaz volt')
}
if (0) {
    console.log('2. Igaz volt')
}
if (-1) {
    console.log('3. Igaz volt')
}
if ('') {
    console.log('4. Igaz volt')
}
if ('0') {
    console.log('5. Igaz volt')
}
console.log('0' == 0)

console.log(null)
console.log(undefined)
console.log(null == undefined)
if (null || undefined) {
    console.log('6. Igaz volt')
}

console.log(null + 5)
console.log(undefined + 5)
console.log(null + undefined)
console.log(null + 'alma' + undefined)

// python lista a javascript tömb
console.log([1,2,3,4,5])
console.log([1,'alma',true,[1,6,false],null])
console.log([1,2,3,4,5].length)

let tomb = [78,95,100,95]
console.log(tomb[0])
console.log(tomb + 5)
tomb.push(5)
console.log(tomb)
tomb['alma'] = 100
console.log(tomb['alma'])
console.log(tomb.alma)
console.log(tomb[null])
//console.error('alma')