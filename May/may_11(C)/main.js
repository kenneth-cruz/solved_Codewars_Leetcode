// Kenneth cruz ... May 10th, 2020
// Codewar Level : 6Kyu
// Codewar problem: Persistent Bugger.

function persistence(num) {
  let numberOfRounds = 0;
  let numberString = num.toString();
  while(numberString.length > 1) {
    numberOfRounds ++;
    numberString = numberString.split('').map(Number).reduce(function (a,b) {return a*b}).toString()
  }
  return numberOfRounds
}
