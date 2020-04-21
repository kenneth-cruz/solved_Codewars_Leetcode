// Kenneth cruz ... April 21st, 2020
// CodeWar Level : 7 KYU
// Leetcode problem: Square Every Digit

function squareDigits(num){
  let array = num.toString().split('')
  console.log(array)
  let squaredArray = [];
  for(let i = 0 ; i < array.length ; i++){
    let squared = parseInt(array[i]) * parseInt(array[i])
    squaredArray.push(squared)
  }
  let answer = parseInt(squaredArray.join(''))
  return answer
}
