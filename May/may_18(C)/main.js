// Kenneth cruz ... May 18th, 2020
// Codewar Level : 7Kyu
// Codewar problem: Find the Next Perfect Square

function findNextSquare(sq) {
  let squareRoot = Math.sqrt(sq)
  if(squareRoot === Math.floor(squareRoot)){
  return (squareRoot+1)*(squareRoot+1);
  }
  else{
    console.log('bad');
  }
  return -1;
}
