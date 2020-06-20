// leetcode level: easy
// leetcode date: june 20th
// leetcode name: Running Sum of 1d Array


var runningSum = function(nums) {
    let answerArray = [];
    let counter = 0;
    for(let i = 0; i < nums.length; i++){
        if(i === 0){
            counter+=nums[i]
            answerArray.push(counter)
            counter = 0;
        }
        else{
            for(let j = 0; j <= i ; j++){
                counter+=nums[j]
            }
            answerArray.push(counter)
            counter = 0;
        }
        
    }
    return answerArray
};