// Kenneth cruz ... April 16th, 2020
// Leetcode Level : Easy
// Leetcode problem: Majority Element

var majorityElement = function(nums) {
    let majorityNumber = Math.ceil(nums.length/2)
    let counter = 1;
    let sortedNums = nums.sort(function(a,b){return a-b})
    if(sortedNums.length === 1 || sortedNums.length === 2){
        return sortedNums[0];
    }
    console.log(sortedNums)
        for(i=0; i<sortedNums.length-1; i++){
            if(sortedNums[i] === sortedNums[i+1]){
                counter++
                if(counter === majorityNumber){
                    return sortedNums[i]
                }
            }
        }

};
