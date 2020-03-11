<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 471955a4285792736357490466a9f45acc91bbb4
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
<<<<<<< HEAD
=======
=======
const arrayOfSums=[];
const finalFinalArray=[];
function resistance(arr){
  let numOfMiniArrays = arr.length
  console.log(arr)
  for(i=0;i<arr.length;i++){
      let sumMini = arr[i].reduce(function(a,b){
        return a +b;
      }, 0);
    arrayOfSums.push(sumMini)
//     arrayOfSums.push(sumMini)
  }
    let finalArray = arrayOfSums.slice(-arr.length)
    console.log(finalArray);
    for (j=0;j<finalArray.length;j++){
      finalFinalArray.push(1/finalArray[j])
    }
    let finalFinalArraySliced = finalFinalArray.slice(-arr.length)
    console.log(finalFinalArraySliced)
    let finalFinalArraySum = finalFinalArraySliced.reduce(function(a,b){
        return a +b;
      }, 0);
      let finalResult = 1/finalFinalArraySum
      let finalResultRounded = parseFloat(finalResult.toFixed(2))
      return finalResultRounded
}

console.log('sample answer for March 8th is: ' + ' ' + '' + resistance([[1],[2]]));
>>>>>>> 9a979218a753b6ceceb9224cc566a8dd3573c98c
>>>>>>> 471955a4285792736357490466a9f45acc91bbb4
