// leetcode level easy
// leetcode date: 6.21
// leetcode name: Shuffle the Array


var shuffle = function(nums, n) {
    let answerArray = [];
    for(let i = 0 ; i < n; i++){
        answerArray.push(nums[i])
        answerArray.push(nums[i+n])
    }
    return answerArray
};