
// Codewars: March 30th
// Codewar Level 6: Multiples of 3 or 5
// Kenneth Cruz


function solution(number){
  console.log(number)
  let array = []
  for(i=0; i<number; i++){
  if(i%3 == 0 || i%5 ==0){
  array.push(i)
    }
  }
  let counter = 0;
  for(i=0; i<array.length; i++){
    counter += array[i]
    }
  return counter
}
