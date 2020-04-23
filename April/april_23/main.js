// Kenneth cruz ... April 23rd, 2020
// CodeWar Level : 7 KYU
// Leetcode problem: Find the Divisor

function divisors(integer) {
  let answer = [];
  console.log(integer)
  for(let i = 2; i < integer; i ++){
    if(integer % i === 0){
    answer.push(i);
    console.log(i)
    console.log(answer)
  }
  }
  if (answer === undefined || answer.length == 0) {
    console.log(answer)
    return `${integer} is prime`
  }
  if(answer !== []){
    return answer
  }
};
