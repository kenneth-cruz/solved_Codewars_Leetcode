function digitize(n) {
// let stringy = n;
// var l =  123456789;
// var what = (""+l)
// var digits = (""+l).split("");
// console.log(digits)
// console.log(what)


let string = n.toString()
// console.log(string)
let digits = string.split("");
// console.log(digits)
let reverser = digits.reverse()
// console.log(reverser)
let arrayR = reverser.map(Number)
// console.log(arrayR)
return arrayR

}


console.log('sample answer for March 7th is: ' + ' ' + '' + digitize(12345));
