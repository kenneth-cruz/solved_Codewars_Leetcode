// codewar: level 7
// codewar name: scrabble score


function scrabbleScore(str){
    let pointOne = "aeioulnrst",
    pointTwo = "dg",
    pointThree = "bcmp",
    pointFour = "fhvwy",
    pointFive = "k",
    pointEight = "jx",
    pointTen = "qz",
    score = 0,
    strLower = str.toLowerCase()
    for(let i = 0; i < strLower.length; i++){
      if(pointOne.includes(strLower[i]) === true){
        score += 1;
      }
      else if(pointTwo.includes(strLower[i]) === true){
        score += 2;
      }
      else if(pointThree.includes(strLower[i]) === true){
        score += 3;
      }
      else if(pointFour.includes(strLower[i]) === true){
        score += 4;
      }
      else if(pointFive.includes(strLower[i]) === true){
        score += 5;
      }
      else if(pointEight.includes(strLower[i]) === true){
        score += 8;
      }
      else if(pointTen.includes(strLower[i]) === true){
        score += 10;
      }
    }
    return score
  }