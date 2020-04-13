// Kenneth cruz ... April 13th, 2020
// Leetcode Level : Easy
// Leetcode problem: N-Repeated Element in Size 2N Array

var repeatedNTimes = function(A) {
    console.log(A)
    let sortedA = A.sort(function(a,b){return a-b})
    console.log(A.length)
    console.log(sortedA)
    let counter = 1;
    for(i = 0; i < sortedA.length-1; i++){
        if(sortedA[i] === sortedA[i+1]){
            counter++
            if (counter === sortedA.length/2){
                return sortedA[i]
            }
        }
        if(sortedA[i] !== sortedA[i+1]){
            counter = 1;
            if (counter === sortedA.length/2){
                return sortedA[i]
            }
        }
    }
};
