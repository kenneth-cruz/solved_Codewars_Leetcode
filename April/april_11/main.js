// Kenneth cruz ... April 11th, 2020
// Leetcode Level : Easy
// Leetcode problem: Flipping an Image

var flipAndInvertImage = function(A) {
    let answerArray = []
    for(i=0; i<A.length; i++){
        answerArray.push(A[i].reverse())
    }
    for(i=0; i<answerArray.length; i++){
        for(j=0; j<answerArray[i].length; j++){
            if(answerArray[i][j] === 1){
                answerArray[i][j] = 0;
            }
            else{
                answerArray[i][j] = 1;
            }
        }
    }
    return(answerArray)
};
