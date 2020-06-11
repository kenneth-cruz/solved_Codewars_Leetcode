// codewar: level 7
// codewar name: Round up to the next multiple of 5
// date: 6/11/2020

function roundToNext5(n){
    while(n % 5 !== 0){
      n++;
    }
    return n
  }