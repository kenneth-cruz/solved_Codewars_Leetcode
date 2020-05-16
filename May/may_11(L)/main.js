// Kenneth cruz ... May 11th, 2020
// LeetCode Level : easy
// LeetCode problem: Single Number

var singleNumber = function(nums) {
    var uniq = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j] && i != j) break;
            else if (j == nums.length - 1) uniq.push(nums[i])
        }
    }
    return uniq
};
