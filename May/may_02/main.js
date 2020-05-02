// Kenneth cruz ... May 2nd, 2020
// CodeWar Level : 7 KYU
// CodeWar problem: Mumbling

function accum(s) {
  console.log(s, 'test')
  let answerArray = [];
  for(i=0; i<s.length; i++){
    answerArray.push(s[i].toUpperCase()+s[i].toLowerCase().repeat(i))
  }
  let stringAnswer = answerArray.join('-')
  return stringAnswer
}
