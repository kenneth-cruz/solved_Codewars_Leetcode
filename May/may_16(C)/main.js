// Kenneth cruz ... May 16th, 2020
// Codewar Level : 7Kyu
// Codewar problem: Complimentary DNA

function DNAStrand(dna){
  let match = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  }
  let answerArray = [];
  dna.split('').map(function(letter){answerArray.push(match[letter])})
  return answerArray.join('')
}
