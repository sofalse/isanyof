require('./index.js')

var bool = true
var number = 2

console.log(bool.isanyof(true, true, false))
console.log(bool.isanyof(false, false))
console.log(number.isanyof(5, 1, true))
console.log(number.isanyof(5, 1, 2))