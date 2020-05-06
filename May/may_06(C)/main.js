// Kenneth cruz ... May 6th, 2020
// Codewar Level : 7Kyu
// Codewar problem: Return the first M multiples of N

function multiples(m, n){
  let answerArray = [n]
  let multiple = n
  for(let i = 0; i < m-1; i++ ){
    answerArray.push(multiple += n)
  }
  return answerArray;
}
