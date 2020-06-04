// 7 KYU Simple string characters


function solve(s){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = upper.toLowerCase()
    let numberString = "0123456789"
    let answer = [0,0,0,0]
     console.log(s)
    for (i = 0 ; i < s.length; i ++){
        if(upper.includes(s[i])){
        answer[0] += 1;
        }
        else if(lower.includes(s[i])){
        answer[1] += 1;
        }
        else if(numberString.includes(s[i])){
        answer[2] += 1;
        }
        else{
        answer[3] += 1;
        }
      }
      return answer
    }
    
    // upper, lower, number, special