function sign(number){
  let open = [0]
  let openT = ['0']
  if(number > 0){
  return 1
  }
  else if(number<0){
  return -1
  }
  else if(number === 0){
  return 0
  }
  // we use this to target the two edge cases where it was an array element [0] or ['0']
  else if(number * 1 === 0){
  return 0}

  else{return NaN}
}

console.log('sample answer for March 12th is: ' + ' ' + '' + sign(15));
