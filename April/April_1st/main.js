// Kenneth cruz
// Leetcode Level : Easy
// Leetcode problem: Find Numbers with Even Number of Digits

var findNumbers = function(nums) {
    let numberOfEvens = 0;
    for (i = 0; i < nums.length; i++){
        if(nums[i].toString().length % 2 === 0){
            numberOfEvens += 1;
        }
    }
    return numberOfEvens;
};
