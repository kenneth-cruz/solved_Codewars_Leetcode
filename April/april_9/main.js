// Kenneth cruz ... April 9th, 2020
// Leetcode Level : Easy
// Leetcode problem: Split a String in Balanced Strings

var balancedStringSplit = function(s) {
    let balance = 0
    let answer = 0
    console.log(s)
    for(i=0; i<s.length; i++){
        if(s[i] === 'R'){
            balance --
            if(balance === 0){
                answer++
            }
        }
        if(s[i] === 'L'){
            balance ++
            if(balance === 0){
                answer++
            }
        }
        console.log(balance)
    }
    return answer
};
