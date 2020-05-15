// Kenneth cruz ... May 14th, 2020
// Codewar Level : 7Kyu
// Codewar problem: Unique string characters.

function solve(a,b){
  let aSplit = a.split('')
  let bSplit = b.split('')
  let uniqueA = aSplit.filter(letter => !b.split('').includes(letter))
  let uniqueB = bSplit.filter(letter => !a.split('').includes(letter))
  return(uniqueA.join('')+uniqueB.join(''))
};
