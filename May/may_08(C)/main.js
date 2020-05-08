// Kenneth cruz ... May 8th, 2020
// Codewar Level : 7Kyu
// Codewar problem: Alphabetical Addition

function addLetters(...letters) {
  let newArray = [];
  for(let i = 0; i < letters.length ; i ++){
     newArray.push(letters[i].charCodeAt(0)-96) ;
  }
  if(newArray.length === 0){
    return 'z'
  }
  let sum = newArray.reduce(function (a,b) {return a+b})
  while(sum > 26){
    sum -= 26;
  }
  let zoinks = sum + 96
  return(String.fromCharCode(zoinks))
}
