// Kenneth cruz ... April 5th, 2020
// Leetcode Level : Easy
// Leetcode problem: Subtract the Product and Sum of Digits of an Integer

var subtractProductAndSum = function(n) {
    let digits = n.toString().split('')
    let productOfDigits = digits.reduce(function (a,b) { return a*b})
    let counter = 0;
    for(i=0; i < digits.length ; i++){
        counter += parseInt(digits[i])
    }
    return productOfDigits - counter
};
