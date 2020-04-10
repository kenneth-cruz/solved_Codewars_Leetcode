// Kenneth cruz ... April 8th, 2020
// Leetcode Level : Easy
// Leetcode problem: Jewels and Stones

var numJewelsInStones = function(J, S) {
    let jSplit = J.split('');
    let sSplit = S.split('');
    let counter = 0;
    for(i=0; i<jSplit.length; i++){
        for (j=0; j<sSplit.length; j++){
            if(jSplit[i] === sSplit[j]){
                counter++
                }
            }
        }
    return counter;
};
