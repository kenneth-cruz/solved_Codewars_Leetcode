function numberToPower(number, power){
  let start = 1;
  for (i=0; i<power; i++){
  start = start * number
  }
  return start;
}


console.log('sample answer for March 1st is: ' + ' ' + numberToPower(2,3));
