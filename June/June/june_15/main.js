// leetcode level: easy
// leetcode name: Height Checker
// date: 6/12/2020

var heightChecker = function(heights) {
    let zoinks = heights.slice()
    let sorted = heights.sort(function(a,b) {return a-b})
    console.log(sorted)
    console.log(zoinks)
    let count = 0;
    for (let i = 0; i < sorted.length; i++){
        if(sorted[i] !== zoinks[i]){
            count++;
        }
    }
    return count
};