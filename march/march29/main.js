
// Codewars: March 29th
// Codewar Level 7: Odd/Even?
// Kenneth Cruz


function oddOrEven(array) {
  let counter=0;
  console.log(array)
  for(i=0;i<array.length;i++){
    counter += array[i];
  }
  if(counter % 2 === 0){
  return 'even';
  }
  else{return 'odd'}
}
