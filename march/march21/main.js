// return the two oldest/oldest ages within the array of ages passed in.

function twoOldestAges(ages){
  return(ages.sort((a, b) => a - b).slice(-2))
}

//ages.sort((a,b) => a-b)) orders the numbers from small to large
//.slice(-2) goes from end to begining (-1 then -2 index) and chops it off into a new array

console.log([1,2,3].sort((a, b) => a - b).slice(-2))
