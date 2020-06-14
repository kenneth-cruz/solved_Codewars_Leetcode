// codewar: level 7
// codewar name: the highest profit wins
// codewar date: june 14th, 2020

function minMax(arr){
    let sortedArr = arr.sort(function(a,b) {return a-b})
    return [sortedArr[0],sortedArr[sortedArr.length-1]]
  }