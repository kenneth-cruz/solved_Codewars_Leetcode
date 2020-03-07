// In this simple assignment
// you are given a number and
// have to make it negative. But
// maybe the number is already negative?

//ANSWER//
function makeNegative(number) {
  let neg = -1 * number
  if (number < 0 ){
  return(number)
  }
  else{
  return(neg)}
}


console.log( 'test question four answer:' + ' '+ makeNegative(10))
