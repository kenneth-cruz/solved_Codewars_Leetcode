// Kenneth cruz ... May 20th, 2020
// Codewar Level : 7Kyu
// Codewar problem: Largest 5 digit number in a series

function solution(digits){
  let newArray = [];
  let numberArray = []
  let arrayDigits = digits.split('')
  for(let i = 0; i < arrayDigits.length - 4; i++){
    newArray.push(arrayDigits[i]+arrayDigits[i+1]+arrayDigits[i+2]+arrayDigits[i+3]+arrayDigits[i+4])
  }
  newArray.forEach(number => numberArray.push(parseInt(number)))
  let organized = numberArray.sort(function(a,b){return a-b})
  let length = organized.length-1
  return(organized[length])
}
