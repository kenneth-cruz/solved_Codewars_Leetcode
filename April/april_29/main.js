// Kenneth cruz ... April 29th, 2020
// CodeWar Level : 7 KYU
// CodeWar problem: Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  let sortedNumbers = numbers.sort(function(a,b){return a-b})
  return sortedNumbers[0] + sortedNumbers[1]

}
