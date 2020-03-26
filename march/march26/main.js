
// Codewars: March 26 th
// Codewar Level 7: Reverse Words
// Kenneth Cruz


function reverseWords(str) {
  let splitUp = str.split(" ")
  let answer = [];
  let space = " "
  for(i=0;i<splitUp.length;i++){
  answer.push(splitUp[i].split("").reverse().join(""))
  }return answer.toString().split(",").join(space)
}
