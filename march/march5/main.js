
function squareArea(A){
  let circumference = 4*A;
  let squareSide = circumference/ (2 * Math.PI);
  let squareArea = Math.pow(squareSide, 2)
  let end = Number(squareArea.toFixed(2))
  return end;
}

console.log('sample answer for March 5th is: ' + ' ' + '' + squareArea(5));
