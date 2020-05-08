// Kenneth cruz ... May 7th, 2020
// Codewar Level : 7Kyu
// Codewar problem: By 3, or not by 3? That is the question . . .

function divisibleByThree(str){
  let sum = 0;
  for(let i = 0; i < str.length ; i ++ ){
    sum += parseInt(str[i]);
  }
  if(sum % 3 === 0){
    return true;
  }
  else{return false;}
}
