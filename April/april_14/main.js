// Kenneth cruz ... April 14th, 2020
// Leetcode Level : Easy
// Leetcode problem: Squares of a Sorted Array

var sortedSquares = function(A) {
    let answerArray = [];
    for(i = 0; i < A.length; i++){
        answerArray.push(A[i] * A[i])
    }
    return answerArray.sort(function(a,b){return a-b})
};
