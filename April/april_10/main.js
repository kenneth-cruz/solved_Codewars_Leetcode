// Kenneth cruz ... April 10th, 2020
// Leetcode Level : Easy
// Leetcode problem: Create Target Array in the Given Order

var createTargetArray = function(nums, index) {
    console.log(nums, 'nums')
    console.log(index, 'index')
    let answer = [];
    for(i=0; i<nums.length; i++){
            answer.splice(index[i], 0, nums[i])
        }
    return answer
};
