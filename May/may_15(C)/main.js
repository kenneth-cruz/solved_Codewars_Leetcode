// Kenneth cruz ... May 15th, 2020
// Codewar Level : 7Kyu
// Codewar problem: ATM

function solve(n) {
  console.log(n)
  let billCounter = 0;
  if(n % 10 !== 0){
    return -1
  }
    while(n >= 500){
      n -= 500;
      billCounter++
    }
    while(n >= 200){
      n -= 200;
      billCounter++
    }
    while(n >= 100){
      n -= 100;
      billCounter++;
    }
    while(n >= 50){
      n -= 50;
      billCounter++;
    }
    while(n >= 20){
      n -= 20;
      billCounter++;
    }
    while(n >= 10){
      n -= 10;
      billCounter++;
    }
  return billCounter
}
