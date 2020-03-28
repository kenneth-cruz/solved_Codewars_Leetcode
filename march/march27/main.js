
// Codewars: March 27th
// Codewar Level 7: Don't Give Me Five
// Kenneth Cruz


function dontGiveMeFive(start, end) {
  let array = [];
  console.log(start,end)
  for(i=start; i<end+1; i++){
    if(i % 5 !== 0 || i % 10 === 0){
    if( i < 50 || i > 59){
      console.log(i)
      array.push(i)
      }
    }
  }
  console.log(array)
  return array.length
}
