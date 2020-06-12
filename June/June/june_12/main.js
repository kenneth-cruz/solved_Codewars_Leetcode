//codewar: level 7
//codewar name: friend or foe
//codewar date: 6/12/2020

function friend(friends){
    let answerArray = [];
    function zoinks(friends){
      if(friends.length === 4){
      answerArray.push(friends)
      }
    }
    friends.forEach(friend => zoinks(friend));
    return(answerArray)
  }