// Kenneth cruz ... April 20th, 2020
// CodeWar Level : 7 KYU
// CodeWar problem: Highet & Lowest

function highAndLow(numbers){
  let array = numbers.split(' ')
  let sortedNumbers = array.sort(function(a,b){return a-b})
  console.log(sortedNumbers)
  let answer = (sortedNumbers[sortedNumbers.length-1] + ' ' + sortedNumbers[0])
  return answer
}
