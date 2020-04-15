// Kenneth cruz ... April 15th, 2020
// Leetcode Level : Easy
// Leetcode problem: Unique Number of Occurrences

var uniqueOccurrences = function(arr) {
    let sortedArr = arr.sort(function(a,b){return a-b})
    console.log(sortedArr);
    let counter = 1;
    let distinctNumberArray = [];
    for(i=0; i<sortedArr.length; i++){
        if(sortedArr[i] === sortedArr[i+1]){
            counter++
        }
        if(sortedArr[i] !== sortedArr[i+1]){
            distinctNumberArray.push(counter)
            counter = 1;
        }
    }
    const s = new Set(distinctNumberArray)
    if(distinctNumberArray.length !== s.size){
         return false;
    }
    else{return true}
};
