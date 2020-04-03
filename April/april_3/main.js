// Kenneth cruz
// Leetcode Level : Easy
// Leetcode problem: Number of Steps to Reduce a Number to Zero

var numberOfSteps  = function(num) {
    let numberOfSteps = 0;
    while (num !== 0){
        if(num %2 === 0){
            num = num / 2;
            numberOfSteps ++;
        }
        else{
            num -= 1;
            numberOfSteps ++;
        }
    }
    return numberOfSteps;
};
