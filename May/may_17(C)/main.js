// Kenneth cruz ... May 17th, 2020
// Codewar Level : 7Kyu
// Codewar problem: Isograms

function isIsogram(str){
  if(str.length === 0){
  return true;
  }
  for(let i = 0 ; i < str.toLowerCase().length; i ++){
    for(let j = 0; j < str.toLowerCase().length; j++){
      if(i !== j && str.toLowerCase()[i] === str.toLowerCase()[j]){
        return false;
      }
    }
  }
  return true
}
