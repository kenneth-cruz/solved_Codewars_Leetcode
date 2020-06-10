// june 9th, 2020
// codewar level 7
// Largest pair sum in array

function largestPairSum(numbers)
{
  let orderedNumbers = numbers.sort(function(a,b) {return a-b})
  return orderedNumbers[orderedNumbers.length-1] + orderedNumbers[orderedNumbers.length-2]
}
