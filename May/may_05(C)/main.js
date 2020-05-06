// Kenneth cruz ... May 5th, 2020
// Codewar Level : 7Kyu
// Codewar problem: Split in Parts

var splitInParts = function(s, partLength){

  let answerArray = [];
  for(let i = 0; i < s.length; i+=partLength){
    answerArray.push(s.substring(i,i+partLength));
  }
  return(answerArray.join(' '))
}
