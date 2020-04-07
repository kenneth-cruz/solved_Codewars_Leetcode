// Kenneth cruz ... April 7th, 2020
// Leetcode Level : Easy
// Leetcode problem: Sum Digits

var addDigits = function(num) {
    let split = num.toString()
    if (split.length === 1){
        return split;
    }
    let result = 0;
    for (let i = 0; i < split.length; i++) {
        result += parseInt(split[i]);
        }
    return addDigits(result)
};
