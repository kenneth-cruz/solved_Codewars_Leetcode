// Kenneth cruz ... May 3rd, 2020
// LeetCode Level : Easy
// LeetCode problem: Kids With the Greatest Number of Candies

var kidsWithCandies = function(candies, extraCandies) {
    let bigCandy = [];
    let resultArray= [];
    let highestCandy = Math.max(...candies)
    candies.forEach(candy => bigCandy.push(candy += extraCandies));
    for(let i = 0; i < bigCandy.length; i++){
        if(bigCandy[i] < highestCandy){
            resultArray.push(false);
        }
        else{resultArray.push(true);}
    }
    return(resultArray)
};
