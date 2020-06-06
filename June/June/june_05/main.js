// leetcode: Maximum Product of Two Elements in an Array
// leetcode level: easy

var maxProduct = function(nums) {
    let orderedNums = nums.sort(function(a,b){return a-b})
    console.log(orderedNums)
    let length = nums.length
    return (nums[length-1] - 1)*(nums[length-2] - 1)
};